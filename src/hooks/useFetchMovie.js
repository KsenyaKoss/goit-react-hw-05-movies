import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'servicesAPI/fetchMovies';

export function useFetchMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetchMovieById(id).then(setMovie);
  }, [id]);
  return movie;
}
