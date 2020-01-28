import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import localResolve from 'rollup-plugin-local-resolve';
import external from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json';
import autoprefixer from 'autoprefixer';

export default {
  input: './src/components/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
    {
      file: pkg.browser,
      format: 'umd',
      exports: 'named',
      name: 'Fe-Components'
    },
  ],

  plugins: [
    external(),
    localResolve(),
    resolve(),
    postcss({
      modules: true,
      extract: true,
      plugins: [autoprefixer],
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['**/__tests__/**', 'node_modules/**'],
      clean: true,
    }),
    filesize(),
    commonjs(),
  ],
  external: [...Object.keys(pkg.dependencies || {})],
};
