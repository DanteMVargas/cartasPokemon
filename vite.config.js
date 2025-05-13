import { defineConfig } from 'vite';

export default defineConfig({
  root: 'client',
  server: {
    fs: {
      allow: ['..']
    },
    middlewareMode: false,
    historyApiFallback: true
  }
});
