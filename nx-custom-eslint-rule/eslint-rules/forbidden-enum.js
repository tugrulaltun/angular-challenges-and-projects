module.exports = {
  create(context) {
    return {
      TSEnumDeclaration(node) {
        context.report({
          node,
          message: 'Usage of enums is forbidden. Consider using string unions instead.',
        });
      },
    };
  },
};
