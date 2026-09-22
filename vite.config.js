import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  server: {
    port: 5180,
    open: false,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        solutions: resolve(__dirname, 'solutions.html'),
        about: resolve(__dirname, 'about.html'),
        insights: resolve(__dirname, 'insights.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
});
