import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    checker({
      overlay: {
        position: 'tr',
        panelLevel: 'error',
      },
      eslint: {
        lintCommand: 'eslint ./src --ext .ts',
      },
      typescript: true,
    }),
  ],
})
