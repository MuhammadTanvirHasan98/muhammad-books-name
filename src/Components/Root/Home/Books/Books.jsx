import Card from "./Card/Card";

const Books = () => {
  return (
    <div className="mt-10 lg:mt-16">
       <h1 className="text-4xl play font-bold text-center my-10">Books</h1>
       <div className="grid lg:grid-cols-3 gap-4">
       <Card/>
       <Card/>
       <Card/>
       </div>
      
    </div>
  );
};

export default Books;
