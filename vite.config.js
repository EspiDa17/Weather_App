import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   'process.env.VITE_API_KEY': JSON.stringify('e99d57bf93b9887bbc4342f795766e94'),
  // },
  base: 'Weather_App',
})
