import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SinglePost from './SinglePost.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '../css/index.css'
//import Root from "../routes/root.jsx";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/posts",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    
    path: "post/:postId",
    element: <SinglePost />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
