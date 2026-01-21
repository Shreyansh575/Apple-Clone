import React from 'react'

const Visionintro = () => {
  return (
    <div className=''>
      <div>
        <div className='flex relative items-center'>

        <img className='h-[85vh] scale-120 ml-118  object-cover' src="https://www.apple.com/v/apple-vision-pro/j/images/overview/hero/hero__cvgr5aj1ttsi_medium.jpg" alt="" />
        </div>
        <div className=' ml-15 backdrop-blur-[2px] absolute -mt-30 '>
          <div className='flex'>
            <img className='scale-400 relative flex ' src="https://www.apple.com/ac/globalfooter/8/en_US/assets/ac-footer/breadcrumbs/apple/icon_large.svg" alt="" />
            

            <div className='text-8xl  flex ml-5 z-40 font-[font7]'>Vision Pro</div>
            </div>
            
            <div className='text-4xl  flex ml-5 z-40 font-[font7]'>New powerful M5 chip and comfortable Dual Knit Band.
</div>
            </div>

<div className='flex justify-end z-50 absolute right-0 mr-10'>
            <div className='flex gap-5 -mt-10'>
              <div className='text-[20px] font-[font6] rounded-full p-3 hover:text-white hover:bg-[#434444] px-5 border-1 border-solid'>Book a demo</div>
              <div className='text-[20px] bg-[#222323] text-white rounded-full  p-3 px-10 h-15 border-1 border-solid'>Buy</div>
            </div>
            </div>
       
      </div>
    </div>
  )
}

export default Visionintro
