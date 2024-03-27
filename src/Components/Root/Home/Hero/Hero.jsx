import { Link } from "react-router-dom";

const Hero = () => {
  return (
   
      <div className="hero bg-base-200 rounded-3xl lg:p-20 p-4 px-0 mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img 
            src="https://i.ibb.co/7tbZzc1/Journey-of-Prophet-Muhammad.jpg"
            className="w-1/2 lg:w-[25%] skew-y-12 rounded-lg my-2 shadow-2xl"
          />
          <div className="lg:text-left text-center">
            <h1 className="lg:text-5xl text-2xl play font-bold">Books to freshen up your bookshelf.</h1>
            <p className="lg:py-6 py-3 text-balance">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/listedBooks">
            <button className="btn bg-green-500 text-white font-bold">View The List</button>
            </Link>
            
          </div>
        </div>
      </div>
  );
};

export default Hero;
