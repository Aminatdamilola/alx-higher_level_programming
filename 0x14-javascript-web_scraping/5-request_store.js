#!/usr/bin/node

const request = require('request');
const fs = require('fs');

if (process.argv.length < 4) {
  console.log('Please provide the URL and file path as arguments.');
} else {
  const url = process.argv[2];
  const filePath = process.argv[3];

  request.get(url, (error, response, body) => {
    if (error) {
      console.log('An error occurred while making the request:');
      console.error(error);
    } else {
      if (response.statusCode === 200) {
        fs.writeFile(filePath, body, 'utf-8', (error) => {
          if (error) {
            console.log('An error occurred while writing to the file:');
            console.error(error);
          } else {
            console.log('Webpage content has been stored in the file:', filePath);
          }
        });
      } else {
        console.log('Unable to fetch webpage content. Please check the URL.');
      }
    }
  });
}
