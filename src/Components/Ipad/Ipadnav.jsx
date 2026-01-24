import React from 'react'

const Ipadnav = () => {
    const data = [
        {
            name:'iPad Pro',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_pro_b05b29e18.svg'
        },
        {
            name:'iPad Air',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_air_b05b29e18.svg'
        },
        {
            name:'iPad',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_ec6ec9ee7.svg'
        },
        {
            name:'iPad mini',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_mini_ca78d03ea.svg'
        },
        {
            name:'Compare',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/compare_ipad_93f95f0a1.svg'
        },
        {
            name:'Apple Pencil',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/apple_pencil_607b17f9f.svg'
        },
        {
            name:'Keyboards',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/keyboard_ipad_0113a1a87.svg'
        },
        {
            name:'Accessories',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/accessories_ipad_1d680a4ad.svg'
        },
        {
            name:'iPadOS 26',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipados_1e9806c02.svg'
        },
        {
            name:'Shop iPad',
            img:'https://www.apple.com/assets-www/en_WW/ipad/chapternav/shop_ipad_a90662b1a.svg'
        },
    ]
  return (
    <div className=' '>
      <div className='bg-white max-md:ml-3 '>
            <div className=' flex md:justify-center   gap-x-9   max-md:overflow-x-auto'>
                {
                    data.map((elem)=>{
                        return(
                            <div className='flex  flex-col justify-center'>
                        <img className='h-15 ' src={elem.img} alt="" />
                        <div>{elem.name}</div>
                        </div>
                        )
                    })
                }
            </div>
      </div>
    </div>
  )
}

export default Ipadnav
