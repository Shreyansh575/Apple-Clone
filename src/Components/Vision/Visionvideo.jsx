import React from 'react'
import {MoveUpRight} from 'lucide-react'

const Visionvideo = () => {
  return (
    <div className='h-screen max-md:mt-[22vh] relative top-60'>
        <div className=''>
            <video autoPlay className='w-screen relative ' src="https://www.apple.com/105/media/us/apple-vision-pro/2025/fda8750c-030b-40f2-a0f7-60ba2db6b547/anim/foundation/medium.mp4"></video>
            <div className='hidden space-y-2 absolute -mt-28 text-gray-200 max-md:block px-15'>
              <div className='flex font-[font2] leading-4 w-[55vw] text-center items-end'>Strem Wolfs on Apple TV with a subscription <MoveUpRight/>
              </div>
              <div className='flex font-[font2] leading-4 w-[65vw] -ml-5 text-center items-end'>PlayStation VR2 Sense contoller sold seprately. 
              </div></div>
        </div>
    </div>
  )
}

export default Visionvideo
