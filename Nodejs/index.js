const fs = require('fs');

const textIn = fs.readFileSync('./text/input.txt', 'utf-8');

console.log(textIn);

const textOut = `Have you any wool ${Date.now()}`;

fs.writeFileSync('./text/input.txt', textOut);

console.log('file written');
