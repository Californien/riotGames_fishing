console.log('Adding server.js file...');
const fs = require('fs');
const path = require('path');
fs.writeFileSync(path.join('./strapi_backend/', 'server.js'), `const strapi = require('@strapi/strapi');\n// @ts-ignore\nstrapi(/* {...} */).start();`);
console.log('Finished!');