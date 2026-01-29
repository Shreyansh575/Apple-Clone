import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Entertainmentvideo = () => {
  gsap.registerPlugin(ScrollTrigger)
  const scrollstartRef = useRef()
  const textRef = useRef()
  // useGSAP(()=>{
  //   gsap.to(textRef.current,{
  //       scrollTrigger:{
  //         trigger:scrollstartRef.current,
           
  //           start:'top 5%',
  //           scrub:true,
           
  //           onUpdate:(elem)=>{
  //             let yindex = Math.floor(elem.progress*1600);
              
  //             gsap.set(textRef.current,{
  //               y:-yindex
  //             })
  //             console.log(yindex);
              
              
  //           },
            

  //       },
        
        
  //     })
    
  // },[])
  return (
    <div className='  max-md:h-[50vh] bg-white  '>
    <div  className='    '>
        <div className='h-[250vh] max-md:relative max-md:max-h-[50vh] max-md:-mt-60  mt-200 '>
          
        <div className='absolute max-md:max-h-[50vh]  h-[230vh]'>

      
            <div ref={scrollstartRef} className=' sticky max-md:relative  h-[100vh] top-0 z-100 max-md:h-[20vh]    '>

            
    <video
      className="w-screen h-[110vh] max-md:h-[20vh]  object-cover"
      autoPlay
      muted
      loop
      
      src="https://www.apple.com/105/media/us/apple-vision-pro/2025/fda8750c-030b-40f2-a0f7-60ba2db6b547/anim/experience-entertainment/medium.mp4"
    />
    </div>
         
  

          <div ref={textRef} className='relative  z-2000 text-white max-md:ml-5  max-md:-mt-20 max-md:text-gray-400  ml-[25vw]'>
            <div className='text-[40px] text-center font-[font1] -ml-80  max-md:text-[15px] max-md:-ml-20 '>Entertainment</div>
            <div className='text-7xl  w-[50vw]  text-center max-md:text-[20px] max-md:w-[80vw] font-[font1]'>The ultimate theater.
Wherever you are.</div>
          </div>
            </div>
        </div>
        <div className='text-[20px]   px-60 mt-5 font-[font7]   text-[#555455] max-md:absolute max-md:-mt-50  max-md:px-5 max-md:text-[15px] '>Transform any room into your own personal theater — with more pixels than a 4K TV for each eye. Experience mind‑blowing immersion with Spatial Audio and expand movies, shows, and games on a giant screen. Whether you’re on the couch or a long flight, enjoy stunning content anywhere.</div>
    </div>
    </div>
  )
}

export default Entertainmentvideo
