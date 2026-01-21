import React, { useReducer, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


const Closervision = () => {
    const scrollRef = useRef()
    const [count, setcount] = useState(0)
    const data = [
        {
            about:'Apple Vision Pro is the result of decades of high‑performance, mobile, and wearable device innovation. Its advanced technology and elegant form deliver an amazing experience every time you put it on.',
            video:'https://www.apple.com/105/media/us/apple-vision-pro/2025/fda8750c-030b-40f2-a0f7-60ba2db6b547/anim/drawer-design-innovation/medium.mp4',
            type:'video'
        },
        {
            about:'The new Dual Knit Band combines soft, breathable straps with a counterbalanced design, so you can stay immersed in your favorite spatial experiences longer.',
            video:'https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/dual_knit_band__cuhpalc1t9ea_medium.jpg',
            type:'img'
        },
        {
            about:'The dual-function Fit Dial lets you easily adjust the band’s upper and lower straps independently for a comfortable, personalized fit.',
            video:'https://www.apple.com/105/media/us/apple-vision-pro/2025/fda8750c-030b-40f2-a0f7-60ba2db6b547/anim/drawer-design-headband/medium.mp4',
            type:'video'
        },
        {
            about:'The Light Seal magnetically attaches to the aluminum alloy frame and gently flexes to conform to your face, delivering a precise fit while blocking out stray light.',
            video:'https://www.apple.com/105/media/us/apple-vision-pro/2025/fda8750c-030b-40f2-a0f7-60ba2db6b547/anim/drawer-design-light-seal/medium.mp4',
            type:'video'
        },
        {
            about:'Speakers positioned close to your ears deliver rich Spatial Audio that seamlessly blends with real‑world sounds, keeping you aware of your surroundings.',
            video:'https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/spatial_audio__fc9n50cxmcmm_medium.jpg',
            type:'img'
        },
        {
            about:'Apple Vision Pro is powered by an external, aluminum‑encased battery that you can slip into your pocket. It supports up to 2.5 hours of general use and up to 3 hours of video playback.1',
            video:'https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/battery__cjkato9jqdjm_medium.jpg',
            type:'img'
        },
        {
            about:'ZEISS Optical Inserts can be customized with your vision prescription,2 and they attach to the lenses magnetically for precise viewing and eye tracking.',
            video:'https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/optical_inserts__dlbxctpips66_medium.jpg',
            type:'img'
        },
        {
            about:'The optional Solo Knit Band provides cushioning, breathability, and stretch.',
            video:'https://www.apple.com/v/apple-vision-pro/j/images/overview/design/drawer/solo_knit_band__duemuduoceoi_medium.jpg',
            type:'img'
        },
    ]
    useGSAP(()=>{
        gsap.to(scrollRef.current,{
            x:count
        })
    },[count])
  return (
    <div className='relative p-1 top-160  bg-[#F5F5F7]'>
      <div className='text-6xl ml-50 font-[font7]'>Take a Closer Look</div>
        <div className='overflow-y-hidden'>
            <div className='overflow-x-hidden h-[120vh]'>
                <div ref={scrollRef} className='flex ml-30   bg-[#F5F5F7] space-x-5  '>
                    {data.map((elem)=>{
                        return(
                            <div className='mt-30 ml-30 p-1  w-[50vw] min-h-[60vh] space-x-5 '>
                                <div className=''>
                                    <div className='relative'>

                                <video autoPlay  loop className=' min-w-[50vw]   rounded-4xl' 
                                src={elem.video}  />
                                    </div>
                                    <div>

                                <img className='object-cover max-h-[90vh] rounded-4xl -mt-30'
                                src={elem.video}  />
                                    </div>
                                <div className='text-[20px]  w-[50vw]  font-[font7] top-150 absolute text-[#747478] '>
                                    {elem.about}
                                </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className={`bg-gray-300 absolute  z-10 -mt-80 ${count===0 ? 'hidden':'block'} rounded-full`} onClick={()=>{
        setcount(count+350)
        console.log(count);
        
      }}><ChevronLeft size={50}/></div>
      <div className={`bg-gray-300 absolute right-0 z-10 ${count>-6000 ? 'block':'hidden'}  -mt-80 mr-5 rounded-full `}onClick={()=>{
        setcount(count-350)
        console.log(count);
      }}><ChevronRight size={50}/></div>
    </div>
  )
}

export default Closervision
