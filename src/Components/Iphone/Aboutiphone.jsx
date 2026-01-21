import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'


const Aboutiphone = () => {
    const scrollRef = useRef()
    const [count, setcount] = useState(0)
    const data = [
        {
            feature:'Innovation',
            info:'Beautiful and durable,  by design.',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/consider/innovation__ce13717o3vhy_medium.jpg'
        },
        {
            feature:'Cutting-Edge Cameras',
            info:'Picture your best photos and videos.',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/consider/camera__f389jji00bee_medium.jpg'
        },
        {
            feature:'Chip and Battery Life',
            info:'Fast that lasts.',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/consider/chip__6hy1uruuluaa_medium.jpg'
        },
        {
            feature:'iOS and Apple Intelligence',
            info:'New look. Even more magic.',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/consider/ios__02vczxaa3siu_medium.jpg'
        },
        {
            feature:'Environment',
            info:'Designed with the earth in mind.',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/consider/environment__ct6r1r1bigsy_medium.jpg'
        },
        {
            feature:'Privacy',
            info:'Just where you want it.',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/consider/privacy__dd7zepyil6gm_medium.jpg'
        },
        {
            feature:'Peace of Mind',
            info:'Helpful features. On and off the grid.',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/consider/safety__faiti3j3g0mm_medium.jpg'
        },
        
    ]
    useGSAP(()=>{
        gsap.to(scrollRef.current,{
            x:count
        })
    },[count])
  return (
    <div className='mt-30'>
        <div>
            <div className='ml-30 text-7xl font-[font7] '>Get to know iPhone.</div>
                <div className='overflow-hidden'>
                    <div ref={scrollRef} className='flex space-x-10 mt-20 ml-30'>
                        {data.map((elem)=>{
                            return(
                                <div className='h-full min-w-[25vw] relative'>
                                <img src={elem.img} className='rounded-4xl h-full relative w-full' alt="" />
                                <div className='absolute top-5 ml-7 text-white'>
                                    <div className='text-[18px] font-[font7] '>{elem.feature}</div>
                                    <div className='text-[32px] mt-5 leading-7 font-[font7] '>{elem.info}</div>

                                </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                 <div className={`bg-gray-300 absolute  z-10 -mt-80 ${count===0 ? 'hidden':'block'} rounded-full`} onClick={()=>{
        setcount(count+350)
        console.log(count);
        
      }}><ChevronLeft size={50}/></div>
      <div className={`bg-gray-300 absolute right-0 z-10 ${count>-1800 ? 'block':'hidden'}  -mt-80 rounded-full `}onClick={()=>{
        setcount(count-350)
        console.log(count);
      }}><ChevronRight size={50}/></div>
        </div>
    </div>
  )
}

export default Aboutiphone
