import { build } from "vite";

export default {
  server: {
    port: 3000
  },

  build: {
    rollupOptions: {
      main: 'index.html',
      movies: 'movies.html'
    }
  }
}
