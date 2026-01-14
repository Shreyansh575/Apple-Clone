import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef , useState } from 'react'

const Fitness = () => {
    const [count, setcount] = useState(0)
    const scrollRef = useRef()
    useGSAP(()=>{
        gsap.to(scrollRef.current,{
            x:count
        })
    },[count])
    const data = [
        {
            name:'From Strength to Meditation, there’s something for everyone.',
            price:'Apple Fitness+',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-fitness-202512?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=NkJubEdDMk53Ti9yQWdxb3lRVldpWEphMHZiNFpmelQ1b2lQd3hOdVNyQWQxYXI4a0J1dmxHNzJaeEFoWmI5RDJTaS9RTTYzTWg5VUhTM1Ara0JyS0RwVTJnTHZTak9Ray9UeDAyY0NsSkE'
        },
        {
            name:'AirPods Pro 3',
            price:'MRP ₹25900.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=400&hei=400&fmt=jpeg&qlt=90&.v=cmp4MmZ6OWxOeHNNTXh4SzlBNUpEb1RucE9zZTI5eEREaWZpY29lSld3eVRLNDVIb25yeWxTSzhxdXNNaFBBZmJGcXNRQnFCV0w3WVRjTExvdm1ic1YxRUxFRmRlWDBITzhnRmZ5OTRmaVdKTExiOEFsRmxtQ2Nua0tRSC83MkI'
        },
        {
            name:'Powerbeats Pro 2 – High-Performance Earbuds – Electric',
            price:'MRP ₹29900.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743?wid=400&hei=400&fmt=jpeg&qlt=90&.v=d1RLSDZzQTRtK1UxZmVlUFRKNGgvZllvYS9naDJJdU9KTWdGWjhKWFRmSjNqeEcvVzZaaVU2a3ptRnN4aU8wUGovUE9KcXhKNTlHR1RBR2lHbUtXcWc'
        },
        {
            name:'iPad mini',
            price:'From ₹7817.00/mo. with instant cashback Footnote ∆ and No Cost EMI Footnote ◊ or ₹49900.00 Footnote ±',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-mini-select-wifi-purple-202410?wid=400&hei=400&fmt=jpeg&qlt=90&.v=NmJhVkxMSzd4RmRrSjJwN2s4VWJVNzVFK2U2TjRHYmZNU1M0UzNyaEJrVmdxU0lCLzBUK0xGTWRjMmR5ZmZPWFB0RzNpQ0Mxc293RHpBd2NJd0FqVzRPL2FUN25ua1E0TTlmZ3ZyWmY3ZmRIa25vbEZGVUdacnlONzhkTWJyb20'
        },
        {
            name:'Get 3 months of Apple Fitness+ free.',
            price:'Included with the purchase of select Apple devices. Footnote ‡',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-apple-fitness-plus-202512?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=REFqMnc0RUtNcWNBem5LRlFGZ25lYXlKcXRzL1AyelNiUGpmaFU2S0VvRWJDTENBY2ZoemJneUlKVlMvM0haVnU2S1NDY0Mybzd2UUxDKzhkSmN0dExrT1NhWDZkQ1ZaNFd5ZEJGbDBKczJOd2lKWVdaNnc4WFdyRVJLOGozSUY'
        },
    ]
  return (
    <div className='mt-40'>
        <div className='text-4xl ml-40 font-[font2] flex'>
            <div>Made to move. &nbsp;</div>
            <div className='text-gray-500'> Level up your health and fitness.</div>
        </div>
      <div  className='overflow-x-hidden'>
        <div ref={scrollRef} className='ml-40 relative mt-10 flex gap-5'>
            {data.map((elem)=>{
                return(
                    <div className='h-[90vh] rounded-3xl bg-white'>
                        <div className='min-w-100 h-[75vh]' >

                <img src={elem.img} className='h-full rounded-3xl object-cover w-full'  alt="" />
                        </div>
                        <div className='font-[font2] mt-1 ml-2'>
                            <div className='text-[20px]'>{elem.name}</div>
                            <div className='font-[font5] text-[15px]' > {elem.price}</div>
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
      <div className={`bg-gray-300 absolute right-0 z-10 ${count>-1400 ? 'block':'hidden'}  -mt-80 rounded-full `}onClick={()=>{
        setcount(count-350)
        console.log(count);
      }}><ChevronRight size={50}/></div>
      <div></div>
    </div>
  )
}

export default Fitness
