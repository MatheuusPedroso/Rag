import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Correção: Usar apenas o nome do repositório entre barras
  base: '/Rag/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
