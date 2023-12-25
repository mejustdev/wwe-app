import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['linked-dep'],
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: './index.html',
      formats: ['es'],
    },
  },
});