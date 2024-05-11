console.log('Deleting files...');
const fs = require('fs-extra');
fs.emptyDirSync('./strapi_backend/');
console.log('Finished!');