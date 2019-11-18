import axios from 'axios';

export default axios.create({
  baseURL: `https://rawg-video-games-database.p.rapidapi.com/`,
  "headers": {
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key": "115ecc13d1msh99d3e41d85d9e9ep1bd89fjsn9289472a9c29"
  }
});
