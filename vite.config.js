import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        articles: 'articles.html',
        contact: 'contact.html',
        projects: 'projects.html',
        about: 'about.html',
        books: 'books.html'
      }
    }
  }
});
