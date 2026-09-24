import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 允许 Cloudflare / localtunnel 等临时域名从手机微信访问
    allowedHosts: true,
  },
  // 不用上级目录 D:\work\postcss.config.js（会找找不到的 autoprefixer）
  css: {
    postcss: {
      plugins: [],
    },
  },
})
