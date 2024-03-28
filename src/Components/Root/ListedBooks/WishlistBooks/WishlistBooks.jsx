import { IoLocationOutline, IoPeople } from "react-icons/io5";
import { BiBookOpen } from "react-icons/bi";
import PropTypes from 'prop-types';

const WishlistBooks = ({book}) => {
  console.log(book);
  const {bookName, author, image, publisher, category,
    yearOfPublishing, totalPages, tags ,rating,}= book;

  return (
    <div className="p-5 lg:p-8 my-8 border-2 rounded-2xl">
    <div className="flex lg:flex-row flex-col gap-6">
      <div className="flex items-center">
        <figure className="bg-base-200 rounded-2xl flex justify-center py-10">
          <img
            src={image}
            className="w-[45%]  skew-y-6 rounded-lg shadow-2xl"
          />
        </figure>
      </div>

      <div className="lg:w-3/4 w-full">
        <h1 className="text-2xl lg:text-3xl lg:mb-4  font-bold play">{bookName}</h1>
        <p>
          By: <span className=" font-semibold">{author}</span>
        </p>

        {/* Tags and year div*/}
        <div className="flex lg:flex-row flex-col lg:gap-10">
          <div className="flex items-center gap-4  font-semibold lg:my-4">
            <p>Tags:</p>

            <p className="bg-green-50 p-2 rounded-xl text-green-600">
              #{tags[0]}
            </p>
            <p className="bg-green-50 p-2 rounded-xl text-green-600">
              #{tags[1]}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <IoLocationOutline />
            <p>Year of Publishing:</p>
            <p>{yearOfPublishing}</p>
          </div>
        </div>

        {/* Pages and Publisher div */}
        <div className="flex flex-col lg:flex-row  lg:gap-10">
          <p className="flex items-center gap-2">
            <IoPeople />
            Publisher: {publisher}
          </p>
          <p className="flex items-center gap-2">
            <BiBookOpen />
            Pages:{totalPages}
          </p>
        </div>

        <hr className="border-dashed border-green-600 my-3" />

        {/* Footer and button section */}
        <div>
          <div className="flex flex-col lg:flex-row gap-4 mt-4">
            <p className="p-3 bg-sky-200   text-blue-600 rounded-3xl">Category: {category}</p>
            <p className="p-3 bg-sky-200  text-blue-600 rounded-3xl">Rating: {rating}</p>
     
            <button className="btn 
            rounded-3xl
            lg:text-xl border-2 border-blue-500 bg-gradient-to-r from-blue-400 to-green-500 text-white">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

WishlistBooks.propTypes={
   book: PropTypes.object
}

export default WishlistBooks;