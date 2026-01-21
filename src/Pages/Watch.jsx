import React from 'react'
import Watchnav from '../Components/Watch/Watchnav'
import Watchslider from '../Components/Watch/Watchslider'
import Whyapplewatch from '../Components/Watch/Whyapplewatch'
import Watchessentials from '../Components/Watch/Watchessentials'

const Watch = () => {
  return (
    <div className='mt-18 bg-white'>
        <Watchnav/>
        <Watchslider/>
        <Whyapplewatch/>
        <Watchessentials/>
        
    </div>
  )
}

export default Watch
