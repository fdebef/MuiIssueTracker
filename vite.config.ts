import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  build: {
    outDir: '../server/reactapp',
    target: ['esnext'], // Transpile for modern browsers
  },
  server: {
    host: 'localhost',
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          return path.replace(/^\/api/, '');
        },
      },
    },
  },
  resolve: {
    alias: {
      '@types': path.resolve(__dirname, './src/shared/types/types.ts'),
      '@routes': path.resolve(__dirname, './src/shared/routes'),
      '@constants': path.resolve(__dirname, './src/shared/constants'),
    },
  },
});
