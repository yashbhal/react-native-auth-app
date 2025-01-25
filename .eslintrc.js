module.exports = {
  extends: [
    "@react-native-community",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "quotes": "off",  
    "prettier/prettier": "off",  
    "@typescript-eslint/quotes": ["off"],  
    "jsx-quotes": "off" 
  }
};
