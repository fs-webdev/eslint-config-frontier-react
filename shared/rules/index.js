/**
 * Custom ESLint Rules
 * Self-contained rules to avoid external dependencies
 */

import { logicalOverDirectional } from './logical-over-directional.js'
import { noEslintDisable } from './no-eslint-disable.js'

export const rules = {
  'logical-over-directional': logicalOverDirectional,
  'no-eslint-disable': noEslintDisable,
}
