import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Tvnav = () => {
    const navRef = useRef()
     const navdata = [
    {
      name:'Apple TV 4K',
      img:'https://www.apple.com/v/tv-home/q/images/chapternav/light/apple_tv4k_fill_light__b2wtl9srjwb6_large.svg'
    },
    {
      name:'Apple TV app',
      img:'https://www.apple.com/v/tv-home/q/images/chapternav/light/apple_tv_app_light__f6s7yq5zej2a_large.svg'
    },
    {
      name:'Apple TV',
      img:'https://www.apple.com/v/tv-home/q/images/chapternav/light/apple_tv_light__0ptzzvnvlb6i_large.svg'
    },
    {
      name:'HomePod',
      img:'https://www.apple.com/v/tv-home/q/images/chapternav/light/homepod_light__b9tveb5xovhy_large.svg'
    },
    {
      name:'HomePod mini',
      img:'https://www.apple.com/v/tv-home/q/images/chapternav/light/homepodmini_light__genrqjukfl26_large.svg'
    },
    {
      name:'Home app',
      img:'https://www.apple.com/v/tv-home/q/images/chapternav/light/homekit_light__bu42vvqsjaj6_large.svg'
    },
    {
      name:'Accessories',
      img:'https://www.apple.com/v/tv-home/q/images/chapternav/light/home_accessories_light__eu5v1y6592eu_large.svg'
    },
  ]

  useGSAP(()=>{
    gsap.fromTo(navRef.current,{
        x:350
    },{
        x:0,
        duration:2
    })
  },[])


  return (
    <div>
      <div>
        <div ref={navRef}  className='flex mt-20 space-x-9 px-60 h-20 ml-20'>
            {navdata.map((elem)=>{
              return(
                <div className='h-12 justify-center'>
                  <img src={elem.img} className='h-full' alt="ee" />
                  <div className='font-[font5] text-[12px]'>{elem.name}</div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Tvnav
