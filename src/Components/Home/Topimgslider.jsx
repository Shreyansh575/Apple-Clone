import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef ,useState} from 'react'

const Topimgslider = () => {
  const [Lscroll, setLscroll] = useState(0)
  // const [Rscroll, setLscroll] = useState(false)
  const rightRef = useRef()
  useGSAP(()=>{
    if(Lscroll){
    gsap.to(rightRef.current,{
      x:Lscroll,
      
      
    })}
    if(!Lscroll){
    gsap.to(rightRef.current,{
      x:0
    })}
  },[Lscroll])
  return (
    <div className=' max-md:w-screen '>
      
      <div className='max-md:w-screen max-md:overflow-x-hidden'>

     
      <div ref={rightRef} className='flex h-22   ml-40 max-md:overflow-x-auto max-md:w-100  mt-10 space-x-5'>
        <img className='bg-blend-color-burn object-cover' src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202510?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4YkVwOVNLbHRldEZZYkpvZ0VDM1ZJYisrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazlhTkRKemhDN0NEc1VzN1ZjMGR5dUk" alt="" />
        <img className='object-cover' src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg" alt="" />
        <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-iphone-nav-202509?wid=1200&hei=780&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXM1doT212VzJoWjBSKzRpbmNETHN1QnRHU3BERzdnOWdiQkwvWTZGajY2b1M0TjRWdzF2UjRGVEY0c3dBQVZ6VFN0TmdKaCs3NTJMbFVuOGp2LzI5RGc" alt="" />
        <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509_GEO_IN?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkK0gvNGFhODF5SWpidW9tVnFmL2IrcnZGQmhUaHlPN016cFdzNFJtZThkQ2M5THdmR1U4Nmp4b2NFbEg2N21UQzYzZVFZZGtHNUI4c1NvME1xTTYxSzZ1ZUVMek0rc2U0U3QwOE5USS9PYTQ" alt="" />
        <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1ydzduWDk4YUM5R1JVL2gwcEZnWWNaRFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFltc1ByWXViNGVYdEdGdkhJbjJoMGs" alt="" />
        <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yMDhFUStvWHB3SDlDa3VrdUZORWRqeld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VGZUMjJQZFhhT2thWmkxZjhra3FyZEk" alt="" />
        <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA" alt="" />
        <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA" alt="" />
        <img src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=QnhsNk96S0o4R1dkN2FveStNM1hwNzZGMHVrNGw2NTM5Vmk2bHZzMXQ3aWRqT2drRk00QWZTdStjaG1MbFN0Z1BrcjVFNVdueFRVbVY3TGtiL2RjUWZiYi92WkVCUEt5TCtGS2UwaWpxS3I3V3pZTFFiS3ZLYmI4VE9UR00xblE" alt="" />
      </div>
       </div>
       
      <div onClick={()=>{
        setLscroll(Lscroll+150)
        console.log(Lscroll);
        
      }}  className='absolute z-20 bg-transparent left-0 bg-gray-400 max-md:hidden rounded-full  -mt-13'><ChevronLeft size={50} /></div>
      <div onClick={()=>{
        setLscroll(Lscroll-150)
        console.log(Lscroll);
        
      }}  className='absolute z-20 bg-transparent right-0 bg-gray-400 max-md:hidden rounded-full  -mt-13'><ChevronRight size={50} /></div>
    </div>
  )
}

export default Topimgslider
