/**
 * ESLint Plugin for @fs/eslint-config-frontier-react/shared
 *
 * This plugin provides custom rules that can be used alongside the configuration.
 * To use these rules in your project:
 *
 * 1. Add this as a plugin in your ESLint config:
 *    plugins: ['@fs/eslint-config-frontier-react/shared/plugin']
 *
 * 2. Enable the rules you want:
 *    rules: {
 *      'shared/logical-over-directional': 'warn',
 *      'shared/no-eslint-disable': 'warn'
 *    }
 */

import { rules } from './rules/index.js'

export default {
  rules,
}
