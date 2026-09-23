import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Third build for the second password-protected preview under /new2 (version after the acceptance audit).
// Output goes to dist/new2/ (HTML + assets), so the live site's build stays untouched
// and every file of the preview is covered by middleware.js.

const new2SpaFallback = () => {
  const rewrite = (req, _res, next) => {
    const path = (req.url || '').split('?')[0]
    if (path === '/new2' || (path.startsWith('/new2/') && !path.includes('.', path.lastIndexOf('/')))) {
      req.url = '/new2/index.html'
    }
    next()
  }
  return {
    name: 'new2-spa-fallback',
    configureServer(server) { server.middlewares.use(rewrite) },
    configurePreviewServer(server) { server.middlewares.use(rewrite) },
  }
}

export default defineConfig({
  plugins: [react(), new2SpaFallback()],
  publicDir: false,
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    assetsDir: 'new2/assets',
    rollupOptions: {
      input: 'new2/index.html',
    },
  },
})
