import fs from 'fs';
const stats = fs.statSync('public/esg-framework.png');
console.log('Size:', stats.size);
