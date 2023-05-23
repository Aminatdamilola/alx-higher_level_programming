#!/usr/bin/node

const request = require('request');

// Check if the URL argument is provided
if (process.argv.length < 3) {
  console.log('Please provide the URL as an argument.');
} else {
  const url = process.argv[2];

  request.get(url, (error, response) => {
    if (error) {
      console.log('An error occurred while making the request:');
      console.error(error);
    } else {
      console.log('Status code:', response.statusCode);
    }
  });
}
