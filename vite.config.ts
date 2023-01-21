import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import civetPlugin from 'vite-plugin-civet'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    solidPlugin(),
    civetPlugin({
      stripTypes: false,
      outputExtension: 'tsx',
      outputTransformerPlugin: 'solid',
    }),
    Unocss(),
    Pages({
      extensions: ['jsx', 'tsx', 'civet'],
      exclude: ['**/components/*'],
    }) 
  ],
  build: {
    target: 'esnext',
  },
})
