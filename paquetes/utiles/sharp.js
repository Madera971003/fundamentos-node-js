const sharp = require('sharp');
// https://www.npmjs.com/package/sharp

sharp('original.png')
    .resize(80)
    .grayscale()
    .toFile('resized.png');