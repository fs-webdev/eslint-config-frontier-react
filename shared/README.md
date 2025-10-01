# @fs/eslint-config-qa-shared

Shared ESLint configuration for FamilySearch QA projects. This configuration provides a comprehensive set of linting rules optimized for testing frameworks and QA workflows.

## Features

- **Self-contained**: No external config dependencies - all rules are inlined for complete control
- **QA-focused**: Optimized for WebdriverIO, Cypress, Jest, and other testing frameworks
- **TypeScript support**: Built-in TypeScript configuration overrides
- **Custom rules**: Includes custom rules for better RTL support and code quality
- **Multi-environment**: Supports browser, Node.js, and test environments

## Installation

```bash
npm install --save-dev @fs/eslint-config-qa-shared

```

You'll also need to install the required peer dependencies:

```bash
npm install --save-dev @babel/eslint-parser eslint eslint-plugin-cypress eslint-plugin-import eslint-plugin-jest eslint-plugin-jest-dom eslint-plugin-jsdoc eslint-plugin-mocha eslint-plugin-prettier eslint-plugin-promise eslint-plugin-sonarjs eslint-plugin-test-selectors eslint-plugin-testing-library

```

For TypeScript support, also install:

```bash
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser

```

## Usage

### Basic Configuration

Create an `.eslintrc.cjs` file in your project root:

```javascript
module.exports = {
  extends: ['@fs/eslint-config-qa-shared'],
}

```

### With Custom Rules

To use the custom rules provided by this package:

```javascript
module.exports = {
  extends: ['@fs/eslint-config-qa-shared'],
  plugins: ['@fs/eslint-config-qa-shared/plugin'],
  rules: {
    'qa-shared/logical-over-directional': 'warn',
    'qa-shared/no-eslint-disable': 'warn',
  },
}

```

### TypeScript Projects

The configuration automatically detects and applies TypeScript-specific rules to `.ts` and `.tsx` files.

## Custom Rules

### `logical-over-directional`

Enforces logical CSS properties over directional ones for better RTL (right-to-left) language support.

**Bad:**

```javascript
const styles = {
  marginLeft: '10px',
  paddingRight: '5px'
}

```

**Good:**

```javascript
const styles = {
  marginInlineStart: '10px',
  paddingInlineEnd: '5px'
}

```

### `no-eslint-disable`

Requires explanatory comments when using `eslint-disable` directives.

**Bad:**

```javascript
// eslint-disable-next-line no-console
console.log('debug')

```

**Good:**

```javascript
// eslint-disable-next-line no-console -- debugging during development
console.log('debug')

```

## File-specific Overrides

The configuration includes specific overrides for different file types:

- **Test files** (`*.test.js`, `*.spec.js`, `*.cy.js`): Relaxed rules for test-specific patterns
- **TypeScript files** (`*.ts`, `*.tsx`): TypeScript-specific rules and parser
- **Configuration files**: Appropriate rules for config and setup files

## Rule Philosophy

This configuration follows a layered approach:

1. **Error-level rules**: Prevent bugs and runtime errors
2. **Warning-level rules**: Encourage best practices and maintainability
3. **Disabled rules**: Rules that don't fit QA testing patterns

## Contributing

When making changes to this configuration:

1. Consider backward compatibility with existing projects
2. Add tests for new custom rules
3. Update documentation for rule changes
4. Follow semantic versioning for releases

## License

MIT
