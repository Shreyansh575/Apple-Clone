import { ChevronRight } from 'lucide-react'
import React from 'react'

const Watchslider = () => {
    const data = [
        {
            name:"Apple Watch Series 11",
            info:'The ultimate way to watch your health.',
            price:"From $399 or $33.25/mo. for 12 mo.*",
            img:'https://www.apple.com/v/watch/bt/images/overview/select/product_s11__c23ym6fc09me_medium.png'
        },
        {
            name:"Apple Watch SE 3",
            info:'Essential health features at a great value.',
            price:"From $249 or $20.75/mo. for 12 mo.*",
            img:'https://www.apple.com/v/watch/bt/images/overview/select/product_se__cbhd710p3auq_medium.png'
        },
        {
            name:"Apple Watch Ultra 3",
            info:'The ultimate sports and adventure watch.',
            price:"From $799 or $66.58/mo. for 12 mo.*",
            img:'https://www.apple.com/v/watch/bt/images/overview/select/product_u3__eh9hc0els5g2_medium.png'
        },
    ]
  return (
    <div>
        <div className='mt-30'>
            <div className='ml-30 text-8xl font-[font7]'>Apple Watch</div>
            <div className='flex ml-30 space-x-8 mt-30'>
                {
                    data.map((elem)=>{
                        return(
                            <div>
                                <img className='h-[60vh]' src={elem.img} alt="" />
                                <div>
                                    <div className='text-center mt-5 text-[30px] font-[font7]'>{elem.name}</div>
                                    <div className='text-center mt-5 text-[23px]  '>{elem.info}</div>
                                    <div className='text-center mt-10 text-[18px] text-center font-[font7] '>{elem.price}</div>
                                </div>
<div className='flex mt-8 items-center justify-evenly'>
    <div className='bg-blue-500 p-3 rounded-full'>Learn More</div>
    <div className='flex text-blue-700 text-2xl items-center hover:underline'>Buy <ChevronRight/></div>
</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Watchslider
