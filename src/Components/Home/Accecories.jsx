import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef,useState } from 'react'

const Accecories = () => {
    const [count, setcount] = useState(0)
    const scrollRef = useRef()
    const data = [
        {
            accecories:'In with the new.',
            price:'The accessories you love. In a new mix of colours and textures.',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-accessories-story-202509?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=K1NBYnFSRndoRHEyUklJLyttMlQ2TDJZSWVLNGdhSUJlSmNGa21DNVh4dllGV1BtVDBLaVpxMVJKZEI3MFYwYnN2Mmx4a3VvSnUzaFUvSVlVRUJkbEdmUjhFNHFyZ0hQbWZocUNqTGJDcWpMZyt1a0tPOGRUTGk5YmUzdUpPZGo'
        },
        {
            accecories:'iPhone 17 Pro Max TechWoven Case with MagSafe - Blue',
            price:'MRP ₹5900.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGF94?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Nkh3Slc5TTdnUkNRdEFoMHNMb2tpdllvYS9naDJJdU9KTWdGWjhKWFRmS2dsTmM1WU1aVW5TNU0vaVJVQWhmMVk5NVdFV2ZjM0hLVUE0cDRob2ZwTlE'
        },
        {
            accecories:'iPhone 17 Pro Silicone Case with MagSafe – Orange',
            price:'MRP ₹4900.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGFE4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=bndDUXppMlNJbEdxdTRGZEVOamFPZllvYS9naDJJdU9KTWdGWjhKWFRmS09sejdlODJQNFcxdTJNMk5ocVJHc09FcUJtVDQrZ1BFUjgyRlcxUGNzSVE'
        },
        {
            accecories:'Magic Keyboard for iPad Air 13" (M3) - US English - Black',
            price:'MRP ₹29900.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGYY4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=cXE4eWx0VnJZVVhyNEgrSHdoTXBFL1lvYS9naDJJdU9KTWdGWjhKWFRmTDIxVS8wcGRSdlR3MXU5L0FlWS81Yy9tbVBaOEJXZFoxUWFzTHlRSm1CR1E'
        },
        {
            accecories:'crossbody strap light-blue',
            price:'MRP ₹5900.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGGH4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=WGl1MHdZRDZEV255bWlQdXYvbDdmUFlvYS9naDJJdU9KTWdGWjhKWFRmTGJTUCt1VTBmTFhjbWY4YWxRN0c2MEk2Q08rVWl2VS9QU2FQNWk2cGRkM0E'
        },
        {
            accecories:'iPhone Air Bumper - Light Blue',
            price:'MRP ₹3900.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MH024?wid=400&hei=400&fmt=jpeg&qlt=90&.v=b2duUWhtbkVPZTlqLzk2RmtpekpldllvYS9naDJJdU9KTWdGWjhKWFRmSUplZzJVZVhEYnNEendxb29UeHdxU2ZYVzdURlB3R1hpczQzUzJMOVlhTnc'
        },
        {
            accecories:'46mm Neon Yellow Sport Loop',
            price:'MRP ₹4500.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MFFL4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=SGc3cmVUSlY0R0hjZWhISkdwMU5lZllvYS9naDJJdU9KTWdGWjhKWFRmSVBFWi9xRFZmaXhpdGF6TUdwaDJUN3FGbTRvSk9qazkxYnNBcGV2eHd3aUE'
        },
        {
            accecories:'46mm Ancor Blue Sport Brand',
            price:'MRP ₹4500.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MFGX4ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Tno3NE1qckFwa0IwYVE3bmE1RHdTdGVidldMUGJjaXo4L3NxcmNtKzZhVHU2Qkx1YnhVZ1JqVmI3VVY4M1FIL1VnendLR0pROCtlWE9vU2dqU3pkc3c'
        },
        {
            accecories:'iPhone Air MagSafe Battery',
            price:'MRP ₹11900.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGPG4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Sml1aUlKZ3BBVnQ2MmgzRnB4Wi9jUFlvYS9naDJJdU9KTWdGWjhKWFRmTHI1T3Rua2ZCWEpxaXFZS01CYzFXdklaY0ZqN3p4QnhWMWFIdUloZmtPOGc'
        },
        {
            accecories:'MagSafe Charger (1m)',
            price:'MRP ₹4500.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD74?wid=400&hei=400&fmt=jpeg&qlt=90&.v=QU9iWWlMMm5oM3lvNEpzQyt4azJZdllvYS9naDJJdU9KTWdGWjhKWFRmSTdXcmkxZU5aTGtPSnAvQU9oVHRXVXV0ZThHVGpRblgrVERKYWI5R2FaWmc'
        },
        {
            accecories:'MagSafe Charger (2m)',
            price:'MRP ₹5500.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD74?wid=400&hei=400&fmt=jpeg&qlt=90&.v=QU9iWWlMMm5oM3lvNEpzQyt4azJZdllvYS9naDJJdU9KTWdGWjhKWFRmSTdXcmkxZU5aTGtPSnAvQU9oVHRXVXV0ZThHVGpRblgrVERKYWI5R2FaWmc'
        },
        {
            accecories:'20W USB-C Power Adapter',
            price:'MRP ₹2190.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUVR3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=OEhqWXhCN0xTU0hLSjkwbGJHUFpqUFlvYS9naDJJdU9KTWdGWjhKWFRmSU03dmFGL3FSTTRycHFSZi8vcVdOa21jNU11Umtyd294bnNTR1Job1FpR2c'
        },
        {
            accecories:'iPhone 17 Pro Clear Case with MagSafe',
            price:'MRP ₹4900.00 (Incl. of all taxes)',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGFT4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=QWJYVFJmM2Z3QmxlMTJjQm1iaDJoUFlvYS9naDJJdU9KTWdGWjhKWFRmS3g4S1JaQm1KOHdyNWRBa0pZNHFxY1RYeWdsWXZHNXhZcTQvSzgxRllxcVE'
        },
        {
            accecories:'Explore all accessories.',
            price:'',
            img:'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-accessories-explore-202509?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=K1NBYnFSRndoRHEyUklJLyttMlQ2SnBtVU93bDBEbzYrK1JUSkZGdW9DOStKZVlMeDB0R05ZNm4rSm0zN044SlVrc1JZVkQ0S2s0elFpK2Y1K2lCS1NsOG1PN3FBRzN3cEphZ2ZrZllTNFpIMmFsSTJpTzY1QnJ1enlidWYzZkk'
        },
    ]

    useGSAP(()=>{
        gsap.to(scrollRef.current,{
            x:count
        })
    },[count])
  return (
    <div className='mt-40'>
        <div className='text-4xl max-md:-mt-10 max-md:ml-5 max-md:-mt-9 max-md:grid max-md:text-2xl ml-40 font-[font2] flex'>
            <div className='max-md:text-3xl'>The Apple experience.&nbsp;</div>
            <div className='text-gray-400'> Do even more with Apple products and services.</div>
        </div>
      <div  className='overflow-x-hidden mt-10'>
        <div ref={scrollRef} className='flex gap-5  ml-40 max-md:ml-5 max-md:overflow-auto relative '>
            {data.map((elem)=>{
                return(
                    <div className='h-[80vh] max-md:h-[73vh] min-w-[400px] rounded-2xl bg-white  w-full'>



                        <img src={elem.img} className='rounded-2xl  h-[400px] relative  object-cover'  alt="" />
                        <div className='font-[font2] px-10 text-2xl'>

                        <div className=''>{elem.accecories}</div>
                        <div className='font-[font5] px-5 mt-2 text-[15px]'>{elem.price}</div>
                    </div>
                        </div>
                )
            })}
        </div>
      </div>
      <div onClick={()=>{
        setcount(count+350)
      }} className={`bg-gray-400 left-1  rounded-full ${count===0 ? 'hidden':'block'}  -mt-70 absolute max-md:hidden max-md:-mt-90`}><ChevronLeft  size={40}/></div>
      <div onClick={()=>{
        setcount(count-350)
        console.log(count);
        
      }} className={`bg-gray-400 right-1 max-md:right-1 rounded-full ${count===-5250 ? 'hidden':'block'}  max-md:hidden -mt-70 max-md:-mt-90 absolute`}><ChevronRight size={40 }/></div>
    </div>
  )
}

export default Accecories
