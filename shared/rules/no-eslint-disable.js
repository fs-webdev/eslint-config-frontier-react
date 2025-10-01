/**
 * ESLint rule: no-eslint-disable
 * Requires comments when using eslint-disable
 * Originally from eslint-plugin-bestpractices
 */

const eslintDisabledRegex = /^eslint-disable(?!.*(--)+\s+\w+)/ // Discover any place that eslint-disable is used WITHOUT a comment

export const noEslintDisable = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Require comments when using eslint-disable',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      Program(node) {
        for (const comment of node.comments) {
          const value = comment.value.trim()
          const match = eslintDisabledRegex.exec(value)

          if (match) {
            // The discovered matching eslint-disable infraction
            context.report({
              loc: {
                start: {
                  ...comment.loc.start,
                  column: -1,
                },
                end: comment.loc.end,
              },
              message: 'Found eslint-disable without " -- comment"',
            })
          }
        }
      },
    }
  },
}
