import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './components/Home';
import Designs from './components/Designs';
import OurWork from './components/Work';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "designs",
        element: <Designs />
      },
      {
        path: "work",
        element: <OurWork />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
