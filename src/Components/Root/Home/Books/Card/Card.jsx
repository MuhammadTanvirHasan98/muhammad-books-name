import { IoIosStarOutline } from "react-icons/io";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Card = ({card}) => {
  // console.log(card);
  const{bookId,bookName, author, image, tags, rating, category} = card;

  return (
    <div className="card border-2 w-full p-7 shadow-xl">

      {/* Card image */}
      <Link to={`/book/${bookId}`}>
      <div>
        <figure className="bg-base-200 rounded-2xl p-10">
          <img
            src={image}
            className="w-1/2  skew-y-6 rounded-lg shadow-2xl"
          />
        </figure>
      </div>
      </Link>

     {/* Cards Info */}
      <div className="mt-6">
        <div className="flex gap-4 mb-4"> 
          <p className="bg-green-50 p-2 rounded-xl text-green-600">{tags[0]}</p>
          <p className="bg-green-50 p-2 rounded-xl text-green-600">{tags[1]}</p>
        </div>
        <h2 className="lg:text-2xl text-xl font-bold play mb-3">{bookName}</h2>
        <p>By: <span className="font-semibold">{author}</span> </p>

        <hr className="border-dashed w-[90%] mx-auto my-3" />

        <div className="flex justify-between font-semibold">
          <p>{category}</p>
          <p className="flex items-center gap-2">{rating} <IoIosStarOutline /></p>
        </div>
      </div>
    </div>
  );
};

 Card.propTypes = {
  card: PropTypes.object
};

export default Card;
