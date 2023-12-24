import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['linked-dep'],
  },
  build: {
    lib: {
      entry: 'src/main.js',
      formats: ['es'],
    },
  },
});