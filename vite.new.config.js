import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Second build for the password-protected preview under /new.
// Output goes to dist/new/ (HTML + assets), so the live site's build stays untouched
// and every file of the preview is covered by middleware.js.

const newSpaFallback = () => {
  const rewrite = (req, _res, next) => {
    const path = (req.url || '').split('?')[0]
    if (path === '/new' || (path.startsWith('/new/') && !path.includes('.', path.lastIndexOf('/')))) {
      req.url = '/new/index.html'
    }
    next()
  }
  return {
    name: 'new-spa-fallback',
    configureServer(server) { server.middlewares.use(rewrite) },
    configurePreviewServer(server) { server.middlewares.use(rewrite) },
  }
}

export default defineConfig({
  plugins: [react(), newSpaFallback()],
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    assetsDir: 'new/assets',
    rollupOptions: {
      input: 'new/index.html',
    },
  },
})
