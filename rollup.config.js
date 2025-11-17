import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';  // Change this

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    image(),  // Simple - no config needed, inlines all images
    postcss({
      config: {
        path: './postcss.config.js'
      },
      extensions: ['.css'],
      inject: true,
      extract: false,
      minimize: true,
    }),
    terser(),
  ],
  external: ['react', 'react-dom', 'lucide-react'],
};