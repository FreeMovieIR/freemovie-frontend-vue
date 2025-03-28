import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/freemovie-frontend-vue/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    mainFields: ["browser", "module", "main", "jsnext:main", "jsnext"],
  },
});
