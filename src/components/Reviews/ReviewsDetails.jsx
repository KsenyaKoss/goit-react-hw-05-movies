import { fetchMovieReviews } from 'servicesAPI/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const ReviewsDetails = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    fetchMovieReviews(id).then(setReviews);
  }, [id]);

  return (
  <>
    {reviews.length === 0 ? <h3>There is no reviews for this movie</h3>  :
    ( <ul>
        {reviews.map(({ author, content,  id }) => 
            <li key={id}>
    
                <h4>Author: {author}</h4>
                <p>{content}</p>
  </li>
)}
    </ul>)  }
</>

)
};

export default ReviewsDetails


