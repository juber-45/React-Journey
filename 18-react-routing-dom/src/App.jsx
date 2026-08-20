import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/about' element={<About />}>About</Route>
        <Route path='/contact' element={<Contact />}>Contact</Route>
      </Routes>
    </div>
  )
}

export default App