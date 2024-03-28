import { useEffect, useState } from "react";
import { getStoredReview } from "../../../Utility/localStorage";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = getStoredReview();
    setReviews(storedReviews)
  }, []);

  return (
    <div>
       {reviews.map((review, index) => (
         <div key={index} style={{
          marginBottom: 20,
         }}>
           <h1>{review.name}</h1>
           <p>{review.email}</p>
           <p>{review.review}</p>
         </div>
       ))}
    </div>
  );
};

export default Reviews;