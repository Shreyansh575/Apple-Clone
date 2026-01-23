import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { useRef } from 'react'

const Help = () => {
    const [scroll, setscroll] = useState(0)
    const scrollRef = useRef()
    useGSAP(()=>{
        gsap.to(scrollRef.current,{
            x:scroll
        }

        )
    },[scroll])
    const help = [
        {
            name:'Shop with a Specialist over video.',
            help:'Choose your next device in a guided, one-way video session.',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-video-202509_GEO_IN?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=TkJLQU9OWTZMS1N4dlhoOWl3SEhrYnlpTHAvaU1TZWJjTXg3K2FoelBrWm5QWkRWVkQreS9hNkYrR3V6eWFwQUFNR1RJN3ZTRU0xNTN2dFc2ZitxSnRrb3YwRE90eklmVkIwdHovcEFheWdaRDBsWVp2QktibVN1ZGcvbS9iM2Q'

        },
        {
            about:'APPLE SPECIALIST',
            help:'Shop one on one with a Specialist online.',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-help-202506?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=TkJLQU9OWTZMS1N4dlhoOWl3SEhrUkxnN3NTOHN5WTV1c3NEYkc1TXhDMWorUGRVSzBNTnk4aWVXZTBsSnJkbEhjUnA4dFc4UjhxaGJyeTZ4TGxiTlExd2w0cFRwTkFXcVMrRy8xS0hPK0wvSlYzalNtQnlZRDd0YzdTaUlhTlo'

        },
        {
            about:'TODAY AT APPLE',
            info:'Explore Apple Intelligence',
            help:'Come and try it for yourself in a free session at the Apple Store.',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-202505?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFEvalhFakpZVzg4RFZsWktqbXFNY0RvMUw4Rm9vb3JCaDFWOTNnU01UOVNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaG9GTzZCL2trL3hMU1d2K2ZPcTVKWXM'

        },
        {
            about:'TODAY AT APPLE',
            info:'Join free sessions at your Apple Store.',
            help:'Learn about the latest features and how to go further with your Apple devices.',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=VXV6Z09DaTFST3FqTnRkTjNkSENPM1ZnVFR5VGxOMG5WYlh6ZVpnWVpmOVNTeEZoVVBncVRqTkNMNS9uNklFcGdNL0tvRHFBWjFabEJvUTIxa3lDRWI2aER5OTZhZjhhVzlPaThxMkc0QVE'

        },
        {
            about:'SMALL BUSINESS',
            
            help:'From enterprise to small business, we’ll work with you. Footnote 1',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-business-202409_GEO_IN?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=alV4a1Q5dWpXakxENUdPdUc5bk5oL3AvbkFpTUJaVTl5YXRNYno3eGE5aXFFMHhFSDhqV0JNYUQxSWJ4aDVUMm1td3JHMmlHM0d0VzBMMGs5ZHR4WjNqb1RJQWJGSnhVM2c1V3gzR1hhMHFHUTVhN1k1UDMwUiszWWU3d2JvUTc'

        },
        {
            about:'PERSONAL SETUP',
            info:'Set up your new device with help from a Specialist.',
            help:'Let us guide you through data transfer, the latest features and more, in an online, one-to-one session.',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-personal-setup-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFhHZjJBWFBWT2pMQnNFR2RGWlEwWlNLRUlsMkFxY1ZMQzZzY0tkenJrbmJpYlE0VldEazFQNXh6WFBPRkF3SmNva0xZQWFEV2ljOWRGNWZJRk4vWGpyanhrWU1SUk1JdlhicWJrdXd2djlzeDRiY2xGcWt2YVRkSWVZeUhQK1U'

        },
        {
            about:'WATCH AND LEARN',
           
            help:'Need support? Our teams are here for you.',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-support-app-202507?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SUtmZXJxdU1COUhIcFgyU0FNY3ZxRUZ5T3lsUkNBamthcUlaMWJnYkE2QlNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaGhWM01jTG93d0hNYUJFYldTdWVWV1E'

        },
       
    ]
  return (
    <div className=' p-1 overflow-auto  '>
 <div className='grid'>
    
     
   <div className='flex max-md:grid ml-40 mt-10 max-md:ml-5 max-md:-mt-0 text-4xl'>
    <div className='font-[font2]  max-md:flex'>Help is here.</div>
    <div className='font-[font2] text-gray-500'>Whenever and however you need it. </div>
   </div>
   <div  className='flex max-md:-mt-25 mt-10 p-1 overflow-x-hidden relative  h-[80vh] items-center    '>
    <div ref={scrollRef} className='flex relative gap-5 max-md:ml-5 ml-40 max-md:overflow-auto '>
    {help.map((elem)=>{
        return(
            <div className='relative'>
             <div className=' h-[75vh] w-[30vw] rounded-3xl hover:scale-95 max-md:h-[70vh] max-md:w-[80vw] '>
                <div className=' mt-8 '>
                    <div className='absolute mt-5 ml-4 z-2 text-[10px] font-[font1] text-gray-700 font-extrabold'>{elem.about}</div>
                    <div className='absolute  ml-4 z-2 text-[20px] max-md:text-[19px] max-md:mt-5 mt-12 font-[font1] max-md:leading-6  font-extrabold'>{elem.name}</div>
                    <div className='absolute  ml-4 z-2 max-md:mt-11 text-[20px] mt-22 font-[font1]  font-extrabold'>{elem.help}</div>
                    <div className='absolute  ml-4 z-2 text-[15px] mt-38 font-[font5] text-gray-800  font-extrabold'>{elem.info}</div>
                </div>
                <img src={elem.img} className=' w- h-full relative object-cover rounded-2xl' alt="" />
            </div>
             </div>
        )
    })}
    </div>
    </div>
      </div>
      <div
             className={`absolute bg-gray-400  rounded-full ${scroll===0 ? 'hidden':'block'}  z-50 left-1 max-md:left-8 max-md:hidden  max-md:-mt-90  -mt-60`}
             onClick={() => {
               setscroll(scroll+350);
               console.log(scroll);
             }}
           >
             <ChevronLeft size={40} />
           </div>
           <div
             className={`absolute z-50 right-0 bg-gray-400 ${scroll===-2100 ? 'hidden':'block'} rounded-full max-md:right-6 max-md:-mt-90 max-md:hidden  -mt-60`}
             onClick={() => {
               setscroll(scroll-350);
               console.log(scroll);
             }}
           >
             <ChevronRight size={40} />
           </div>
     
    </div>
  )
}

export default Help
