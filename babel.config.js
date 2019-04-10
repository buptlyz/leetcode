module.exports = api => {
  const isTest = api.env('test');
  // use isTest to determine what presets and plugins to use

  return {
    presets: [
      '@babel/preset-react',
      '@babel/preset-env',
    ]
  }
}
