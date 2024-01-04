// react components 

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, Link } from "react-router-dom";

// my components 
import Shop from './Components/Shop.jsx';
import Blog from './Components/Blog.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Cart from './Components/Cart.jsx';

// styles
import "./assets/style.css"
import SProduct from './Components/SProduct.jsx';
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/sproduct",
    element: <SProduct />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
