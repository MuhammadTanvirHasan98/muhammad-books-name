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
import BookDetails from './Components/Root/Home/Books/BookDetails/BookDetails';
import "./index.css";
import ReadBooks from './Components/Root/ListedBooks/ReadBooks/ReadBooks';

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
        path:'/book/:bookId',
        element:<BookDetails/>,
        loader: ()=> fetch('../public/books.json')
      },
      {
        path:"/listedBooks",
        element:<ListedBooks/>,
        loader: ()=> fetch('../public/books.json')
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
