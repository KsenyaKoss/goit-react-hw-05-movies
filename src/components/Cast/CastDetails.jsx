import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'servicesAPI/fetchMovies';
import { useParams } from 'react-router-dom';


const CastDetails = () => {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCast(id).then(setCasts);
  }, [id]);

  return (
    <>
      {casts.length === 0 ? (
        <h3>There is no such information</h3>
      ) : (
        <ul>
          {casts.map(({ profile_path, name, character, id }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt="img"
                width={50}
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CastDetails;


