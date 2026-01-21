import React from 'react'

import Visionintro from '../Components/Vision/Visionintro'
import Aboutvision from '../Components/Vision/Aboutvision'
import Visionvideo from '../Components/Vision/Visionvideo'
import Visionnav from '../Components/Vision/Visionnav'
import Closervision from '../Components/Vision/Closervision'
import Entertainmentvideo from '../Components/Vision/Entertainmentvideo'
import Productivity from '../Components/Vision/Productivity'


const Vision = () => {
  return (
    <div className='mt-18'>
        <Visionnav/>
        <Visionintro/>
        <Aboutvision/>
        
        <Visionvideo/>
        <Closervision/>
        <Entertainmentvideo/>
        <Productivity/>
        
        
    </div>
  )
}

export default Vision
