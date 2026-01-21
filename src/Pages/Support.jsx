import React from 'react'
import {ArrowUpRight, ChevronRight} from 'lucide-react'

const Support = () => {
    const navdata = [
        {
            name:'iPhone',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-iphone-nav_2x.png'
        },
        {
            name:'Mac',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-mac-nav_2x.png'
        },
        {
            name:'iPad',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_navicons/image-grid-ipad-tn_2x.png'
        },
        {
            name:'Watch',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-watch_2x.png'
        },
        {
            name:'Vision',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-apple-vision-pro_2x.png'
        },
        {
            name:'AirPods',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-airpods_2x.png'
        },
        {
            name:'TV',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/image-grid-tv_2x.png'
        },
       
    ]
    const boxdata = [
        {
            name:'Reset Apple Account password',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/icon_apple-account-password.svg'
        },
        {
            name:'View your purchase history',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/psp_navicons/tile-topic-billing_2x.svg'
        },
        {
            name:'Change a subscription',
            img:'https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/icon_purchase-history-card.svg'
        },
    ]
  return (
    <div className='bg-white mt-17'>
      <div>
        <div className='flex justify-center'>

        <img src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_heroes/support-home-apple-logo-circle-blue.png" alt="" />
        </div>
        <div className='text-center text-6xl font-[font7]'>Apple Support</div>
        <div className='text-center text-2xl mt-5 font-[font7]'>Need help? Start here.</div>
      </div>



      <div className='mt-15'>
        <div>
            <div className='flex space-x-18 justify-center'>
                {navdata.map((elem)=>{
                    return(
                        <div className=''>
                            <img src={elem.img} alt="" className='object-cover h-[12vh]' />
                        <div className='text-center mt-5 font-[font6] text-[20px] text-gray-700 '>{elem.name}</div>
                        
                        </div>
                    )
                })}
            </div>
        </div>
      </div>




      <div className='mt-31'>
        <div className='flex gap-10 px-35 '>
            {boxdata.map((elem)=>{
                return(
                    <div className='w-[25vw] h-[30vh] shadow-2xs z-20  rounded-4xl bg-[#f4f4f4]'>
                        <div className='flex justify-center'>

                        <img className='min-h-[20vh]' src={elem.img} alt="" />
                        </div>
                        <div className='text-center text-[16px] hover:underline mt-5 font-[font7] text-blue-600  '>{elem.name}</div>
                    </div>
                )
            })}
        </div>
      </div>




      <div>
        <div className='bg-[#f8f8f9]'>
            <div className='bg-[#f8f8f9] p-1 py-8  mt-40 '>
            <div className='flex rounded-3xl bg-white  ml-50  w-[70vw]'>
                <img className='w-[40vw] rounded-l-3xl h-[80vh] object-cover' src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_content/tile-side-applecare.image.large_2x.png" alt="" />
                <div className='flex flex-col justify-center '>
                    <div className='text-[50px] text-center leading-13 font-[font7]'>Handled with AppleCare</div>
                    <div className='text-left text-[18px] text-gray-700 mt-4 px-9 '>Every AppleCare plan provides one-stop service for your Apple products, with quick and easy repairs for accidents like drops and spills. You’re also covered if your iPhone, iPad, or Apple Watch is lost or stolen.</div>
                    <div className='mt-10 flex text-blue-600 hover:underline  px-10 '>Learn More <ChevronRight/></div>
                </div>
            </div>
            </div>





            <div className='bg-[#f8f8f9] p-1 py-8  mt-10 '>
            <div className='flex rounded-3xl bg-white  ml-40  w-[80vw]'>
                <div className='flex flex-col justify-center px-10'>
                    <div className='text-[50px] ml-10 leading-13 font-[font7]'>Apple Repair and Service</div>
                    <div className='text-left text-[18px] text-gray-700 mt-4 px-9 '>We can help you find an Apple-certified repair, performed by trusted experts who use genuine Apple parts. </div>
                    <div className='mt-10 flex text-blue-600 hover:underline  px-10 '>Start a repair <ChevronRight/></div>
                </div>
                <img className='w-[40vw] rounded-r-3xl h-[70vh] object-cover' src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_content/tile-feature-repair-and-service.image.large_2x.png" alt="" />
            </div>
            </div>


            
        </div>
      </div>




      <div className='h-screen '>
        <div className='text-center mt-20 text-6xl font-[font1] '>More to Explore</div>
        <div className='flex justify-center gap-12 mt-20'>
            <div className='w-[23vw]'>
                <img className='h-[33vh]' src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_content/content-block-apple-support.png" alt="" />
                <div className='mt-5'>
                    <div className='text-[20px] text-center font-[font7] '>Apple Support App</div>
                    <div className='text-center tetx-[22px] text-gray-800 '>Get help for all of your Apple products in one place, or connect with an expert.</div>
                    <div className='mt-4 text-center hover:cursor-pointer flex justify-center hover:underline text-blue-600'>Download  &nbsp;  <ArrowUpRight /></div>
                </div>
            </div>





            <div className='w-[23vw]'>
                <img className='h-[33vh]' src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_content/tile-feature-round-youtube.png" alt="" />
                <div className='mt-5'>
                    <div className='text-[20px] text-center font-[font7] '>Apple Support on YouTube</div>
                    <div className='text-center tetx-[22px] text-gray-800 '>Watch videos to get the most out of the latest features, devices, and services.</div>
                    <div className='mt-4 text-center hover:cursor-pointer flex justify-center hover:underline text-blue-600'>Visit Apple Support on YouTube  &nbsp;  <ChevronRight /></div>
                </div>
            </div>





            <div className='w-[23vw]'>
                <img className='h-[33vh]' src="https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/psp_content/tile-feature-round-todayatapple.png" alt="" />
                <div className='mt-5'>
                    <div className='text-[20px] text-center font-[font7] '>Today at Apple</div>
                    <div className='text-center tetx-[22px] text-gray-800 '>Learn, create, and be inspired in hands-on sessions at your Apple Store.</div>
                    <div className='mt-4 text-center hover:cursor-pointer flex justify-center hover:underline text-blue-600'>Sign up  &nbsp;  <ChevronRight /></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support
