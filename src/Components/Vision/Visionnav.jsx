import React from 'react'

const Visionnav = () => {
  return (
    <div className='sticky top-0 backdrop-blur-[30px] z-50  shadow-md h-16    -mt-18'>
        <div className='flex justify-between  items-center'>
            <div className='flex mt-3 font-[font7] text-[25px]  px-50  items-center'>
Apple Vision Pro</div>
        <div className='flex mr-60 space-x-5 text-[13px] font-[font6]  mt-5'>
            <div className='hover:underline'>Overview</div>
            <div className='hover:underline'>Tech Specs</div>
            <div className='hover:underline'>VisionOS</div>
            <div className='hover:bg-[#3f3f3e] hover:text-white border-1 -mt-2 p-2 rounded-full px-4'>Book a demo</div>
            <div className='bg-blue-500 text-white p-2 -mt-2  px-4 rounded-full h-8'>Buy</div>
        </div>
        </div>
    </div>
  )
}

export default Visionnav
