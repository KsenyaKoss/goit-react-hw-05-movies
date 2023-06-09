import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';;


const Layout = lazy(() => import('./Layout/Layout'))
const HomePage = lazy(()=>import('pages/HomePage'))
const MoviesPage = lazy(()=>import('pages/MoviesPage'))
const MovieSubPage = lazy(()=>import('pages/MovieSubPage/MovieSubPage'))
const CastDetails = lazy(()=>import('components/Cast/CastDetails'))
const ReviewsDetails = lazy(()=>import('components/Reviews/ReviewsDetails'))



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
      <Route path="*" element={<Navigate to='/'/>} />
    </Routes>

  );
};


