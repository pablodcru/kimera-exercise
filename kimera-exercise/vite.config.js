import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import svgr from "vite-plugin-svgr";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],

  //we need to define which port will run on when we execute npm run preview. also host: true will expose the project in public adresses
  preview: {
    host: true,
    port: 8080,
    watch: {
      usePolling: true
    }
  }
})
