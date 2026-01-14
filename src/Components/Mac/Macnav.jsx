import React from 'react'

const Macnav = () => {
    const data = [
        {
            name:'MacBook Air',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookair15.macbookair13_7e8b978ec.svg'
        },
        {
            name:'MacBook Pro',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/macbookpro16.macbookpro14_c495bb45b.svg'
        },
        {
            name:'iMac',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/imac24_065a2bf21.svg'
        },
        {
            name:'Mac mini',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/macmini_f7eabee7b.svg'
        },
        {
            name:'Mac Studio',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/macstudio_d48bbc5a3.svg'
        },
        {
            name:'Mac Pro',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/macpro_a0f334173.svg'
        },
        {
            name:'Compare',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/compare_e6faa4436.svg'
        },
        {
            name:'Display',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/displays_ce60bd4d1.svg'
        },
        {
            name:'Accessories',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/accessories_3bf8fc936.svg'
        },
        {
            name:'Tahoe',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/macos_a763f3f5e.svg'
        },
        {
            name:'Shop Mac',
            img:'https://www.apple.com/assets-www/en_WW/mac/chapternav/shop_mac_b01536048.svg'
        },
    ]
  return (
    <div >
        <div className='bg-white   h-30 mt-15 flex '>
            <div className='flex px-25  mt-3 gap-10 '>
            {data.map((elem)=>{
                return(
                    <div className='max-h-30'>
                <img src={elem.img} className='' alt="" />
                <div className='flex font-[font5] text-[13px]  mt-3'>{elem.name}</div>
                </div>
                )
            })}
            </div>
        </div>
      
    </div>
  )
}

export default Macnav
