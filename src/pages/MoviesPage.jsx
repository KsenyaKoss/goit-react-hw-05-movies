import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from '../servicesAPI/fetchMovies';
import PropTypes from 'prop-types'

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation()

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMovieByQuery(query).then(setMovies);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.search.value });
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      {movies.length !== 0 && (
        <>
          {' '}
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id}>
                <Link to={`${id}`} state={{from: location}}>{title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <Outlet />
    </>
  );
};


export default MoviesPage


MoviesPage.propTypes =  {
  movies: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number, 
})
}