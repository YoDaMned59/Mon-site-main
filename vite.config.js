import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'Mon-site-main ', // Remplace "nom-de-ton-depot" par le nom exact de ton dépôt
})
