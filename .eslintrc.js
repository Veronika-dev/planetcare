module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'object-curly-spacing': ["error", "always"],
    'object-curly-newline': ["error", { "consistent": true }],
    'react/no-did-mount-set-state': ["off"],
    'prettier/prettier': 0,
  }
};
