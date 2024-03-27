import { IoIosStarOutline } from "react-icons/io";

const Card = () => {
  return (
    <div className="card border-2 w-full p-10 shadow-xl">

      {/* Card image */}
      <div>
        <figure className="bg-base-200 rounded-2xl p-10">
          <img
            src="https://i.ibb.co/7tbZzc1/Journey-of-Prophet-Muhammad.jpg"
            className="w-2/3  skew-y-6 rounded-lg shadow-2xl"
          />
        </figure>
      </div>

     {/* Cards Info */}
      <div className="mt-6">

        <h2 className="lg:text-2xl text-xl font-bold play mb-3">The Journey of Prophet Muhammad</h2>
        <p>By: Muhamad Tanvir Hasan</p>

        <hr className="border-dashed w-[90%] mx-auto my-3" />

        <div className="flex justify-between">
          <p>Fiction</p>
          <p className="flex items-center gap-2">4.5 <IoIosStarOutline /></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
