#!/usr/bin/env node
/*
 * This repo has no test suite, so nothing catches a typo'd rule name, a plugin that isn't
 * declared as a peerDependency, or a config that stops resolving -- those ship to consumers
 * and break their lint runs instead. This script asks ESLint to fully resolve every shareable
 * config in the repo, which is the same work ESLint does in a consuming app before it lints a
 * single file. If a config resolves, consumers can extend it.
 *
 * Run it with `npm run validate:configs`.
 */

/* eslint-disable no-console -- this is a CLI script; the console output IS the report */
const { execFileSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const repoRoot = path.join(__dirname, '..')
const { name: packageName } = require('../package.json')

// Not a shareable config -- just the prettier rule values that prettierSetup.js imports.
const NOT_A_CONFIG = ['prettierConfig.js']

/*
 * Several configs only apply through `overrides` (json.js to *.json, typescript.js to *.ts?(x)),
 * and index.js only applies esx.js under src/**. Resolving against a single .js path would report
 * those as empty, so resolve every config against each of these and require that at least one
 * produces rules. The paths don't need to exist -- ESLint matches the globs against the path.
 */
const TARGETS = ['index.js', 'src/index.js', 'package.json', 'index.ts', 'index.tsx']

/*
 * index.js extends its own siblings by package name (`@fs/eslint-config-frontier-react/react`),
 * which resolves in a consuming app but not in this repo unless the package can find itself.
 * Symlink it into node_modules so the self-references resolve the same way they will downstream.
 */
function linkSelfIntoNodeModules() {
  const [scope, bareName] = packageName.split('/')
  const scopeDir = path.join(repoRoot, 'node_modules', scope)
  const linkPath = path.join(scopeDir, bareName)

  if (fs.existsSync(linkPath)) return
  fs.mkdirSync(scopeDir, { recursive: true })
  fs.symlinkSync(repoRoot, linkPath, 'dir')
  console.log(`Linked ${packageName} into node_modules so its self-references resolve\n`)
}

function resolveConfig(configFile, target) {
  const stdout = execFileSync(
    process.execPath,
    [
      path.join(repoRoot, 'node_modules/eslint/bin/eslint.js'),
      '--no-eslintrc',
      '--config',
      path.join(repoRoot, configFile),
      '--print-config',
      target,
    ],
    {
      cwd: repoRoot,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      // ESLint 9 defaults to flat config, where --no-eslintrc/--config mean something else.
      // These configs are all eslintrc-style, so pin the mode for the 8-or-9 peer range.
      env: { ...process.env, ESLINT_USE_FLAT_CONFIG: 'false' },
    }
  )
  return JSON.parse(stdout)
}

const configFiles = fs
  .readdirSync(repoRoot)
  .filter((file) => file.endsWith('.js') && !NOT_A_CONFIG.includes(file))
  .sort()

linkSelfIntoNodeModules()

const failures = []

configFiles.forEach((configFile) => {
  let ruleCount = 0
  try {
    TARGETS.forEach((target) => {
      const { rules } = resolveConfig(configFile, target)
      ruleCount = Math.max(ruleCount, Object.keys(rules || {}).length)
    })
  } catch (error) {
    // ESLint writes the useful part (unresolvable extends, unknown plugin, syntax error) to stderr.
    failures.push({ configFile, reason: (error.stderr || error.message).trim() })
    console.log(`FAIL  ${configFile}`)
    return
  }

  if (ruleCount === 0) {
    failures.push({ configFile, reason: `Resolved to zero rules against every one of: ${TARGETS.join(', ')}` })
    console.log(`FAIL  ${configFile} (resolved, but contributed no rules)`)
    return
  }

  console.log(`ok    ${configFile} (${ruleCount} rules)`)
})

if (failures.length > 0) {
  console.error(`\n${failures.length} of ${configFiles.length} configs failed to resolve:\n`)
  failures.forEach(({ configFile, reason }) => console.error(`--- ${configFile}\n${reason}\n`))
  process.exit(1)
}

console.log(`\nAll ${configFiles.length} configs resolve.`)
