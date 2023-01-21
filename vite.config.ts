import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import civetPlugin from 'vite-plugin-civet'
import Pages from 'vite-plugin-pages'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    solidPlugin(),
    civetPlugin({
      stripTypes: false,
      outputExtension: 'tsx',
      outputTransformerPlugin: 'solid',
    }),
    Unocss({
      include: ["*.civet"]
    }),
    AutoImport({
      imports: [
        'solid-js',
        '@solidjs/router'
      ],
      dts: true,
      dirs: [
        'src/primitives'
      ]
    }),
    Pages({
      extensions: ['jsx', 'tsx', 'civet'],
      exclude: ['**/components/*'],
    }) 
  ],
  build: {
    target: 'esnext',
  },
})
