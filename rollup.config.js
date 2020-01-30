import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import localResolve from 'rollup-plugin-local-resolve';
import json from '@rollup/plugin-json';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default {
  input: 'src/components/index.tsx',
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
