import PropTypes from 'prop-types'
import { NotFound } from 'pages/NotFound';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';;


const Layout = lazy(() => import('./Layout/Layout'))
const HomePage = lazy(()=>import('pages/HomePage'))
const MoviesPage = lazy(()=>import('pages/MoviesPage'))
const MovieSubPage = lazy(()=>import('pages/MovieSubPage/MovieSubPage'))
const CastDetails = lazy(()=>import('pages/CastDetails'))
const ReviewsDetails = lazy(()=>import('pages/ReviewsDetails'))



export const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<MovieSubPage />}>
          <Route path="cast" element={<CastDetails />} />
          <Route path="reviews" element={<ReviewsDetails />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
};


App.propTypes = {
  Layout: PropTypes.element,
  HomePage: PropTypes.element,
  MoviesPage: PropTypes.element,
  MovieSubPage: PropTypes.element,
  CastDetails: PropTypes.element,
  ReviewsDetails: PropTypes.element,
  NotFound: PropTypes.element,
}
  
