#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
  console.log('Please provide the API URL as an argument.');
} else {
  const apiUrl = process.argv[2];
  const characterId = 18;

  request.get(apiUrl, (error, response, body) => {
    if (error) {
      console.log('An error occurred while making the request:');
      console.error(error);
    } else {
      if (response.statusCode === 200) {
        const movieData = JSON.parse(body);
        const moviesWithWedgeAntilles = movieData.results.filter(movie =>
          movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
        );
        console.log('Number of movies with Wedge Antilles:', moviesWithWedgeAntilles.length);
      } else {
        console.log('Unable to fetch movie data. Please check the API URL.');
      }
    }
  });
}
