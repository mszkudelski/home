const imagemin = require('imagemin');
const webp = require('imagemin-webp');

imagemin(['assets/img/*.{jpg,png}'], {
  destination: 'assets/img',
  plugins: [webp({ quality: 100 })],
});
