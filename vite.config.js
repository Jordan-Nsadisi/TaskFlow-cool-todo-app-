import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false, // désactive la minification pour voir les erreurs plus lisiblement
    sourcemap: true, // génère des sourcemaps pour faciliter le débogage
  }
})
