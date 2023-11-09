import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      assets: "/src/assets",
      hooks: "/src/hooks",
      contexts: "/src/contexts",
      pages: "/src/pages",
      services: "/src/services",
      images: "/src/images"
    },
  }
})
