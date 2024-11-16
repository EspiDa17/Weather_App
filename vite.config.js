import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Weather_App/',
  server: {
    fs: {
      allow: ['..'], // Asegúrate de que Vite pueda acceder a los archivos correctamente
    },
  },
})
