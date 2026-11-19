import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` keeps every emitted asset relative, so the built site also works
// from a sub-path (for example a GitHub Pages project site).
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2022',
    cssMinify: true,
  },
})
