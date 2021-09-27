module.exports = {
  "compact": false,
  presets: [
    '@vue/cli-plugin-babel/preset',
    ['@babel/preset-env', {'modules': false}],
    {
      "corejs": "3",
      "useBuiltIns": "usage"
    }
  ]
}
