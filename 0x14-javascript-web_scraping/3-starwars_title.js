#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
  console.log('Please provide the movie ID as an argument.');
} else {
  const movieId = process.argv[2];
  const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request.get(url, (error, response, body) => {
    if (error) {
      console.log('An error occurred while making the request:');
      console.error(error);
    } else {
      if (response.statusCode === 200) {
        const movieData = JSON.parse(body);
        console.log('Movie Title:', movieData.title);
      } else {
        console.log('Unable to fetch movie data. Please check the movie ID.');
      }
    }
  });
}
