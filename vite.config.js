import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import firebase from 'firebase/compat/app'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
