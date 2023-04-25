import { useEffect, useState } from 'react';
import { fetchMovieCast } from 'servicesAPI/fetchMovies';
import { useParams } from 'react-router-dom';

export const CastDetails = () => {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchMovieCast(id).then(setCasts);
  }, [id]);

  console.log(casts);

    return (<>
        <ul>
            {casts.map(({ profile_path, name, character, id }) => 
                <li key={id}>
                    <img src={profile_path} alt="img" width={50} />
                    <p>{name}</p>
                    <p>{character}</p>
      </li>
  )}
        </ul>
    </>
    
    )
};
