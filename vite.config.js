import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './myportfolio/',  // This ensures all paths are relative to /myportfolio/
  plugins: [react()]

})
