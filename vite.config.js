import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Change '/web-dev-reviewer/' to match your GitHub repo name exactly
// e.g. if your repo is github.com/yourname/my-reviewer → base: '/my-reviewer/'
export default defineConfig({
  plugins: [react()],
  base: '/Reviewer/',
})
