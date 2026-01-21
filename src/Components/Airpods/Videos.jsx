import React, { useEffect, useState } from 'react'

const Videos = () => {
    const data = [
        {
            img:'https://www.apple.com/v/airpods/ab/images/overview/airpods_max_purple__d9y3g3n7cnyq_medium.png'
        },
        {
            img:'https://www.apple.com/v/airpods/ab/images/overview/airpods_max_stardust__l9lr6719rmaa_medium.png'
        },
        {
            img:'https://www.apple.com/v/airpods/ab/images/overview/airpods_max_orange__gln3ifz5o9ei_medium.png'
        },
        {
            img:'https://www.apple.com/v/airpods/ab/images/overview/airpods_max_blue__fsfaleh1smuu_medium.png'
        },
        {
            img:'https://www.apple.com/v/airpods/ab/images/overview/airpods_max_black__x3byrd2venmu_medium.png'
        },
        {
            img:'https://www.apple.com/v/airpods/shared/compare/f/images/compare/compare_airpods_max__b14s2x6q07rm_large.png'
        },
    ]
    const [index, setIndex] = useState(0);

useEffect(() => {
  const intervalone = setInterval(() => {
    setIndex(prev => {
      if (prev === 4) return 0; // 👈 reset
      return prev + 1;
    });
  }, 2500);

  return () => clearInterval(intervalone); // ✅ cleanup
}, []);


  return (
    <div>
      <div className='relative shadow-lg  top-50  px-10'>
        <video autoPlay loop playsInline className='rounded-4xl object-cover relative' src="https://www.apple.com/105/media/us/airpods/2025/515ae144-8530-47d0-85d1-22a263f4b237/anim/hero/large.mp4"></video>
        <div className='absolute -mt-50 ml-10'>
            <div className='text-7xl font-[font7]'>AirPods Pro 3</div>
            <div className='text-2xl font-[font7]'>The world’s best in-ear Active Noise Cancellation.</div>
            <div className='text-xl mt-10 font-[font7]'>$249</div>
        </div>
        <div className='flex absolute z-500 justify-end gap-3 items-center right-22 -mt-30 '>
            <div className='bg-blue-600 rounded-full p-2 px-3 w-27 text-white '>Learn More</div>
            <div className='text-blue-600 border-1 p-1 hover:bg-blue-600 hover:text-white  px-5 rounded-full'>Buy</div>
        </div>
      </div>
      <div className='relative shadow-lg  top-70  px-10'>
        <video autoPlay loop playsInline className='rounded-4xl w-screen object-cover  relative' src="https://www.apple.com/105/media/us/airpods/2024/b4e8e99e-af2c-413e-84d4-50a9a5ee4fe3/anim/airpods/medium.mp4"></video>
        <div className='absolute text-white -mt-50 ml-10'>
            <div className='text-7xl font-[font7]'>AirPods 4</div>
            <div className='text-2xl font-[font7]'>Iconic. Now supersonic.</div>
            <div className='text-xl mt-3 font-[font7]'>Starting at $129

With Active Noise Cancellation $179

</div>
        </div>
        <div className='flex absolute z-500 justify-end gap-3 items-center right-22 -mt-30 '>
            <div className='bg-blue-600 rounded-full p-2 px-3 w-27 text-white '>Learn More</div>
            <div className='text-blue-600 border-1 p-1 hover:bg-blue-600 hover:text-white  px-5 rounded-full'>Buy</div>
        </div>
      </div>

      <div className='relative p-1 px-10 top-80 bg-[#e3e3e3]'>
        <div className='mt-30 flex rounded-4xl bg-white h-[95vh]  justify-center'>
           <div className='text-[200px] font-[font1] mt-25  relative'>
            AirPods Max
           </div>
    <div className=''>

       <img src={data[index].img} className='h-[80vh] rounded-4xl absolute -ml-[60vw] mt-10 ' alt="" />
       <div className='absolute left-10 mt-130 ml-20'>
        <div className='text-2xl font-[font7]'>Five fresh colors. Bold sound.</div>
        <div className='text-2xl font-[font7] mt-5'>$549
</div>
       </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Videos
