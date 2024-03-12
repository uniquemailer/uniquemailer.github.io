import vituum from 'vituum'
import handlebars from '@vituum/vite-plugin-handlebars'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import { normalizePath } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'    
export default {
    plugins: [

        viteStaticCopy({
            targets: [
              {
                src: './src/assets/images',
                dest: './assets/'
              }
            ]
          }),

        vituum(),
        tailwindcss(),
        handlebars({
            root: './src'
        }),
        ],
        build: {
            outDir: './docs'
          }

}
