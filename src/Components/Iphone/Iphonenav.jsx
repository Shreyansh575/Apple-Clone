import React from 'react'

const Iphonenav = () => {
    const data = [
        {
            name:'iPhone 17 Pro',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_17pro__d60uog2c064i_large.png'
        },
        {
            name:'iPhone Air',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_air__bbj6j2c39efm_large.png'
        },
        {
            name:'iPhone 17',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_17__ffxyxejeezqm_large.png'
        },
        {
            name:'iPhone 16',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_16__kcscr25z9num_large.png'
        },
        {
            name:'iPhone 16e',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_iphone_16e__3qxl86zrk0yq_large.png'
        },
        {
            name:'Compare',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_compare__fka067e4fgq6_large.png'
        },
        {
            name:'Accessories',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_accessories__e5zgfl9e0vwy_large.png'
        },
        {
            name:'Shop',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_shop__ehl4csfdphg2_large.png'
        },
        {
            name:'ios',
            img:'https://www.apple.com/v/iphone/home/ch/images/overview/chapternav/nav_ios__efygxkc3oqs2_large.png'
        },
       
    ]
  return (
    <div className='mt-17 p-1 max-md:overflow-x-hidden bg-white'>
      <div className=' mt-20 '>
    <div className='ml-30 max-md:ml-5 max-md:text-5xl text-8xl font-[font2] '>iPhone</div>
    <div>
        <div className='flex space-x-13 mt-10 justify-center overflow-x-auto'>
            {data.map((elem)=>{
                return(
                    <div className=' justify-center '>
                        <img src={elem.img} className=' max-md:min-w-10 object-cover ' alt="" />
                        <div className='font-[font7] mt-2 '>{elem.name}</div>
                    </div>
                )

            })}
        </div>
    </div>
      </div>
    </div>
  )
}

export default Iphonenav
