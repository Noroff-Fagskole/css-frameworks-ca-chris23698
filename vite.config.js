const { resolve } = require('path');
export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, './index.html'),
        homepage: resolve(__dirname, './homepage.html'),
        profile: resolve(__dirname, './profile.html'),
      },
    },
    outDir: './dist',
  },
  server: {
    port: 8080,
    hot: true,
  },
};
