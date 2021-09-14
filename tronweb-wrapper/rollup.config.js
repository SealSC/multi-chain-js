const sourceMaps = require('rollup-plugin-sourcemaps')
const typescript = require('rollup-plugin-typescript2')
const { terser } = require('rollup-plugin-terser')
import resolve from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-node-polyfills'
import commonjs from '@rollup/plugin-commonjs';
const pkg = require('./package.json')

const entryName = 'get-selection-more'

function baseConfig() {
  return {
    input: "./src/wrapper/wrapper.ts",
    output: [],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
      include: 'src/**'
    },
    plugins: [
      // Resolve source maps to the original source
      sourceMaps(),
      // Minify
      terser(),
      resolve(),
      commonjs(),
      nodePolyfills()
    ]
  }
}

function esConfig() {
  const config = baseConfig()
  config.output = [{ file: pkg.module, format: 'es', sourcemap: true }]
  config.plugins.unshift(typescript({ useTsconfigDeclarationDir: true }))
  return config
}



module.exports = [esConfig()]
