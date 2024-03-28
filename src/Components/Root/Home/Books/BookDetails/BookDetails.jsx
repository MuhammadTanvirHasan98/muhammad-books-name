import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hasReadBook, storeBook } from "../../../../../Utility/localStorage";

const BookDetails = () => {
  const data = useLoaderData();
  const { bookId } = useParams();
  const id = parseInt(bookId);
  console.log(id);
  const bookInfo = data.find((item) => item.bookId == id);
  console.log(typeof bookInfo);
  const {
    bookName,
    author,
    image,
    review,
    rating,
    category,
    tags,
    publisher,
    totalPages,
    yearOfPublishing,
  } = bookInfo;


  const handleReadBook = ()=>{
     const isBookRead = hasReadBook(id);

     if (isBookRead) {
       toast.error("You have already read this books!");
     } else {
       storeBook(id, "read");
       toast.success("Book is added to Read List!");
     }
  };

  const handleWishlistBook = () => {
     const isBookRead = hasReadBook(id);

     if (isBookRead) {
       toast.error("You have already read this books!");
     } else {
       storeBook(id, "wish-list");
       toast.success("Book is added to Wishlist!");
     }
  };

  
  return (
    <div>
      <div className="flex gap-16 my-20">
        <div className="lg:w-1/2 w-full">
          <figure className="bg-base-200 rounded-2xl p-28 flex justify-center">
            <img
              src={image}
              className="w-[65%]  skew-y-6 rounded-lg shadow-2xl"
            />
          </figure>
        </div>

        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl mb-4 font-bold play">{bookName}</h1>
          <p>
            By: <span className=" font-semibold">{author}</span>
          </p>

          <hr className="border-dashed border-green-600 my-6" />
          <p className="text-gray-700">{category}</p>
          <hr className="border-dashed border-green-600 my-6" />

          {/* Review */}
          <p>
            <span className="font-semibold">Review: </span>
            {review}
          </p>

          {/* Tags */}
          <div className="flex items-center gap-4  font-semibold my-4">
            <p>Tags:</p>

            <p className="bg-green-50 p-2 rounded-xl text-green-600">
              #{tags[0]}
            </p>
            <p className="bg-green-50 p-2 rounded-xl text-green-600">
              #{tags[1]}
            </p>
          </div>

          <hr className="border-dashed border-green-600 my-6" />

          {/* Footer and button section */}
          <div>
            <table>
              <tbody className="">
                <tr>
                  <td>Number of Pages: </td>
                  <td className="font-semibold">{totalPages}</td>
                </tr>
                <tr>
                  <td>Publisher: </td>
                  <td className=" font-semibold">{publisher}</td>
                </tr>
                <tr>
                  <td>Year of Publishing: </td>
                  <td className="font-semibold ">{yearOfPublishing}</td>
                </tr>
                <tr>
                  <td>Rating: </td>
                  <td className="font-semibold">{rating}</td>
                </tr>
              </tbody>
            </table>

            <div className="flex gap-4 mt-4">
              <button
                onClick={handleReadBook}
                className="btn lg:text-lg border-2 border-gray-400"
              >
                Read
              </button>

              <button
                onClick={handleWishlistBook}
                className="btn lg:text-xl border-2 border-blue-500 bg-gradient-to-r from-blue-400 to-green-500 text-white"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
