import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps the build portable across any static host
// (Vercel, cPanel, S3, GitHub Pages) without path rewrites.
export default defineConfig({
  plugins: [react()],
  base: './',
})
