import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import autoprefixer from 'autoprefixer';
import filesize from 'rollup-plugin-filesize';
import localResolve from 'rollup-plugin-local-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import sass from 'rollup-plugin-sass';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'components/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.browser,
      format: 'umd',
      exports: 'named',
      sourcemap: true,
      name: 'Component',
    },
  ],
  plugins: [
    external(),
    localResolve(),
    resolve({
      browser: true,
    }),
    json({
      preferConst: true,
    }),
    postcss({ extract: true, plugins: [autoprefixer] }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['**/__tests__/**', 'node_modules/**'],
      clean: true,
    }),
    commonjs(),
    sass({
      insert: true,
    }),
    filesize(),
  ],
  external: [...Object.keys(pkg.dependencies || {})],
};
