

import { Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './App.css'

import LoginPages from './Pages/LoginPages'
import SignupPage from './Pages/SignupPage'
import HomePage from './Pages/home/HomePage'
import MovieHome from './Pages/home/MovieHome'

function App() {
  

  return (
    <>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPages />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<MovieHome />} />
      </Routes>
 
    
    </>
  )
}

export default App
