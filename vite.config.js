import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  // https://vitejs.dev/guide/build.html#multi-page-app
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/about/index.html'),
      },
      output: {
        dir: 'dist',
      }
    }
  }
})