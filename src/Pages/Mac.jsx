import React from 'react'
import Macnav from '../Components/Mac/Macnav'
import Midcontent from '../Components/Mac/Midcontent'
import Whyapple from '../Components/Mac/Whyapple'
import AboutMac from '../Components/Mac/AboutMac'
import Appleworld from '../Components/Mac/Appleworld'

const Mac = () => {
  return (
    <div className='bg-white'>
      <Macnav/>
      <Midcontent/>
      <Whyapple/>
      <AboutMac/>
      <Appleworld/>
    </div>
  )
}

export default Mac
