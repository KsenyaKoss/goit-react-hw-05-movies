import axios from 'axios';

const URL = `https://api.themoviedb.org/3/movie/550?`;
const KEY = '27391c24609865799e74cd8cabdef0e3';

export async function fetchMovies() {
  const response = await axios.get(`${URL}api_key=${KEY}`);
  const movies = await response;

  return movies;
}

export async function fetchMovieById(id) {
  const response = await axios.get(`${URL}api_key=${KEY}&movie_id=${id}`);
  const movie = await response;

  return movie;
}
