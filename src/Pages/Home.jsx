import React from 'react'
import Topcontent from '../Components/Home/Topcontent'
import Topimgslider from '../Components/Home/Topimgslider'
import Newarrivals from '../Components/Home/Newarrivals'
import Help from '../Components/Home/Help'
import Difference from '../Components/Home/Difference'
import Accecories from '../Components/Home/Accecories'
import Fitness from '../Components/Home/Fitness'

const Home = () => {
  return (
    <div className='overflow-auto h-full'>
            <div className=" absolute mt-13  w-screen h-[50px]
        bg-gradient-to-r from-sky-400 via-[#fff712] to-[#f09723]
        rounded-[10%]
        blur-[25px]
        
        
        opacity-95">
      </div>
      <Topcontent/>
      <Topimgslider/>
      <Newarrivals/>
      <Help/>
      <Difference/>
      <Accecories/>
      <Fitness/>

 
    </div>
  )
}

export default Home
