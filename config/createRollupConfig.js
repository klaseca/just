const {defineConfig} = require('rollup');
const {resolve} = require('path');

/**
 *
 * @param {string} path
 */
module.exports = function createRollupConfig(path) {
  return defineConfig({
    input: resolve(path, './index.mjs'),
    output: {
      file: resolve(path, './index.cjs'),
      format: 'cjs',
      exports: 'default',
      outro: 'module.exports.default = module.exports;',
    },
  });
};
