import { ChevronRight } from 'lucide-react'
import React from 'react'

const Airpodnav = () => {
    const data = [
        {
            name:'AirPods',
            img:'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_4__fqax1brwh46e_large.svg'
        },
        {
            name:'AirPods Pro',
            img:'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg'
        },
        {
            name:'AirPods Max',
            img:'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg'
        },
        {
            name:'Compare',
            img:'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_compare_light__cmuvdvbxj1w2_large.svg'
        },
        {
            name:'Accessories',
            img:'https://www.apple.com/v/airpods/ab/images/chapternav/airpods_accessories_light__c4ipghd3spsi_large.svg'
        },
        {
            name:'Apple Music',
            img:'https://www.apple.com/v/airpods/ab/images/chapternav/apple_music_light__fexraacz3dme_large.svg'
        },
    ]
  return (
    <div className='h-30 absolute z-200 bg-[#f5f5f5] -mt-18 '>
        <div className='flex px-80 items-end space-x-10 '>
            {data.map((elem)=>{
                return(
                    <div className=''>

                        <img src={elem.img} className='ml-2 ' alt="" />
                        <div className='w-22 mt-1 text-[14px] font-[font6]'>{elem.name}</div>
                    </div>
                )
            })}
        </div>
        <div className='bg-white mt-8 py-2  text-[18px] px-70'>
            <div className='flex '>Buy AirPods Pro 3 and get 3 months of Apple Fitness+* and Apple Music** free.&nbsp;&nbsp;&nbsp; <div className='text-blue-600 flex items-center hover:underline'>Buy <ChevronRight/></div></div>
        </div>
    </div>
  )
}

export default Airpodnav
