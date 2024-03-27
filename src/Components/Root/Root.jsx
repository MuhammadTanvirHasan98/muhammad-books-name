import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";


const Root = () => {
  return (
    <div className="w-[80%] mx-auto mb-32">
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  );
};

export default Root;