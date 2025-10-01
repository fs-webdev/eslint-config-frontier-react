/**
 * ESLint rule: logical-over-directional
 * Enforces logical CSS properties over directional ones for better RTL support
 * Originally from @fs/eslint-plugin-zion
 */

function kebabToCamel(str) {
  return str.replace(/(-\w)/g, (match) => match[1].toUpperCase())
}

const cssRuleProperties = Object.entries({
  'margin-left': 'margin-inline-start',
  'margin-right': 'margin-inline-end',
  'padding-left': 'padding-inline-start',
  'padding-right': 'padding-inline-end',
  left: 'inset-inline-start',
  right: 'inset-inline-end',
  'border-right': 'border-inline-end',
  'border-left': 'border-inline-start',
  'border-top-left-radius': 'border-start-start-radius',
  'border-top-right-radius': 'border-start-end-radius',
  'border-bottom-left-radius': 'border-end-start-radius',
  'border-bottom-right-radius': 'border-end-end-radius',
  'border-left-color': 'border-inline-start-color',
  'border-right-color': 'border-inline-end-color',
  'border-left-width': 'border-inline-start-width',
  'border-right-width': 'border-inline-end-width',
  'border-left-style': 'border-inline-start-style',
  'border-right-style': 'border-inline-end-style',
})

const inlineRuleProperties = cssRuleProperties.map(([bad, good]) => [kebabToCamel(bad), kebabToCamel(good)])

function getCssPropertyViolations(css) {
  const violations = []
  cssRuleProperties.forEach(([bad]) => {
    const matchingProperties = css.match(new RegExp(`(^|\\s)${bad}\\s*:`, 'g'))
    if (matchingProperties?.length > 0) {
      violations.push(bad)
    }
  })
  return violations
}

function getInlinePropertyViolations(css) {
  const violations = []
  inlineRuleProperties.forEach(([bad]) => {
    const matchingProperties = css.match(new RegExp(`(^|\\s)${bad}\\s*:`, 'g'))
    if (matchingProperties?.length > 0) {
      violations.push(bad)
    }
  })
  return violations
}

export const logicalOverDirectional = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce logical CSS properties over directional ones for better RTL support',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      Literal(node) {
        if (typeof node.value === 'string' && node.value.includes(':')) {
          const css = node.value
          const violations = getCssPropertyViolations(css)
          if (violations.length > 0) {
            context.report({
              node,
              message: `Use logical CSS properties instead of directional ones: ${violations.join(', ')}`,
            })
          }
        }
      },

      TemplateLiteral(node) {
        if (node.quasis.length > 0) {
          const css = node.quasis.map((q) => q.value.cooked || q.value.raw).join('')
          const violations = getCssPropertyViolations(css)
          if (violations.length > 0) {
            context.report({
              node,
              message: `Use logical CSS properties instead of directional ones: ${violations.join(', ')}`,
            })
          }
        }
      },

      Property(node) {
        if (node.key && node.key.type === 'Identifier') {
          const violations = getInlinePropertyViolations(node.key.name + ':')
          if (violations.length > 0) {
            context.report({
              node,
              message: `Use logical CSS properties instead of directional ones: ${violations.join(', ')}`,
            })
          }
        }
      },
    }
  },
}
