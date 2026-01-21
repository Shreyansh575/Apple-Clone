import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef, useState } from 'react'

const Moretoexplore = () => {
    const scrollRef = useRef()
        const [count, setcount] = useState(0)
    const data = [
        {
            name:'Beats iPhone 17 Rugged Case with MagSafe and Camera Control – Sierra Orange',
            price:'$79.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGK14?wid=532&hei=582&fmt=png-alpha&.v=V0E4MzhRNGpZWGlOSzNvSVZYQy9oUUhqc0NvK2RZTVd5TWVhUDFuQlo0MmFxaSsrdlJYR2oxamw1ajlhS2EwVVU5RHpLNisyOWFJRkFkV1Uvd0MyVUE'
        },
        {
            name:'HidrateSpark PRO 2 Smart Tumbler (30 oz.)',
            price:'$79.95',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS452?wid=532&hei=582&fmt=png-alpha&.v=cmlORnVqNGoreHRVKzNLTmQxY2R6QUhqc0NvK2RZTVd5TWVhUDFuQlo0MjRRTHNBSzd0WjFWcVpKc0w5MVI5VGZyb2lPS3RGeW9ILzVuYjlmTHZrU1E'
        },
        {
            name:'Belkin UltraCharge Pro 3-in-1 Magnetic Charging Dock',
            price:'$149.95',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS8D2?wid=532&hei=582&fmt=png-alpha&.v=MGs1SExkbzV2TjNRSzZaMFZUL3lld0hqc0NvK2RZTVd5TWVhUDFuQlo0M2lLeG02Q2ZST0pJVm5aVlVGOWJVNS9iaG03Qk4xUDMwb1Y3SHh5YmJ0N1E'
        },
        {
            name:'Beats iPhone 17 Pro Kickstand Case with MagSafe and Camera Control – Bedrock Blue',
            price:'$59.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGTP4?wid=532&hei=582&fmt=png-alpha&.v=MlF5bXNUM1dST0RxcmZYc2c3VmlJZ0hqc0NvK2RZTVd5TWVhUDFuQlo0M0wvZVJiOEV4b0V5ekJBSU1meDJEWXVkVTFFbWc5TGd2SW43OTg2QlZMNUE'
        },
        {
            name:'MOFT Carry Sleeve for 14” MacBook Pro',
            price:'$64.95',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS7F2?wid=532&hei=582&fmt=png-alpha&.v=eFQyRzY3bjhOejdmWlFKUHJyaG1EZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MXgzTXZGdU5TWm1ZNmQzRHBJV0pIRU92ZXZ0cFFHSUN1N2wzS0dkTEh6QUE'
        },
        {
            name:'Aer Go Tote 2',
            price:'$89.95',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS7V2?wid=532&hei=582&fmt=png-alpha&.v=V0FDT21pYkIzalZQcGFXZmp5UXdRZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MXVqTTRqN1c4VUZhQUFvWW8wTStwODM1M1ZyV2lQY2FuN2krSTNSeE5mMWc'
        },
        {
            name:'Beats iPhone Air Case with MagSafe and Camera Control – Pebble Pink',
            price:'$45.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGJV4?wid=532&hei=582&fmt=png-alpha&.v=b0tYV0t3MXZJMUdFMlRQZjBsanlpd0hqc0NvK2RZTVd5TWVhUDFuQlo0MEF4QXU5eGhYbmlKOTE3ekZnNGxVNjkzV2ZPelF6T2JuUUxXUlpaUitUaFE'
        },
        {
            name:'Nimble Champ 10k Wireless Portable Charger',
            price:'$79.95',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS2A2?wid=532&hei=582&fmt=png-alpha&.v=NUtDM0hJSC9vZGNsQ1JBM2lMWmF0UUhqc0NvK2RZTVd5TWVhUDFuQlo0MDZaUXFubVBKMGxmcUkrbmEvb3FHbUpQb1hEVVRQVGl2NnVFL0JNRXhFeGc'
        },
        {
            name:'Scosche WatchIt Keychain Apple Watch Magnetic Fast Charger - White',
            price:'$29.95',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRXY2?wid=532&hei=582&fmt=png-alpha&.v=bzFWRU5JdGtmR0FMZmhON1daQU9TZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MGdiQXdUdXJOUGRhQlUvMDNFWG9UUERldUZFYWFKMzFsTDhTVm9tVElrZ1E'
        },
        {
            name:'Belkin BoostCharge Pro Magnetic Charging Power Bank 10K + Cable ',
            price:'$99.95',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HRE52?wid=532&hei=582&fmt=png-alpha&.v=MWRQQUVLelk5SDVuTkR1M1Q5b2dUZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MXA2bUNNRFo4Ulg1cytoTFhldFdibmFaSHp2RFRuSTVvNEwvZGFPYldLTHc'
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
                                        <div className='font-[font7] text-[17px]'>{elem.name}</div>
                                        <div className='font-[font7] mt-4 text-center text-[16px]'>{elem.price}</div>
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

export default Moretoexplore
