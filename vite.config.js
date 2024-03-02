import vituum from 'vituum'
import handlebars from '@vituum/vite-plugin-handlebars'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'

export default {
    plugins: [
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
