import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadBooks from './ReadBooks/ReadBooks';
import WishlistBooks from './WishlistBooks/WishlistBooks';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { getStoredReadBook } from '../../../Utility/localStorage';

const ListedBooks = () => {
    
     const markedBooks = useLoaderData();
     console.log(markedBooks);
     useEffect(()=>{
        const storedBooksId = getStoredReadBook();

        if(markedBooks.length>0){
           const booksRead = markedBooks.filter(book => storedBooksId.includes(book.bookId) )
           console.log(booksRead);
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
        <ReadBooks/>
      </div>
     
    </TabPanel>
    <TabPanel>
      <div className='my-10'>
        <WishlistBooks/>
      </div>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default ListedBooks;