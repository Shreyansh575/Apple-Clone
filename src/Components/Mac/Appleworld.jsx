import { ChevronDown, ChevronRight, ChevronUp, ChevronUpCircle } from 'lucide-react'
import {useGSAP} from '@gsap/react'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

const Appleworld = () => {
  const infoRef = useRef(null)
  const arrowRef = useRef()
    const [count, setcount] = useState(3)
   
  return (
    <div className='h-full p-1 relative top-100  '>
      <div className='ml-20 flex justify-between mt-10'>
        <div className='text-5xl font-[font2]'>

        Unlock The World Of Apple.
        </div>
        <div className='flex mr-5 items-end text-blue-600 hover:underline hover:cursor-pointer'>
            Learn how Apple devices work better together <ChevronRight/>
        </div>
      </div>
      <div className='p-20'>

      <div className='min-h-[110vh]   rounded-[3vw] bg-gray-100 flex    justify-between'>
        <div className='w-[50%] space-y-5 mt-30 flex-col p-10 '>
            <div onClick={()=>{
                  setcount(1)
                }} className='hover:cursor-pointer '>
                <div className='text-4xl font-[font2] text-gray-700 items-center justify-between  flex'>Mac and iPhone  <div  ref={arrowRef} ><ChevronDown size={50}/></div> </div>
                <div ref={infoRef}  className={`${count===1 ? 'block':'hidden'} text-[18px] mt-2 font-[font7]`}>Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so m⁠u⁠c⁠h⁠ ⁠m⁠o⁠r⁠e⁠.</div>
            </div>
            <div>
                <div ref={infoRef} onClick={()=>{
                  setcount(2)
                }} className='text-4xl hover:cursor-pointer font-[font2] text-gray-700 items-center justify-between flex'>Mac and iPad  <div ref={arrowRef} ><ChevronDown size={50}/></div> </div>
                <div ref={infoRef}  className={`${count===2 ? 'block':'hidden'} text-[18px] mt-2 font-[font7]`} >Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start something on your iPad — like a presentation or an email — and continue it on y⁠o⁠u⁠r⁠ ⁠M⁠a⁠c⁠.</div>
            </div>
            <div onClick={()=>{
                  setcount(3)
                }} className='hover:cursor-pointer'>
                <div className='text-4xl font-[font2] text-gray-700 flex items-center justify-between'>Mac and Apple Watch
                    <div ref={arrowRef}><ChevronDown size={50}/></div> </div>
                <div ref={infoRef}  className={`${count===3 ? 'block':'hidden'} text-[18px] mt-2 font-[font7]`}>Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password t⁠y⁠p⁠i⁠n⁠g⁠ ⁠i⁠s⁠ ⁠r⁠e⁠q⁠u⁠i⁠r⁠e⁠d⁠.</div>
            </div>
        </div>
        <div className=' h-full  flex items-start mt-35   '>
        <img src='https://www.apple.com/assets-www/en_WW/mac/01_image_accordion/medium/mac_iphone_9ddc981d2.jpg' className={`${count===1 ? 'block':'hidden'} `}  alt="" />
        <img src='https://www.apple.com/assets-www/en_WW/mac/02_image_accordion/medium/mac_ipad_dbf60c1fb.jpg' className={`${count===2 ? 'block':'hidden'} `}   alt="" />
        <img src='https://www.apple.com/assets-www/en_WW/mac/01_image_accordion/medium/mac_watch_08a763e9a.jpg' className={`${count===3||0 ? 'block':'hidden'} `} alt="" />
        </div>
      </div>

      </div>

    </div>
  )
}

export default Appleworld
