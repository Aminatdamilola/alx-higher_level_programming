#!/usr/bin/node

const fs = require('fs');

function readFile (filePath) {
  fs.readFile(filePath, 'utf-8', (error, content) => {
    if (error) {
      console.log('An error occurred while reading the file:');
      console.error(error);
    } else {
      console.log(content);
    }
  });
}

if (process.argv.length < 3) {
  console.log('Please provide the file path as an argument.');
} else {
  const filePath = process.argv[2];
  readFile(filePath);
}
