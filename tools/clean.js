import { rm } from 'node:fs/promises';

console.log('Starting clean...');
await rm('./build', { recursive: true });
console.log('Build cleaned.');
