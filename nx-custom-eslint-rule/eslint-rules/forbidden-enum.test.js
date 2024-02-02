const rule = require('./forbidden-enum');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});

ruleTester.run('forbidden-enum', rule, {
  valid: [
    `type Directions = "North" | "South" | "East" | "West";`,
  ],
  invalid: [
    {
      code: `enum Directions { North, South, East, West }`,
      errors: [{ message: 'Usage of enums is forbidden. Consider using string unions instead.' }],
    },
  ],
});
