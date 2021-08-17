import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5510f9acc3bdc002c9255f46ff1d5c8d';

const fetchTrendMovies = () => {
  return axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
};
const fetchMoviesByQuery = query => {
  return axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1`,
    )
    .then(({ data }) => data.results);
};

const fetchMovies = movieId => {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(({ data }) => data);
};

const fetchAboutActors = movieId => {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
    )
    .then(({ data }) => data);
};

const fetchReviews = movieId => {
  return axios
    .get(
      `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&page=1`,
    )
    .then(({ data }) => data);
};

export {
  fetchTrendMovies,
  fetchMoviesByQuery,
  fetchMovies,
  fetchAboutActors,
  fetchReviews,
};