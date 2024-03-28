

const getStoredReadBook =()=>{
   const storedReadBook = localStorage.getItem("read-books");
   if(storedReadBook){
     return JSON.parse(storedReadBook);
   }
   return [];
}

const saveReadBook = id =>{
    const storeReadBooks = getStoredReadBook();
    const exists = storeReadBooks.find(bookId => bookId === id);
    if(!exists){
       storeReadBooks.push(id);
       localStorage.setItem("read-books", JSON.stringify(storeReadBooks))
    }

}

export{saveReadBook, getStoredReadBook}