import { ChevronLeft, ChevronRight } from "lucide-react";
import {useGSAP} from '@gsap/react'
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Ipadmid = () => {
    const scrollRef = useRef()
    const [count, setcount] = useState(0)
    
  const data = [
    {
      name: "iPad Pro",
      info: "The ultimate iPad experience with the most advanced technology.",
      price: "From ₹99900.00*** or ₹15983.00/mo. for 6 mo.****",
      img: "https://www.apple.com/assets-www/en_WW/ipad/01_product_tile/medium/ipad_pro_4da74c44a.jpg",
    },
    {
      name: "iPad Air",
      info: "Serious performance in a thin and light design.",
      price: "From ₹59900.00*** or ₹9317.00/mo. for 6 mo.****",
      img: "https://www.apple.com/assets-www/en_WW/ipad/01_product_tile/medium/ipad_air_8fd1d1bbe.jpg",
    },
    {
      name: "iPad",
      info: "The colourful, all-screen iPad for the things you do every day.",
      price: "From ₹34900.00*** or ₹5317.00/mo. for 6 mo.****",
      img: "https://www.apple.com/assets-www/en_WW/ipad/01_product_tile/medium/ipad_75ec2d856.jpg",
    },
    {
      name: "iPad mini",
      info: "The full iPad experience in an ultra-portable design.",
      price: "From ₹49900.00*** or ₹7817.00/mo. for 6 mo.****",
      img: "https://www.apple.com/assets-www/en_WW/ipad/01_product_tile/medium/ipad_mini_47e237156.jpg",
    },
  ];

  useGSAP(()=>{
    gsap.to(scrollRef.current,{
        x:count
    })
  },[count])
  return (
    <div className=" mt-20">
      <div>
        <div className="text-7xl max-md:ml-5 ml-30 font-[font7]">iPad</div>
        <div className="overflow-hidden mt-20">
          <div ref={scrollRef} className="flex  space-x-8 max-md:ml-1 max-md:overflow-x-auto ml-30">
            {data.map((elem) => {
              return (
                <div className="min-w-[30vw] 
                max-md:min-w-[95vw]">
                  <img className="h-[70vh] max-md:w-auto w-auto" src={elem.img} alt="" />
                  <div className="mt-10">
                    <div className="text-2xl text-center font-[font2]">
                      {elem.name}
                    </div>
                    <div className="text-[20px] text-center mt-5 font-[font5] leading-tight p-5 ">
                      {elem.info}
                    </div>
                    <div className="text-2xl text-center font-[font2]">
                      {elem.price}
                    </div>
                    <div className=" flex items-center  justify-evenly">
                      <div className="bg-blue-600 rounded-4xl p-3 mt-3 ml-5 w-28 text-white">
                        Learn More
                      </div>
                      <div className="flex text-blue-500 hover:underline">
                        Buy <ChevronRight />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
                    <div className="absolute mt-5   flex gap-2 max-md:hidden right-0">
                    <div onClick={()=>{
                        setcount(count+350)
                    }}><ChevronLeft size={60}/></div>
                    <div onClick={()=>{
                        setcount(count-350)
                    }}><ChevronRight size={60}/></div>
                    </div>
      </div>
    </div>
  );
};

export default Ipadmid;
