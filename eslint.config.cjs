const reactNative = require("eslint-plugin-react-native");
const { fixupPluginRules } = require("@eslint/compat");
const eslintConfigPrettier = require("eslint-config-prettier");
const eslintPluginPrettier = require("eslint-plugin-prettier");
const unusedImports = require("eslint-plugin-unused-imports");

module.exports = [
  eslintConfigPrettier,
  {
    plugins: {
      "unused-imports": unusedImports,
      "react-native": fixupPluginRules(reactNative),
      "prettier": eslintPluginPrettier,
    },
    rules: {
      "react-native/react-in-jsx-scope": "off",
      "prettier/prettier": [
        "error",
        {
          quoteProps: "consistent",
          singleQuote: false,
          tabWidth: 2,
          trailingComma: "es5",
          useTabs: false,
        },
      ],
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
    ignores: ["node_modules/**", "lib/**"],
  },
];
