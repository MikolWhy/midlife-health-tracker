import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' //add path alias to vite config

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
