import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './routes/MainRoutes';

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App