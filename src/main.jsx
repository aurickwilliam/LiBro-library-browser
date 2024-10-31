import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Router
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

// Pages
import App from './pages/App.jsx'
import Test from './pages/Test.jsx'
import AboutPage from './pages/AboutPage.jsx'
import AdminLoginPage from './pages/AdminLoginPage.jsx'
import AdminBooksPage from './pages/AdminBooksPage.jsx';
import AdminListPage from './pages/AdminListPage.jsx';
import AdminFeatureAuthorPage from './pages/AdminFeatureAuthorPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App/>} />
        <Route path='/aboutpage' element={ <AboutPage/>} />
        <Route path='/adminloginpage' element={ <AdminLoginPage/>} />
        <Route path='/adminbookspage' element={ <AdminBooksPage/>} />
        <Route path='/adminlistpage' element={ <AdminListPage/>} />
        <Route path='/adminfeatureauthorpage' element={ <AdminFeatureAuthorPage/>} />
      </Routes>
    </BrowserRouter>
    {/* <Test/> */}
  </StrictMode>,
)
