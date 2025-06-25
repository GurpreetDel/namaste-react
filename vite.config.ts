import { defineConfig } from 'vite'

export default defineConfig({
    // Vite will automatically use postcss.config.js
    css: {
        postcss: './postcss.config.js',
    }
})
