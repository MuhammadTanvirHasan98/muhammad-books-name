const READ_BOOKS_KEY = "read-books";
const WISHLIST_BOOKS_KEY = "wish-list-books";
const REVIEWS_KEY = "reviews";

export const getStoredBooks = (type) => {
   const bookType = (type === "read") ? READ_BOOKS_KEY : WISHLIST_BOOKS_KEY;

   const storedBooks = localStorage.getItem(bookType);
   if(storedBooks){
     return JSON.parse(storedBooks);
   }

   return [];
}

export const hasReadBook = id => {
   const storedReadBooks = getStoredBooks('read');
   const book = storedReadBooks.find(bookId => bookId === id);
   
   if (book === undefined) {
     return false;
   }
   return true;
}

export const storeBook = (id, type) => {
    const bookType = (type === "read") ? READ_BOOKS_KEY : WISHLIST_BOOKS_KEY;
   
    const storedBooks = getStoredBooks(type);
    storedBooks.push(id);
    
    localStorage.setItem(bookType, JSON.stringify(storedBooks));
}

export const getStoredReview = () => {
   const storedReview = localStorage.getItem(REVIEWS_KEY);
   if(storedReview){
     return JSON.parse(storedReview);
   }
   return [];
}

export const storeReview = (review) => {
   const storedReview = getStoredReview();
   storedReview.push(review);
   localStorage.setItem(REVIEWS_KEY, JSON.stringify(storedReview));
}