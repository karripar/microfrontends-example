import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'front_and_sidebar',
      filename: 'remoteEntry.js',
      exposes: {
        './Front': './src/components/front/Front.tsx',
        './Sidebar': './src/components/sidebar/Sidebar.tsx',
        './ThumbCarousel': './src/components/thumb-carousel/ThumbCarousel.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    // federation config, name: front_and_sidebar,
    // expose Front, Sidebar, and ThumbCarousel,
    // shared: react, react-dom, react-router-dom
    })
  ],
  server: {
    port: 3002, // Set the desired port here
  },
  preview: {
    port: 3002, // Set the desired port here
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },
});
