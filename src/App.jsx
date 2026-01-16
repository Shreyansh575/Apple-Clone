import React from 'react'
import Navbar from './Components/Navigation/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Mac from './Pages/Mac'
import Tvhome from './Pages/Tvhome'
import Ipad from './Pages/Ipad'


const App = () => {
  return (
    <div className='h-full w-screen bg-[#f5f5f7]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Mac' element={<Mac/>}/>
        <Route path='/Tv&Home' element={<Tvhome/>}/>
        <Route path='/ipad' element={<Ipad/>}/>
      </Routes>
    </div>
  )
}

export default App
