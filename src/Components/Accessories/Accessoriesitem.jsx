import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Browsebyproduct from './Browsebyproduct';
import Browsebycategory from './Browsebycategory';


const Accessoriesitem = () => {
    const [count, setcount] = useState(0)
  return (
    <div className='mt-20'>
        <div className='flex justify-center'>

       <div className='text-[50px] font-[font7]'>Accessories you’re looking for.</div>
        </div>
       <div>
        <div className='flex justify-center mt-10 gap-20'>
            <div onClick={()=>{
                setcount(0)
            }} className='text-2xl hover:cursor-pointer font-[font7]'>Browse By Product</div>
            <div onClick={()=>{
                setcount(1)
            }} className='text-2xl       hover:cursor-pointer font-[font7]'>Browse By Categoery</div>

        </div>
        <div className=' p-1 mt-2'>
    <div className='flex justify-center'>

        <p className='h-[0.9px] w-[60vw] bg-black'></p>
    </div>
    <div className={`mt-10  ${count===0 ? 'block':'hidden'}`}>
        <Browsebyproduct/>
    </div>
    <div className={`mt-10  ${count===1 ? 'block':'hidden'}`}>
        <Browsebycategory/>
    </div>
        </div>
       </div>
    </div>
  )
}

export default Accessoriesitem
