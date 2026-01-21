import { ChevronDown } from 'lucide-react'
import React from 'react'

const Accenav = () => {
  return (
    <div className='relative z-200 bg-[#F5F5F7] h-15'>
      <div className='px-25 py-2 flex justify-between items-center'>
        <div className='text-[25px]  font-[font7]'>Accessories</div>
        <div className='flex text-[15px]  font-[font7] text-gray-500 hover:text-black'>Browse All <ChevronDown/></div>
      </div>
    </div>
  )
}

export default Accenav
