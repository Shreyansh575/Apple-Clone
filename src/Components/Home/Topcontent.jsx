import React from 'react'
import Navbar from '../Navigation/Navbar'
import { ArrowUpRight } from 'lucide-react'

const Topcontent = () => {
  return (
    <div className='z-20 max-md:mt-20 flex justify-around mt-50 space-y-3 max-md:-ml-18  max-md:grid '>
        <div className='flex '>
      <div className='font-[font1]  max-md:text-4xl  text-8xl  text-[#0056ced2]'>St</div>
      <div className='font-[font1]  max-md:text-4xl text-8xl  text-[#aaaaa9]'>o</div>
      
      <div className='font-[font1]  max-md:text-4xl text-8xl  text-[#f18109d6]'>re</div>
      </div>
      <div>
        <div className='p-1  max-md:w-70 font-[font1] w-90  items-end max-md:text-left  max-md:text-[25px] text-right text-3xl'>Give something   special  this New Year.

            <div className='font-[font2] space-y-1 mt-3  max-md:ml-0 ml-40 text-blue-500'>

            <div className='text-[15px] flex hover:cursor-pointer hover:underline '> Connect with a Specialist <ArrowUpRight /></div>
            <div className='text-[15px] hover:cursor-pointer hover:underline flex'>Find an Apple Store  <ArrowUpRight /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Topcontent
