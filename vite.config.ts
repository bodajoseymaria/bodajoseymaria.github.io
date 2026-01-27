import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/boda/', // Cambia 'boda' por el nombre de tu repositorio en GitHub
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
