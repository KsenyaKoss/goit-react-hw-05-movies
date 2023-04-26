import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useFetchMovie } from '../../hooks/useFetchMovie';
import {StyledWrapper, StyledUl} from './MovieSubPage.styled'
import PropTypes from 'prop-types'

const MovieSubPage = () => {
  const movie = useFetchMovie();
  const location = useLocation()
  const navigate = useNavigate()

  // const { title, vote_average, overview, genres} = movie;

  return (
    <>
      <button onClick={()=>{navigate(location?.state?.from)}}>Go Back</button>
      <StyledWrapper>
        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="movie-poster" width="400" />
        <div>
        <h2>{movie.title}</h2>
        <p>{`User score: ${movie.vote_average}%`}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {/* <p>{movie.genres.reduce((acc, genre) => {
          return `${acc + genre.name}    `
        }, '')}</p> */}
        </div>
       
      </StyledWrapper>
      <div>
        <h4>Additional information</h4>
        <StyledUl>
          <li>
            <Link to="cast" state={location.state}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={location.state}>Reviews</Link>
          </li>
        </StyledUl>
      </div>
      <Outlet />
    </>
  );
};

export default MovieSubPage

MovieSubPage.propTypes =  {
  movie: PropTypes.shape({
    title: PropTypes.string,
     vote_average: PropTypes.number, 
     overview: PropTypes.string, 
     genres: PropTypes.object,
  })
}


// ImageGallery.propTypes = {
//   pictures: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//     })
//   ),
//   openModal: PropTypes.func,
// };

// ImageGalleryItem.propTypes = {
//   card: PropTypes.shape({
//     largeImageURL: PropTypes.string,
//     webformatURL: PropTypes.string,
//   }),
//   openModal: PropTypes.func,
// };

