import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar mt-2 lg:mt-4 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn mr-2 btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
          <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/listedBooks"
              >
                Listed Books
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/pagesToRead"
              >
                Pages to Read
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/form"
              >
                Form
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/reviews"
              >
                Reviews
              </NavLink>
            </li>
            <li> <a className="btn bg-sky-400 font-bold text-white">Sign In</a></li>
            <li> <a className="btn bg-green-400 font-bold text-white">Sign Up</a></li>
            </ul>
          </div>
          <Link to="/" className="btn lg:text-xl border-2 border-blue-500 bg-gradient-to-r from-blue-400 to-green-500 text-white">Muhammad Books</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-2">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/listedBooks"
              >
                Listed Books
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/pagesToRead"
              >
                Pages to Read
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/form"
              >
                Form
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn font-bold border-2 border-green-600 text-green-600"
                    : "font-bold btn"
                }
                to="/reviews"
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-2">
          <a className="btn bg-sky-400 font-bold text-white">Sign In</a>
          <a className="btn bg-green-400 font-bold text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
