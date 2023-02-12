const fs = require('node:fs/promises');

console.log('Starting clean...');
fs.rm('./build', { recursive: true }).then(() => {
    console.log('Build cleaned.');
});
