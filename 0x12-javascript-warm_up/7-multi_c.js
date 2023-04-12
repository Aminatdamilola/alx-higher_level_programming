#!/usr/bin/node

if (process.argv.length !== 3) {
  console.log('Usage: node script.js <number>');
  process.exit(1);
}

const x = parseInt(process.argv[2], 10);

if (isNaN(x)) {
  console.log('Missing number of occurrences');
  process.exit(1);
}

for (let i = 0; i < x; i++) {
  console.log('C is fun');
}
