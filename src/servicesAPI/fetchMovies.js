import axios from 'axios';

const URL = `https://api.themoviedb.org/3`;
const KEY = '27391c24609865799e74cd8cabdef0e3';

export async function fetchTrendingMovies() {
  const data = await axios.get(`${URL}/trending/movie/week?api_key=${KEY}`);
  const trendingMovies = data.data.results;
  return trendingMovies;
}

export async function fetchMovieById(id) {
  const data = await axios.get(`${URL}/movie/${id}?api_key=${KEY}`);
  const movie = data.data;
  return movie;
}

export async function fetchMovieByQuery(query) {
  // /search/movie?api_key=<<api_key>>
  const data = await axios.get(
    `${URL}/search/movie?query=${query}&api_key=${KEY}`
  );
  const queryMovies = data.data.results;
  return queryMovies;
}

export async function fetchMovieCast(id) {
  const data = await axios.get(`${URL}/movie/${id}/credits?api_key=${KEY}`);
  const castOfMovie = data.data.cast;
  return castOfMovie;
}

export async function fetchMovieReviews(id) {
  const data = await axios.get(`${URL}/movie/${id}/reviews?api_key=${KEY}`);
  const reviewsMovie = data.data.results;
  return reviewsMovie;
}
