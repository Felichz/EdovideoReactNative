module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    "prettier/prettier": [
        "error",
        {
            "endOfLine": "auto"
        }
    ],
    "react/prop-types": 0,
    "no-unused-vars": "warn"
},
};
