import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/karthick-od-portfolio/',
  plugins: [react()],
});
