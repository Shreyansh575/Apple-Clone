import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef, useState } from 'react'

const Ipadacce = () => {
    const scrollRef = useRef()
    const [count, setcount] = useState(0)
    const data = [
        {
            name:'Apple Pencil Pro',
            price:'$129.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUWA3?wid=532&hei=582&fmt=png-alpha&.v=MWxxejZka05YVWIrWnl0NXZuUklYQUhqc0NvK2RZTVd5TWVhUDFuQlo0MGorUDVBOUI1cTBZQVBWUytzNUoxSEdTU21VeUx6cEpCL0VEQm9uN1FQSlE'
        },
        {
            name:'Magic Keyboard for iPad Pro 13‑inch (M5) - Black',
            price:'$349.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWR53?wid=532&hei=582&fmt=png-alpha&.v=SVZkTUJBNG1XRVFYR3ZtL0ZCMEMvQUhqc0NvK2RZTVd5TWVhUDFuQlo0MnNQL2dvZWQyWUxkQmFsOXlsNDJoWHp3d2l1M2V3TjdVbHRHa0c3cEdFSnc'
        },
        {
            name:'Smart Folio for iPad Pro 13-inch (M5) - Denim',
            price:'$99.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWK43?wid=532&hei=582&fmt=png-alpha&.v=T2NaclZmQ0Y3aEFqL1JsemdISmk2QUhqc0NvK2RZTVd5TWVhUDFuQlo0MUYxM2JqSXFlN0dXVitSTitoZlhwbTIwUjlrb21WL0Q2cGlkaFVFdml1dWc'
        },
        {
            name:'Apple Pencil (USB-C)',
            price:'$79.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUWA3?wid=532&hei=582&fmt=png-alpha&.v=MWxxejZka05YVWIrWnl0NXZuUklYQUhqc0NvK2RZTVd5TWVhUDFuQlo0MGorUDVBOUI1cTBZQVBWUytzNUoxSEdTU21VeUx6cEpCL0VEQm9uN1FQSlE'
        },
        {
            name:'Magic Keyboard for iPad Air 11‑inch (M3) - Black',
            price:'$269.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGYX4?wid=532&hei=582&fmt=png-alpha&.v=ZW96ZWVWeXBGMnhIWUgvbUFhaEt6QUhqc0NvK2RZTVd5TWVhUDFuQlo0MVp6QWpZRVphaU9kUkl6aDdEQXhMMXFXNDFETGd3ZFlIL0dJcDFmYXF5amc'
        },
        {
            name:'Smart Folio for iPad Air 11-inch (M3) - Sage',
            price:'$79.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWK73?wid=532&hei=582&fmt=png-alpha&.v=QWd2YXd4Um1rb1JSeHFHSUxVUmRkZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MWhjVHd0KzFCcHdjc1ZkU0ZlazcrWDRIeXVid1BXOU9Pa0RQcnhSdFVWOWc'
        },
        {
            name:'Magic Keyboard Folio for iPad (A16)',
            price:'$249.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQDP3?wid=532&hei=582&fmt=png-alpha&.v=ekdNWGRyOTZjVmxDTTNjRzZ6ZnIzZ0hqc0NvK2RZTVd5TWVhUDFuQlo0MDB0Y0lkeVg2OHRld3lCWVNZZVFRRXVTbDlvM1pMVlNzZEJDMFh0bDl2RlE'
        },
        {
            name:'Smart Folio for iPad (A16) – Sky',
            price:'$79.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MDEQ4?wid=532&hei=582&fmt=png-alpha&.v=RDlibjM5YWlnVnJJd01aVDBHWmpNQUhqc0NvK2RZTVd5TWVhUDFuQlo0M2xaSUF5TlhjbHFERCtLWTV0WkE5MzFSS1RsVmppTFZ3UlU1RzBzaU9Pd1E'
        },
        {
            name:'Smart Folio for iPad mini (A17 Pro) - Light Violet',
            price:'$59.00',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC2T4?wid=532&hei=582&fmt=png-alpha&.v=T093cFA0aElvb1RETk5mcTMybjE3d0hqc0NvK2RZTVd5TWVhUDFuQlo0My9NZ3FnZDdFQVlZNzVtd1lVSmJCV04yUmRsaU1PcmtSMDlQdE50ajZ4ZVE'
        },
        
    ]

    useGSAP(()=>{
        gsap.to(scrollRef.current,{
            x:count
        }

        )
    },[count])


  return (
    <div className='mt-30'>
      <div>
        <div className='text-center text-6xl font-[font7] '>

        Featured iPad Accessories
        </div>

        
        <div className='ml-30 w-[83vw] overflow-hidden'>
            <div ref={scrollRef} className='flex mt-20 space-x-6 '>
                {data.map((elem)=>{
                    return(

                    <div className='bg-[#f0f0f0] h-[80vh] rounded-4xl min-w-[26vw]'>
                        <div className='flex justify-center'>

                        <img src={elem.img} className='h-[50vh]' alt="" />
                        </div>
                        <div className='mt-10 ml-6'>
                            <div className='text-[19px] text-center font-[font7]'>{elem.name}</div>
                            <div className='text-[13px] mt-10 text-center font-[font7]'>{elem.price}</div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
      </div>

       <div className='flex'>
            <div onClick={()=>{
                setcount(count+1030)
            }} className='absolute left-20  -mt-70'><ChevronLeft size={65}/></div>
            <div  onClick={()=>{
                setcount(count-1030)
            }}    className='absolute right-10 -mt-70'><ChevronRight size={65}/></div>
        </div>
    </div>
  )
}

export default Ipadacce
