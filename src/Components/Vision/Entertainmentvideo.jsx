import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Entertainmentvideo = () => {
  gsap.registerPlugin(ScrollTrigger)
  const scrollstartRef = useRef()
  const textRef = useRef()
  useGSAP(()=>{
    gsap.to(textRef.current,{
        scrollTrigger:{
          trigger:scrollstartRef.current,
           
            start:'top 10%',
            scrub:true,
            onUpdate:(elem)=>{
              let yindex = Math.floor(elem.progress*500);
              
              gsap.set(textRef.current,{
                y:-yindex
              })
              
              
            },
            

        },
        
        
      })
    
  },[])
  return (
    <div ref={scrollstartRef} className='h-[180vh] relative    top-300'>
        <div>
          
          <div className='relative h-[200vh]'>
            <div className='sticky top-0'>

            
    <video
      className="w-full object-cover"
      autoPlay
      
      loop
      
      src="https://www.apple.com/105/media/us/apple-vision-pro/2025/fda8750c-030b-40f2-a0f7-60ba2db6b547/anim/experience-entertainment/medium.mp4"
    />
    </div>
          </div>
  

          <div ref={textRef} className='absolute top-185 text-white ml-[29vw]'>
            <div className='text-[40px] text-center font-[font1]'>Entertainment</div>
            <div className='text-7xl  w-[50vw]  text-center font-[font1]'>The ultimate theater.
Wherever you are.</div>
          </div>
        </div>
        <div className='text-[20px] px-60 mt-5 font-[font7] text-[#555455] '>Transform any room into your own personal theater — with more pixels than a 4K TV for each eye. Experience mind‑blowing immersion with Spatial Audio and expand movies, shows, and games on a giant screen. Whether you’re on the couch or a long flight, enjoy stunning content anywhere.</div>
    </div>
  )
}

export default Entertainmentvideo
