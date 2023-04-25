import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useFetchMovie } from '../hooks/useFetchMovie';

export const MovieSubPage = () => {
  const movie = useFetchMovie();
  const location = useLocation()
  const navigate = useNavigate()

  // const { title, vote_average, overview, genre_ids } = movie;

  return (
    <>
      <button onClick={()=>{navigate(location?.state?.from)}}>Go Back</button>
      <div>
        <img src={movie.backdrop_path} alt="movie-poster" width="200" />
        <h2>{movie.title}</h2>
        <p>{`User score: ${movie.vote_average}%`}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>{movie.genre_ids}</p>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast" state={location.state}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
