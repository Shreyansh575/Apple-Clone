import React from 'react'
import Ipadnav from '../Components/Ipad/Ipadnav'
import Ipadmid from '../Components/Ipad/Ipadmid'
import Whyapple from '../Components/Mac/Whyapple'
import Aboutipad from '../Components/Ipad/Aboutipad'
import Significant from '../Components/Ipad/Significant'


const Ipad = () => {
  return (
    <div className='mt-17 bg-white'>
        <Ipadnav/>
        <Ipadmid/>
        <Whyapple/>
        <Aboutipad/>
        <Significant/>
    </div>
  )
}

export default Ipad
