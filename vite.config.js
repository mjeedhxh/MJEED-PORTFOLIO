import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` is "/" during local dev and "/MJEED-PORTFOLIO/" for the production
// build, so every asset resolves correctly when the site is served from
// GitHub Pages at https://mjeedhxh.github.io/MJEED-PORTFOLIO/.
// If you rename the repository, update the string below to match.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/MJEED-PORTFOLIO/' : '/',
  plugins: [react(), tailwindcss()],
}))
