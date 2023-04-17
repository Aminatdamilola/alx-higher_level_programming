#!/usr/bin/node
const firstArg = process.argv[2];

if (!isNaN(parseInt(firstArg))) {
  const myNumber = parseInt(firstArg);
  console.log(`My number: ${myNumber}`);
} else {
  console.log('Not a number');
}
