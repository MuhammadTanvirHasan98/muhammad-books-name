import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from './ReadBooks/ReadBooks';
import WishlistBooks from './WishlistBooks/WishlistBooks';
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredBooks } from '../../../Utility/localStorage';

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);

     const markedBooks = useLoaderData();
     
     console.log(markedBooks);

     useEffect(()=>{
        const storedReadBooksId = getStoredBooks('read');
        const storedWishlistBooksId = getStoredBooks('wish-list');

        if(markedBooks.length>0){
           const booksRead = markedBooks.filter(book => storedReadBooksId.includes(book.bookId));
           setReadBooks(booksRead);

            const booksWishlist = markedBooks.filter(book => storedWishlistBooksId.includes(book.bookId));
            setWishlistBooks(booksWishlist);
        }
     },[])

  return (
    <div>
      <h1 className='text-center text-4xl my-10'>Tabs are here</h1>
    <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <div className='my-10'>
        {
          readBooks.map(book => <ReadBooks key={book.bookId} book={book}/>)
        }
      </div>
     
    </TabPanel>
    <TabPanel>
      <div className='my-10'>
        {
          wishlistBooks.map(book => <WishlistBooks key={book.bookId} book={book}/>)
        }
      </div>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ListedBooks;