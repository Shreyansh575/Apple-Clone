import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Iphoneacce = () => {
    const scrollRef = useRef()
    const [count, setcount] = useState(0)
    const data = [
        {
            about:'iPhone 17 Pro Max  TechWoven Case with MagSafe - Sienna',
            price:'$59.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGFC4?wid=532&hei=582&fmt=png-alpha&.v=RXZVdGdKZTN6M3RqTldPdkdLa09iZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MTl4TEdnL1N0R09CKzNaY2RTOWdUMmF6R0dabWp0SVk1MU1GQ2E5YnptR2c'
        },
        {
            about:'Crossbody Strap - Tan',
            price:'$59.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGGK4?wid=532&hei=582&fmt=png-alpha&.v=OFQ0TWNURnVlRGU5bWU5ZnFiTllHUUhqc0NvK2RZTVd5TWVhUDFuQlo0MHpxTDlGdXNHUlE3THM4b3VHNG9udy8ySWZtckkxTG5rc1VmdGFUemJGTGc'
        },
        {
            about:'MagSafe Charger (1m)',
            price:'$39.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD74?wid=532&hei=582&fmt=png-alpha&.v=Nm9pdHNQWlpqeUxJK05lY2hoUkdzZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MzNKK09jOHUreEYvZnpSQUVFYUZBZnpxVmhFdC9yK2RzT3FKL1lsOVpPbVE'
        },
        {
            about:'iPhone Air Case with MagSafe Frost',
            price:'$49.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGH34?wid=532&hei=582&fmt=png-alpha&.v=MzM0b2FteXRYLzNjb2ROdjA5akRhUUhqc0NvK2RZTVd5TWVhUDFuQlo0MHhZcjdWMHRqdlJLYjZkK3BOWEpkQWRHR2R2TWU1RzFGOHkrQnNHR3RSMlE'
        },
        {
            about:'iPhone Air Bumper - Light Blue',
            price:'$39.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MH024?wid=532&hei=582&fmt=png-alpha&.v=NlRZcXczMzhmenBFWUw2Vm4wbFpQUUhqc0NvK2RZTVd5TWVhUDFuQlo0MUxwdnpkTDF3M3c1aUVoZ1dEL09udzVGLytBOWtLU2RyOE1YNnhTMXp4ZUE'
        },
        {
            about:'iPhone Air MagSafe Battery',
            price:'$99.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGPG4?wid=532&hei=582&fmt=png-alpha&.v=aVZlcjV5bGRicVprUm43OVNiWGgzQUhqc0NvK2RZTVd5TWVhUDFuQlo0MmdpY2FtY0dGdHhwS0tQa0hzYm9TMEJ0Uk5qc1dFNmpHMng2S0R6blYwTUE'
        },
        {
            about:'iPhone 17 Silicon Case with MagSafe - Purple Fog',
            price:'$49.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGF04?wid=532&hei=582&fmt=png-alpha&.v=T1FvQW1iQXJoYjdFMTEralNOSWs0d0hqc0NvK2RZTVd5TWVhUDFuQlo0MGtiRnoxWGtjelhKeG5iZzJMdGsxVkRmVG0xUVlWY3hieUx0a0hQeU1ZeHc'
        },
        {
            about:'Crossbody Strap - Purpke',
            price:'$59.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGGJ4?wid=532&hei=582&fmt=png-alpha&.v=VGgrOFhIc0VOZWhrYlBySXVCakFqUUhqc0NvK2RZTVd5TWVhUDFuQlo0MHpxTDlGdXNHUlE3THM4b3VHNG9ud00yVk9PbXV3ZjdCeGsrNCtSeFU3RXc'
        },
        {
            about:'iPhone 17 Clear Case with MagSafe',
            price:'$49.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGF24?wid=532&hei=582&fmt=png-alpha&.v=R2VSSXJxUHNuVkhwa1NVcjhsMHZsUUhqc0NvK2RZTVd5TWVhUDFuQlo0MFEzREZoZXV2TUx5ekdtN3NBWng5YXBMc3V5aWhyOU83RmRvMHpKbitmcEE'
        },
        {
            about:'40w Dynamic Adapter with 60w Max',
            price:'$39',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGKN4?wid=532&hei=582&fmt=png-alpha&.v=T0lOcnNHdkZoVHZXUE1wQk9tZ1A4d0hqc0NvK2RZTVd5TWVhUDFuQlo0M0NzdzNDT1N4VEJGYnliSWtxOW1wYWxkajZ1cGQ5WVZidWhPak1Ga21BOGc'
        },
       
    ]
    useGSAP(()=>{
        gsap.to(scrollRef.current,{
            x:count
        })
    },[count])
  return (
    <div>
        <div>
            
                <div className='text-center font-[font7] text-5xl mt-20 '>Featured iPhone Accessories</div>
            

            <div className='overflow-x-hidden mt-20  w-[79vw] ml-40 '>
                <div ref={scrollRef} className='flex  space-x-5   '>
                    {
                        data.map((elem)=>{
                            return(
                                <div className='h-[90vh] bg-[#e4e4e465]  rounded-4xl  '>
                                    <img className='min-w-[25vw] h-[70vh] object-cover ' src={elem.img} alt="" />
                                    <div className='px-5'>
                                        <div className='font-[font7] text-[17px]'>{elem.about}</div>
                                        <div className='font-[font7] mt-5 text-[16px]'>{elem.price}</div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        <div className='flex'>
            <div onClick={()=>{
                setcount(count+980)
            }} className='absolute left-20  -mt-70'><ChevronLeft size={65}/></div>
            <div  onClick={()=>{
                setcount(count-980)
            }}    className='absolute right-10 -mt-70'><ChevronRight size={65}/></div>
        </div>
    </div>
  )
}

export default Iphoneacce
