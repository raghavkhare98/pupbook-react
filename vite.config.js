import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' //this imports react from vite

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], //and here the react plugin is bein passed
})
