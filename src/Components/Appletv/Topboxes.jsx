import { ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Topboxes = () => {
  gsap.registerPlugin(ScrollTrigger)
  const firstRef = useRef() 
  const secondRef = useRef() 

  useGSAP(()=>{
    gsap.fromTo(firstRef.current,{
      y:350
    },{
      y:0,
      duration:1,
      ease:'cric'
    })
  },[])

  useGSAP(()=>{
    gsap.fromTo(secondRef.current.children,{
      opacity:0,
      y:250
    },{
      scrollTrigger:{
        trigger:secondRef.current,
        start:'top 50%',


      },
      duration:2,
      y:0,
      opacity:1
    })
  },[])


  return (
    <div>
      <div ref={firstRef} className='flex p-2 gap-5 rounded-3xl'>
        <div className=' rounded-3xl bg-black  '>
            <div className='absolute rounded-3xl flex left-65 text-white mt-3 '>
                <div>
            <div className='text-[30px] font-[font2]'>HomePod</div>
            <div className='text-[60px] text-center -ml-28 -mt-5 font-[font2]'>Profound sound.</div>
            <div className='text-[30px] font-[font2] -mt-4'>₹32900.00*</div>
            <div className='text-[20px] font-[font2] -ml-10 mt-2 flex gap-10'>
                <div className='bg-blue-600 rounded-full  p-1  px-5'>Buy</div>
                <div className='flex items-center text-blue-600 hover:underline'>Learn More <ChevronRight/></div>
            </div>
            </div>
            </div>
            <img className='h-[100vh] mt-50  w-[48vw] rounded-3xl relative object-cover' src="https://www.apple.com/v/tv-home/q/images/overview/homepod__eam53jjm772a_medium.jpg" alt="" />
            
        </div>
        <div className=' rounded-3xl bg-white  '>
            <div className='absolute  flex right-20 text-black mt-3 '>
                <div>
            <div className='text-[30px] ml-25 font-[font2]'>HomePod mini</div>
            <div className='text-[60px] w-150 text-center leading-12 -ml-25  font-[font2]'>Surprising sound for its size.</div>
            <div className='text-[30px] ml-20  mt-2 font-[font2] -mt-4'>₹10900.00*</div>
            <div className='text-[20px]  font-[font2] ml-20 mt-2 flex gap-10'>
                <div className='bg-blue-600 rounded-full   p-1  px-5'>Buy</div>
                <div className='  flex items-center text-blue-600 hover:underline'>Learn More <ChevronRight/></div>
            </div>
            </div>
            </div>
            <img className='h-[100vh]  w-[48vw] mt-65 rounded-3xl relative object-cover' src="https://www.apple.com/v/tv-home/q/images/overview/room_filling_sound__zagu3551kwyi_medium.jpg" alt="" />
            
        </div>
       
      </div>




      
      <div ref={secondRef} className='flex p-2 gap-5 rounded-3xl'>
        <div className=' rounded-3xl h-[100vh]   w-[48vw] bg-white text-black  '>
            <div className='absolute rounded-3xl  flex ml-20  mt-3 '>
                <div>
            <div className='text-[45px] text-center w-[38vw]  font-[font1]'>The Apple experience.
Cinematic in every sense.</div>
            
            <div className='text-[30px]  ml-40 font-[font2] '>Starting at $129</div>
            <div className='text-[20px] font-[font2] ml-40 mt-2 flex gap-5'>
                <div className='bg-blue-600 rounded-full  p-1  px-5'>Buy</div>
                <div className='flex items-center text-blue-600 hover:underline'>Learn More <ChevronRight/></div>
            </div>
            </div>
            </div>
            <div className='flex justify-center mt-10'>
            <img className='h-[60vh]  rounded-3xl relative object-cover mt-50' src="https://www.apple.com/v/tv-home/q/images/overview/apple_tv_4k__b30wcqp0pdle_medium.jpg" alt="" />
            </div>
            
        </div>
        <div className=' rounded-3xl h-[100vh]   w-[48vw] bg-white  '>
            <div className='absolute  flex right-20 text-black mt-3 '>
                <div>
            <div className='text-[50px]  text-center leading-12 ml-25  font-[font2]'>Home app</div>
            <div className='text-[30px] ml-25 font-[font2]'>The foundation
for a smarter home.</div>
            <div className='text-[30px] ml-60  mt-2 font-[font2] -mt-4'>₹10900.00*</div>
            <div className='text-[20px]  font-[font2] ml-60 mt-2 flex gap-5'>
                <div className='bg-blue-600 rounded-full   p-1  px-5'>Buy</div>
                <div className='  flex items-center text-blue-600 hover:underline'>Learn More <ChevronRight/></div>
            </div>
            </div>
            </div>
            <div className='flex mt-5 justify-center'>

            <img className='h-[50vh]  ml-20 mt-65 rounded-3xl relative object-cover' src="https://www.apple.com/v/tv-home/q/images/overview/homeapp__cpc1k972xys2_medium.jpg" alt="" />
            </div>
            
        </div>
       
      </div>
    </div>
  )
}

export default Topboxes
