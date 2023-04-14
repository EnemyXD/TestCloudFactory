module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    'babel-plugin-transform-typescript-metadata',
    'babel-plugin-parameter-decorator',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    'react-native-reanimated/plugin',
  ],
  assumptions: {
    setPublicClassFields: true,
    privateFieldsAsSymbols: true,
  },
  presets: ['module:metro-react-native-babel-preset'],
};
