import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronLeft, ChevronRight, CircleX } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Outlet, useLocation, useNavigate, useOutlet } from 'react-router-dom'

const Whyapplewatch = () => {
    const navigate = useNavigate()
    const scrollRef = useRef()
    const {state: elem} = useLocation()
    const [count, setcount] = useState(0)
    const [countx, setcountx] = useState(0)
    
    const data = [
        {
            feature:"Financing",
            info:'Pay over time, interest‑free.',
            more:"When you choose to check out at Apple with Apple Card Monthly Installments.",
            img:'https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_card__ed4ymox3k9ua_medium.jpg',
            key:'Apple Card Monthly Installments',
            about:'Pay for your new Apple Watch over time, interest‑free with Apple Card.◊ Simply choose to check out at Apple with Apple Card Monthly Installments as your payment option when you make your purchase. And enjoy 3% Daily Cash back, all up front. Terms apply.'
        },
        {
            feature:"Apple Trade In",
            info:'Save on a new Apple Watch with a trade‑in.',
            more:"Get up to $150 in credit toward your next Apple Watch when you trade in an eligible device.",
            img:'https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_trade_in__dj8ydvx9fx4y_medium.jpg',
            key:'Trade in your eligible device for credit.',
            about:'Just add a trade-in when you choose a new product. Once your eligible device has been received and verified, we’ll credit the value to your payment method. Or choose to check out at Apple with Apple Card Monthly Installments and we’ll apply the credit instantly. Terms apply.'
        },
        {
            feature:"Delivery and Pickup",
            info:'Get your order quickly and easily.',
            more:"Choose two‑hour delivery from an Apple Store, free delivery, or easy pickup options.",
            img:'http://apple.com/v/watch/bt/images/overview/incentive/incentive_delivery_and_pickup__ljtapj0ry7ey_medium.jpg',
            key:'Flexible delivery and pickup options.',
            about:'Get your new Apple products quickly and easily with two‑hour delivery from an Apple Store, free next‑day delivery, or convenient Apple pickup options.'
        },
        {
            feature:"Personal Setup",
            info:'Make the most of your Apple Watch with an online session.',
            more:"Talk one on one with a Specialist to set up your device and discover new features.",
            img:'https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_personal_session__tc2rfkamj3ey_medium.jpg',
            key:'Jump into online, one‑on‑one sessions.',
            about:'When you buy your new Apple Watch directly from Apple, you’ll get access to Personal Setup. In these online sessions, a Specialist can guide you through setup or focus on features that help you make the most of your watch. Best of all, you can join whenever works for you, from wherever you are.'
        },
        {
            feature:"Guided Video Shopping",
            info:'Shop live with a Specialist.',
            more:"Let us help you find what you need and answer all of your questions, one on one over video.",
            img:'https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_support__dzrqlvvn1cia_medium.jpg',
            key:'Shop live with a Specialist.',
            about:'We can help you choose the product you need while guiding you through the online Apple Store. You won’t appear on camera. Available 7 a.m.–7 p.m. PT.'
        },
        {
            feature:"Apple Store App",
            info:'Explore a shopping experience designed around you.',
            more:"Use the app to get a more personal way to shop.",
            img:'https://www.apple.com/v/watch/bt/images/overview/incentive/incentive_store_app__e1rh3xt10p6q_medium.jpg',
            key:'Shop in the Apple Store app, tailored specifically for you.',
            about:'Get personalized product recommendations, compare models, access Your Saves, and track your orders. Opt in today to get updates on new products, promotions, flexible payment options, and store events.'
        },
    ]
    useGSAP(()=>{
        gsap.to(scrollRef.current,{
            x:count
        })
    },[count])
  return (
    <div className='mt-50 h-[140vh] relative p-1 bg-[#F5F5F7]'>
      <div className='relative'>
        <div className='mt-40  ml-30 font-[font7] text-6xl w-[53vw]'>Why Apple is the best place to buy Apple Watch.</div>
        <div>
            <div className='overflow-hidden'>
                <div ref={scrollRef} className='flex  space-x-10 ml-30 mt-30'>
                    {data.map((elem)=>{
                        const click = ()=>{
                            return(
                            navigate('/details',{state: elem})
                            )
                              
                        }
                        return(
                            <div onClick={()=>{
                                click()
                                
                            }} className='min-w-[30vw] bg-white overflow-hidden p-1 h-[80vh] rounded-4xl'>
                                <div className='ml-10 mt-10'>
                                    <div className='text-[20px] font-[font7] '>{elem.feature}</div>
                                    <div className='text-[35px] leading-10 mt-2 font-[font7] '>{elem.info}</div>
                                    <div className='text-[20px] mt-2 leading-6 mt-2 '>{elem.more}</div>
                                </div>
                                <div className='flex justify-center'>
                                <img className='rounded-4xl mt-20' src={elem.img} alt="" />
                                </div>
                                 

















                                 
                            </div>
                        )
                    })} 
                </div>
            </div>
        </div>
        <div className={`bg-gray-300 absolute  z-10 -mt-80 ${count===0 ? 'hidden':'block'} rounded-full`} onClick={()=>{
        setcount(count+350)
        console.log(count);
        
      }}><ChevronLeft size={50}/></div>
      <div className={`bg-gray-300 absolute right-0 z-10 ${count>-1800 ? 'block':'hidden'}  -mt-80 rounded-full `}onClick={()=>{
        setcount(count-350)
        console.log(count);
      }}><ChevronRight size={50}/></div>




     
      </div>
       
        
           



            
       


        
    
    </div>
  )
}

export default Whyapplewatch
