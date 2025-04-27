// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Configuração para reconhecer arquivos estáticos
  publicDir: 'public',
  // Configuração do servidor de desenvolvimento
  server: {
    port: 5173,
    open: true,
    strictPort: true
  }
});