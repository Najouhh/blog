import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/BLOG-APP/', // Update with your app name or custom base path
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for production build
  },
});
