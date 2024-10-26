import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import Test from './pages/Test.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutPage from './pages/AboutPage.jsx'
import AdminLoginPage from './pages/AdminLoginPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "aboutpage",
    element: <AboutPage/>,
  },
  {
    path: "adminpage",
    element: <AdminLoginPage/>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <Test/> */}
  </StrictMode>,
)
