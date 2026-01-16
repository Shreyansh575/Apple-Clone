import { ChevronDown, ChevronRight, ChevronUp, ChevronUpCircle } from 'lucide-react'
import {useGSAP} from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

const Appleworld = () => {
  const infoRef = useRef(null)
  const arrowRef = useRef()
    const [count, setcount] = useState(3)
   
    useGSAP(()=>{
      gsap.fromTo('.arrow',{
        rotate:0
      },{
        rotate:360
      })
    },[count])

  return (
    <div className='h-full bg-gray-200 p-1 relative top-100  '>
      <div className='ml-20 flex justify-between mt-10'>
        <div className='text-5xl font-[font2]'>

        Unlock The World Of Apple.
        </div>
        <div className='flex mr-5 items-end text-blue-600 hover:underline hover:cursor-pointer'>
            Learn how Apple devices work better together <ChevronRight/>
        </div>
      </div>
      <div className='p-20'>

      <div className='min-h-[110vh]   rounded-[3vw] bg-white
       flex    justify-between'>
        <div className='w-[50%] space-y-5 mt-30 flex-col p-10 '>
            <div onClick={()=>{
                  setcount(1)
                }} className='hover:cursor-pointer '>
                <div className='text-4xl font-[font2] text-gray-700 items-center justify-between  flex'>iPad and iPhone  <div  ref={arrowRef} className='arrow' ><ChevronDown size={50}/></div> </div>
                <div ref={infoRef}  className={`${count===1 ? 'block':'hidden'} text-[18px] mt-2 font-[font7]`}>iPad is perfect for taking the content you capture on iPhone and bringing it to life on an immersive canvas. You can shoot videos and photos on your iPhone and use the large display of your iPad to edit, add animations and more. You can also pick up wherever you left off with Handoff.</div>
            </div>
            <div>
                <div ref={infoRef} onClick={()=>{
                  setcount(2)
                }} className='text-4xl hover:cursor-pointer font-[font2] text-gray-700 items-center justify-between flex'>iPad and Mac  <div ref={arrowRef} className='arrow' ><ChevronDown size={50}/></div> </div>
                <div ref={infoRef}  className={`${count===2 ? 'block':'hidden'} text-[18px] mt-2 font-[font7]`} >iPad and Mac are designed to work together to form the ultimate creative setup. Sketch on your iPad and have it appear instantly on your Mac with Sidecar. Then use your iPad for drawing or editing with Apple Pencil or as a second display. Extend your workflow to new places, and when you return to your desk, Universal Control allows you to use one mouse or trackpad seamlessly across both devices.</div>
            </div>
            <div onClick={()=>{
                  setcount(3)
                }} className='hover:cursor-pointer'>
                <div className='text-4xl font-[font2] text-gray-700 flex items-center justify-between'>iPad and Apple Watch
                    <div ref={arrowRef} className='arrow'><ChevronDown size={50}/></div> </div>
                <div ref={infoRef}  className={`${count===3 ? 'block':'hidden'} text-[18px] mt-2 font-[font7]`}>iPad is a great way to optimize your workouts while tracking your progress on Apple Watch. See personal metrics from Apple Watch integrated on the screen of your iPad in real time. The sensors in Apple Watch combine with advanced algorithms to provide data that keeps you motivated. And see it all come together on your Health app on iPad.

</div>
            </div>
        </div>
        <div className=' h-full  flex items-start mt-35   '>
        <img src='https://www.apple.com/assets-www/en_IN/ipad/01_image_accordion/medium/ipad_iphone_7685c7af1.jpg' className={`${count===1 ? 'block':'hidden'} `}  alt="" />
        <img src='https://www.apple.com/assets-www/en_IN/ipad/01_image_accordion/medium/ipad_mac_f2d351f82.jpg' className={`${count===2 ? 'block':'hidden'} `}   alt="" />
        <img src='https://www.apple.com/assets-www/en_IN/ipad/01_image_accordion/medium/ipad_watch_163f59ba7.jpg' className={`${count===3||0 ? 'block':'hidden'} `} alt="" />
        </div>
      </div>

      </div>

    </div>
  )
}

export default Appleworld

