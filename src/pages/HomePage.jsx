import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'servicesAPI/fetchMovies';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation()

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>Trending today</h2>;
      <ul>
        {movies.map(({ title, id }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{from: location}}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default HomePage