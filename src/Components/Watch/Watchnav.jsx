import React from 'react'

const Watchnav = () => {
    const data = [
        {
            name:"Apple Watch Series 11",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_s10_link_light__dk882c3cy742_large.svg'
        },
        {
            name:"Apple Watch SE 3",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_s10_link_light__dk882c3cy742_large.svg'
        },
        {
            name:"Apple Watch Ultra 3",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_se_light__v8hfc9dqhjm6_large.svg'
        },
        {
            name:"Apple Watch Ultra 3",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_se_light__v8hfc9dqhjm6_large.svg'
        },
        {
            name:"Apple Watch Nike",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_ultra_light__flngifl1u4eq_large.svg'
        },
        {
            name:"Apple Watch Herme's",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_hermes_light__bw372fumxo02_large.svg'
        },
        {
            name:"Compare",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_compare__bgo0xqb4aype_large.svg'
        },
        {
            name:"Bands",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_bands__e7hyntji47ki_large.svg'
        },
        {
            name:"Accessories",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_accessories__bqbvjx9jjq9y_large.svg'
        },
        {
            name:"Apple Fitness",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_fitness__cbec88bx0ppy_large.svg'
        },
        {
            name:"Shop Watch",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_shop_watch_light__dgczk5c422oi_large.svg'
        },
        {
            name:"Watch OS 26",
            img:'https://www.apple.com/v/watch/bt/images/chapternav/watch_nav_watch_os__90d9xv5y1yqq_large.svg'
        },
        
    ]
  return (
    <div>
      <div>
        <div>
            <div className='px-21 flex space-x-6'>
                {data.map((elem)=>{
                    return(
                        <div>
                    <div className='flex justify-center'>
                        <img className='h-20' src={elem.img} alt="" />
                    </div>
                        <div className='font-[font6] text-center  w-23 text-[14px] '>{elem.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Watchnav
