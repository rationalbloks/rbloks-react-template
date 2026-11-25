import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: {
    // No source maps in a production build: they would publish the source
    sourcemap: mode !== 'production',
  },
}))
