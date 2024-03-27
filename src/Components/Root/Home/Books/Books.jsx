import { useEffect, useState } from "react";
import Card from "./Card/Card";

const Books = () => {

  const [cards, setCards] = useState([]);

   useEffect(()=>{
      fetch('books.json')
      .then(res=> res.json())
      .then(data=> setCards (data))
   },[])
   console.log(cards);

  return (
    <div className="mt-10 lg:mt-32">
       <h1 className="text-4xl play font-bold text-center my-2">Books</h1>
       <hr className="w-1/2 lg:w-1/5 mx-auto bg-green-700 mb-10 border-dashed"/>
       <div className="grid lg:grid-cols-3 gap-8">
         {
          cards.map((card,idx)=>(
            <Card key={idx} card={card}></Card>
          ))
         }
       </div>
      
    </div>
  );
};

export default Books;
