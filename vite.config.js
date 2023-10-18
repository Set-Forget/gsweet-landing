import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/gsweet-landing/",
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'none'; worker-src 'self' blob:",
    },
  },
})
