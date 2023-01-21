import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import civetPlugin from 'vite-plugin-civet'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    solidPlugin(),
    civetPlugin({
      stripTypes: false,
      outputExtension: 'tsx',
      outputTransformerPlugin: 'solid',
    }),
    Pages({
      extensions: ['jsx', 'tsx', 'civet', 'js', 'ts'],
      exclude: ['**/components/*'],
    }) 
  ],
  build: {
    target: 'esnext',
  },
})
