import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Esto asegura que los assets se carguen correctamente
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',  // Asegura que Vite genere los archivos en /dist
    sourcemap: true, // Opcional: para depuración en Vercel
  }
});
