import { ChevronRight } from 'lucide-react'
import React from 'react'

const Matchacce = () => {
  return (
    <div className=''>
        <div>
            <div>
                <div className='bg-[#F5F5F7] '>
                <div className='absolute top-50 right-40 '>
                    <div className='text-5xl w-60 font-[font1] '>Meet your match.</div>
                    <div className='text-[18px] mt-2 w-90 font-[font6] leading-7 '>Pair your iPhone with a case, wallet or Crossbody Strap in fresh new textures and colours.</div>
                    <div className='mt-3 text-blue-600'>

                    <div className='flex hover:underline hover:cursor-pointer items-center text-xl font-[font6]'>Shop MagSafe <ChevronRight/></div>
                    <div className='flex mt-1  
                    hover:cursor-pointer    hover:underline items-center text-xl font-[font6]'>Shop Crossbody Straps <ChevronRight/></div>
                    
                    </div>
                </div>

                <img className=' object-cover ' src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/aalp-magsafe-strap-header-202509?wid=2880&hei=960&fmt=png-alpha&.v=Mm9DK3AvM1grOWszVnpva1dlSzNtV3R0b05sQ1NuV1p4c3RIT0dCTUxaZ1RxYlRNdkVncHhLL2gwSGxuVWk0TnV5NVU0QmM2b3hmeWJWTTVtN1o5ZmxuM1RUbEtLZ0RVenJDc2UxZ2xVSGQrYWpGdS9XeFgvbS9ITnNYOEhYaG4" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Matchacce
