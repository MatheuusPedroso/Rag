import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Adicione esta linha:
  base: '/<NOME_DO_SEU_REPOSITORIO_NO_GITHUB>/', // Substitua pelo nome exato!
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
