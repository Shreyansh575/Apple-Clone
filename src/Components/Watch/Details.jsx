import { ChevronRight, CircleX, CrossIcon } from 'lucide-react';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
  const naviagte = useNavigate()
    const {state:elem} = useLocation()
    console.log(elem);
    
  return (
    <div onClick={()=>{
      naviagte('/watch')
    }}>
    <div  className='p-[5vw] px-[15vw] flex justify-center items-center z-800 absolute  backdrop-blur-[5px]'>
      <div className='h-[70vh] rounded-4xl bg-[#c5cbc5] w-[65vw] '>
    <div className='flex justify-end mr-5 mt-5' onClick={()=>{
      naviagte('/watch')
    }}><CircleX /></div>
        <div>

          <div className='flex p-10 text-3xl font-[font7]'>{elem.feature}</div>
          <div className='flex px-10 -mt-8 text-7xl font-[font7]'>
            {elem.key}
          </div>
          <div className='flex px-10 mt-5  text-[22px] '>
            {elem.about}
          </div>
          <div className='flex items-center text-blue-600 hover:underline px-10 mt-5  text-[22px] '>Learn More <ChevronRight/></div>
        </div> 
      </div>

    </div>
    </div>
  )
}

export default Details
