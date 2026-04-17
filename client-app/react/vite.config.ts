import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 這裡的名稱必須跟你在 GitHub 上的 Repository 名稱完全一致
  base: '/personal-website/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
