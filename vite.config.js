import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://achilles1801.github.io/portfolio_mk/',
  plugins: [react()],
})
