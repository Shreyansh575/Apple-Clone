import React from 'react'

const Productivity = () => {
  return (
    <div className='relative mt-100 top-300'>
        <div className='h-[300vh]'>
            <div className='sticky top-0'>
                <video autoPlay loop playsInline className='w-full'  src="https://www.apple.com/105/media/us/apple-vision-pro/2025/fda8750c-030b-40f2-a0f7-60ba2db6b547/anim/productivity_a/medium.mp4"></video>
            </div>
            <div className='absolute z-200 top-160 text-white ml-[20vw]'>
                <div className='text-3xl font-[font7] text-center'>Productivity</div>
                <div className='text-[80px] font-[font7] text-center w-[70vw] leading-19'>A workspace with infinite space.</div>
            </div>
        </div>
        <div className='text-[20px] px-60 mt-5 font-[font7] text-[#555455] '>Apple Vision Pro gives you limitless space to do your best work. Bring your Mac workflows into view on a massive screen. Multitask across apps and organize them any way you like. And write, express yourself, and get things done effortlessly with Apple Intelligence — all with groundbreaking privacy protections.8</div>
    </div>
  )
}

export default Productivity
