import { ChevronRight } from 'lucide-react'
import React from 'react'

const Watchessentials = () => {
  return (
    <div className='mt-20 max-md:mt-2 h-[150vh]  p-1'>
        <div className='text-6xl ml-30 mt-50 font-[font7] max-md:ml-5 max-md:mt-8 max-md:text-[48px] '>Apple Watch essentials.</div>
        <div className='ml-30 max-md:ml-0 max-md:leading-10 max-md:p-1 max-md:h-[100vh]  h-[75vh]  px-10 rounded-4xl bg-[#F5F5F7] mt-30'>
            <div className='flex max-md:grid flex-col absolute  items-center z-200  max-md:text-center ml-6 max-md:mt-5 mt-[12vw]'>
                <div className='text-[40px] font-[font7] '>Time for a Refresh</div>
                <div className='text-[25px] w-[20vw] leading-8 max-md:ml-2 max-md:w-[80vw]'>Explore the latest bands in new materials, styles and colors. </div>
                <div className='text-[23px] text-blue-600 flex  items-center mt-5 '>Show Apple Watch bands <ChevronRight/></div>
            </div>
            <img className=' ml-90 h-[62vh] relative  object-cover max-md:-ml-1 max-md:min-w-[98vw] max-md:mt-65  z-2 rounded-4xl  ' src="https://www.apple.com/v/watch/bt/images/overview/essentials/banner_watch_studio__flxoj26afcia_medium.jpg" alt="" />
        </div>
    </div>
  )
}

export default Watchessentials
