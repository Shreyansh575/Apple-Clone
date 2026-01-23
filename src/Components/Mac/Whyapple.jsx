import { ChevronLeft, ChevronRight, CirclePlus } from "lucide-react";
import {useGSAP  } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from "react";
import gsap from "gsap";

const Whyapple = () => {
  gsap.registerPlugin(ScrollTrigger)
    const scrollRef = useRef()
    const cardRef = useRef()
    const scrollenterRef = useRef()
    const [count, setcount] = useState(0)
  const data = [
    {
      i:1,
      heading: "Pay over time, intrest free.",
      info: "When you choose to check out at Apple with Apple Card Monthly Installments.",
      img: "https://www.apple.com/assets-www/en_WW/common/icon_card/applecard_elevated_1159b73e1.svg",
    },
    {
      i:2,
      heading: "Save on a new Mac with e⁠d⁠u⁠c⁠a⁠t⁠i⁠o⁠n ⁠ ⁠p⁠r⁠i⁠c⁠i⁠n⁠g⁠.",
      info: "Available to college students and educators.",
      img: "https://www.apple.com/assets-www/en_WW/common/icon_card/graduationcap_elevated_e406e6e68.svg",
    },
    {
      i:3,
      heading: "Join an online Personal Setup session.",
      info: "Talk one on one with a Specialist to set up your Mac and discover new features.",
      img: "https://www.apple.com/assets-www/en_WW/common/icon_card/person.line.dotted.person_elevated_83a5eeeb4.svg",
    },
    {
      i:4,
      heading: "Customize your Mac.",
      info: "Choose your chip, memory, storage, even color.",
      img: "https://www.apple.com/assets-www/en_WW/common/icon_card/desktopcomputer.and.macbook_elevated_960eac0cc.svg",
    },
    {
      i:5,
      heading: "Get flexible delivery and easy pickup.",
      info: "Choose from two‑hour delivery from an Apple Store, free delivery, or easy pickup options.",
      img: "https://www.apple.com/assets-www/en_WW/common/icon_card/truck.box_elevated_d74c82127.svg",
    },
    {
      i:6,
      heading: "Shop live with a Specialist.",
      info: "Let us guide you live over video and answer all of your questions.",
      img: "https://www.apple.com/assets-www/en_WW/common/icon_card/person.macwindow_elevated_53b58701b.svg",
    },
    {
      i:7,
      heading: "Explore a shopping experience designed around you.",
      info: "Use the Apple Store app to get a more personal way to shop.",
      img: "https://www.apple.com/assets-www/en_WW/common/icon_card/app.applestore_elevated_8102e7f71.svg",
    },
  ];

  useGSAP(() => {
  gsap.fromTo(
    scrollenterRef.current.children,
    { opacity: 0,
      y:100
     },
    {
      opacity: 1,
      y:0,
      duration: 2,
      stagger: 0.3,
      scrollTrigger: {
        trigger: scrollenterRef.current,
        
        start: "top 50%", 
        
      },
    }
  );
}, []);


  useGSAP(()=>{
    gsap.to(scrollRef.current,{
      x:count
    })
  },[count])
  return (
    <div ref={scrollenterRef} className=" max-md:overflow-y-hidden p-1 h-[140vh] bg-[#dddde0] max-md:h-[80vh]   mt-38">
      

      
      <div className="ml-30 mt-10 max-md:ml-5  text-6xl max-md:text-[32px] leading-12 font-[font7]">
        <div>Why Apple is the best</div>
        <div>Place to buy Mac.</div>
      </div>
      <div className="overflow-x-hidden">
        <div ref={scrollRef} className="ml-30 max-md:ml-0 overflow-x-auto mt-8 max-md:mt-15 flex space-x-5">
          {data.map((elem) => {
            return (
              <div  className="h-70  min-w-90 p-5 rounded-3xl px-10 bg-white">
                <img src={elem.img} alt="" />
                <div>
                  <div className="text-2xl  font-[font7]">{elem.heading}</div>
                  <div>{elem.info}</div>
                </div>
                <div className="flex justify-end mt-5">
                <CirclePlus />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-end mr-15 mt-10 space-x-5 max-md:hidden  ">
      <div className="bg-gray-400 rounded-full" onClick={()=>{
        setcount(count+350)
      }}><ChevronLeft size={40}/></div>
      <div onClick={()=>{
        setcount(count-350)
      }} className="bg-gray-400 rounded-full">  <ChevronRight size={40}/></div>
      </div>
      </div>
    
  );
};

export default Whyapple;
