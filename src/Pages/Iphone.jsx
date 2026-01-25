import React from 'react'
import Iphonenav from '../Components/Iphone/Iphonenav'
import Iphonevideo from '../Components/Iphone/Iphonevideo'
import Aboutiphone from '../Components/Iphone/Aboutiphone'
import Closerlook from '../Components/Iphone/Closerlook'

const Iphone = () => {
    
  return (
    <div className='bg-white max-md:overflow-x-hidden'>
        <Iphonenav/>
        <Iphonevideo/>
        <Aboutiphone/>
        <Closerlook/>
       
    </div>
  )
}

export default Iphone
