import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Root/Home/Home';
import ListedBooks from './Components/Root/ListedBooks/ListedBooks';
import PagesToRead from './Components/Root/PagesToRead/PagesToRead';
import Form from './Components/Root/Form/Form';
import Reviews from './Components/Root/Reviews/Reviews';
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/listedBooks",
        element:<ListedBooks/>,
      },
      {
        path:"/pagesToRead",
        element:<PagesToRead/>,
      },
      {
        path:"/form",
        element:<Form/>,
      },
      {
        path:"/reviews",
        element:<Reviews/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
