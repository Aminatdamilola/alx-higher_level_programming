#!/usr/bin/node

const fs = require('fs');

function writeFile (filePath, content) {
  fs.writeFile(filePath, content, 'utf-8', (error) => {
    if (error) {
      console.log('An error occurred while writing to the file:');
      console.error(error);
    } else {
      console.log('File written successfully!');
    }
  });
}

if (process.argv.length < 4) {
  console.log('Please provide the file path and the string to write as arguments.');
} else {
  const filePath = process.argv[2];
  const content = process.argv[3];
  writeFile(filePath, content);
}
