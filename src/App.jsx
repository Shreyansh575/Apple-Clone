import React, { useEffect } from 'react'
import Navbar from './Components/Navigation/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Mac from './Pages/Mac'
import Tvhome from './Pages/Tvhome'
import Ipad from './Pages/Ipad'
import Iphone from './Pages/Iphone'
import Watch from './Pages/Watch'
import Details from './Components/Watch/Details'
import Vision from './Pages/Vision'
import Airpods from './Pages/Airpods'
import Accessories from './Pages/Accessories'
import Support from './Pages/Support'
import Lenis from 'lenis'



const App = () => {
  useEffect(()=>{
// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
  })
  return (
    <div className='h-auto overflow-x-hidden w-screen bg-[#f5f5f7]'>
      <Navbar/>
      <Routes>
        <Route path='/Apple-clone/' element={<Home/>}/>
        <Route path='/Mac' element={<Mac/>}/>
        <Route path='/Tv&Home' element={<Tvhome/>}/>
        <Route path='/ipad' element={<Ipad/>}/>
        <Route path='/iPhone' element={<Iphone/>}/>
        <Route path='/Watch' element={<Watch/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/Vision' element={<Vision/>}/>
        <Route path='/Airpods' element={<Airpods/>}/>
        <Route path='/Accessories' element={<Accessories/>}/>
        <Route path='/Support' element={<Support/>}/>
      </Routes>
    </div>
  )
}

export default App
