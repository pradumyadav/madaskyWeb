// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import AboutUs from './Components/AboutUs/AboutUs';
import OurLeaderShip from './Components/OurLeaderShip/OurLeaderShip';
import PurpMissValu from './Components/Purpose-Mission-values/PurpMissValu';
import OurAspiration from './Components/OurAspiration/OurAspiration';
import TimeLine from './Components/TimeLine/TimeLine';


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
       
      ]
      
    },
    {
      path:"/aboutus",
      element:<AboutUs/>
    },
    {
      path:"/our-leadership",
      element:<OurLeaderShip/>
    },
    {
      path:"/purpose-mission-values",
      element:<PurpMissValu/>
    },
    {
      path:"/our-aspiration",
      element:<OurAspiration/>
    },
    {
      path:"/our-history",
      element:<TimeLine/>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}
