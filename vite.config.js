import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '/assets': '/public/assets',
        build: {
          rollupOptions: {
            external: ["/src/main.jsx"]
          } 
       }
      }
    },
  },

)
