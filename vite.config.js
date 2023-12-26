import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  optimizeDeps: {
    include: ['linked-dep'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'dist',
    lib: {
      entry: './index.html',
      formats: ['es'],
    },
  },
});