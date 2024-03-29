import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BookCard from "./BookCard/BookCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredBooks } from "../../../Utility/localStorage";

const ListedBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);

  const markedBooks = useLoaderData();

  console.log(markedBooks);

  useEffect(() => {
    const storedReadBooksId = getStoredBooks("read");
    const storedWishlistBooksId = getStoredBooks("wish-list");

    if (markedBooks.length > 0) {
      const booksRead = markedBooks.filter((book) =>
        storedReadBooksId.includes(book.bookId)
      );
      setReadBooks(booksRead);

      const booksWishlist = markedBooks.filter((book) =>
        storedWishlistBooksId.includes(book.bookId)
      );
      setWishlistBooks(booksWishlist);
    }
  }, [markedBooks]);

  const handleSort = (type) => {
    if (type === "rating") {
      setReadBooks((prevBooks) => {
        prevBooks.sort((a, b) => b.rating - a.rating);
        return [...prevBooks];
      });
      setWishlistBooks((prevBooks) => {
        prevBooks.sort((a, b) => b.rating - a.rating);
        return [...prevBooks];
      });
    } else if (type === "num-of-pages") {
      setReadBooks((prevBooks) => {
        prevBooks.sort((a, b) => b.totalPages - a.totalPages);
        return [...prevBooks];
      });
      setWishlistBooks((prevBooks) => {
        prevBooks.sort((a, b) => b.totalPages - a.totalPages);
        return [...prevBooks];
      });
    } else if (type === "published-year") {
      setReadBooks((prevBooks) => {
        prevBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        return [...prevBooks];
      });
      setWishlistBooks((prevBooks) => {
        prevBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        return [...prevBooks];
      });
    }
  };

  return (
    <div className="my-20">
      <div className="text-center">
        <details className="dropdown">
          <summary className="m-1 btn btn-lg bg-gradient-to-r from-blue-400 to-green-500 text-white">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box space-y-1 w-52">
            <li onClick={() => handleSort('rating')} className="bg-gradient-to-r from-blue-400 to-green-500 text-white py-1 cursor-pointer rounded-box">Rating</li>
            <li onClick={() => handleSort('num-of-pages')} className="bg-gradient-to-r from-blue-400 to-green-500 text-white py-1 cursor-pointer rounded-box">Number of Pages</li>
            <li onClick={() => handleSort('published-year')} className="bg-gradient-to-r from-blue-400 to-green-500 text-white py-1 cursor-pointer rounded-box">Published Year</li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="my-10">
            {readBooks.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="my-10">
            {wishlistBooks.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;