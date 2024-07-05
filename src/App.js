import React from 'react';
import Header from "./Components/Header";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider ,Outlet } from 'react-router-dom';
import About from './Components/About';
import ContactUS from './Components/ContactUS';
import Error from './Components/Error';

const AppLayout = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <ContactUS />
      }
      
    ],
    errorElement:<Error/>,
  },
  
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
