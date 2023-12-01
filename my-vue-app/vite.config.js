import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    react(),
    legacy({
      targets: ['last 2 versions'],
    }),
  ]
})
