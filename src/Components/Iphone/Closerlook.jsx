import React from 'react'

const Closerlook = () => {
  return (
    <div>
      <div>
        <div className='ml-30 mt-50 text-7xl font-[font7] '>Take a closer look.</div>

        <div className=''>
        <div className='ml-20 rounded-4xl bg-[#bcc0c3] hover:scale-105 flex w-[90vw] mt-20'>
            <div>
            <div className='h-[75vh] p-1 relative bg-gradient-to-b bg-[#bcc0c3]  rounded-l-4xl w-118 z-50 border-none  '>
                  <div className='z-50 w-110 text-center font-[font7] ml-30 leading-tight mt-40  text-[35px]'>
                    A Guided Tour of iPhone17Pro, iPhone Air, and iPhone 17
            </div>
            <div className='bg-[#111111] rounded-full w-32 p-3 px-3 mt-5 ml-70 text-white'>Watch the film</div>
            </div>
            <img className='w-[60vw] z-10 absolute -mt-110 rounded-r-4xl scale-115 object-bottom-left object-cover ml-80 h-[65vh]' src="https://www.apple.com/v/iphone/home/ch/images/overview/guided-tour/guided_tour__dq7eb6kaepqq_medium.jpg" alt="" />
          
            </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Closerlook
