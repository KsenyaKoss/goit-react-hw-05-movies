import { Link, Outlet, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieByQuery } from '../servicesAPI/fetchMovies';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState('')
  const query = searchParams.get('query');
  const location = useLocation()

  useEffect(() => {
    if (!query) {
      return;
    }
    fetchMovieByQuery(query).then(setMovies);
  }, [query]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.search.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchText} name="search" onChange={handleInputChange}/>
        <button type="submit" disabled={!searchText}>Search</button>
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

