import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { MoviesPage } from 'pages/MoviesPage';
import { HomePage } from 'pages/HomePage';
import { NotFound } from 'pages/NotFound';
import { MovieSubPage } from 'pages/MovieSubPage';
import { CastDetails } from 'pages/CastDetails';
import { ReviewsDetails } from 'pages/ReviewsDetails';

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
