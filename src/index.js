import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Error from './Components/Error';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Body from './Components/Body';
import About from './Components/About';
import Contact from './Components/Contact';
import RestaurantDetail from './Components/RestaurantDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));


const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/resturant/:id",
      element:<RestaurantDetail/>
    }
    ]
  }
])



root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}/>
  </React.StrictMode>
);


