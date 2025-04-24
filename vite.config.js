import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Adicione esta linha:
  base: 'https://matheuuspedroso.github.io/Rag/, // Substitua pelo nome exato!
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
