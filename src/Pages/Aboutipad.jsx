import React, { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger)
const Aboutipad = () => {
    const scrollRef = useRef()
    const enterRef = useRef()
    const [count, setcount] = useState(0)
    useGSAP(()=>{
        gsap.to(scrollRef.current,{
            x:count
        })
    },[count])

    useGSAP(()=>{
        gsap.fromTo(enterRef.current.children,{
            y:500,
            opacity:0
        },{
            scrollTrigger:{
                trigger:enterRef.current,
                
                start:'top 20%',
               
            },
            y:0,
            duration:2,
             opacity:1
        })
    },[])


    const data = [
        {
            feature:'iPadOS + Apps',
            info:'Everyday superpowers. Built right in.',
            img:'https://www.apple.com/assets-www/en_IN/ipad/01_feature_card/medium/fc_ipados_69b0f59ce.jpg'

        },
        {
            feature:'Apple Intelligence',
            info:'Personal, private, powerful.',
            img:'https://www.apple.com/assets-www/en_WW/ipad/feature_card/medium/fc_apple_intelligence_59a23a56f.jpg'

        },
        {
            feature:'Productivity',
            info:'Your workplace can be any place.',
            img:'https://www.apple.com/assets-www/en_WW/ipad/feature_card/medium/fc_productivity_83c5af2a4.jpg'

        },
        {
            feature:'Creativity',
            info:'Take your inner artist out and about.',
            img:'https://www.apple.com/assets-www/en_WW/ipad/feature_card/medium/fc_creativity_ee24207fc.jpg'

        },
        {
            feature:'Learning',
            info:'Your classroom can be anywhere.',
            img:'https://www.apple.com/assets-www/en_WW/ipad/feature_card/medium/fc_learning_faa9b7020.jpg'

        },
        {
            feature:'Entertainment',
            info:'Kick back. Tune in. Game on.',
            img:'https://www.apple.com/assets-www/en_WW/ipad/01_feature_card/medium/fc_entertainment_9a07191c6.jpg'

        },
        {
            feature:'Apple Pencil',
            info:'Dream it up. Jot it down.',
            img:'https://www.apple.com/assets-www/en_IN/ipad/feature_card/medium/fc_pencil_c44c975b5.jpg'

        }
    ]



  return (
    <div className='h-[160vh]  p-1'>
      <div ref={enterRef}>
        <div className='ml-30 text-6xl font-[font2] mt-35'>Get to know iPad.</div>
        <div className='overflow-hidden'>
            <div ref={scrollRef} className='flex space-x-5 mt-20 ml-30'>
                {data.map((elem)=>{
                    return(
                    <div className='h-[90vh] min-w-[28vw]'>
                        <img src={elem.img} className='h-full relative rounded-4xl object-cover w-full'  alt="" />
                        <div className='absolute top-5 ml-10 text-[20px] font-[font2] text-white z-10'>{elem.feature}</div>
                        <div className='absolute top-15 w-80 ml-10 text-[30px] font-[font2] text-white z-10'>{elem.info}</div>
                    </div>
                    )
                })}
            </div>
        </div>
      </div>
      <div className="absolute mt-9   flex gap-2 right-0">
                    <div onClick={()=>{
                        setcount(count+350)
                    }}><ChevronLeft size={60}/></div>
                    <div onClick={()=>{
                        setcount(count-350)
                    }}><ChevronRight size={60}/></div>
                    </div>
    </div>
  )
}

export default Aboutipad
