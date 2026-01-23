import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import {ChevronLeft, ChevronRight} from 'lucide-react'

const Midcontent = () => {
  const parentRef = useRef();
  const scrollref = useRef();
  const [count, setcount] = useState(0);
  const [countx, setcountx] = useState(0);
  const data = [
    {
      name: "MacBook Air 13” and 15”",
      chip: "M4 chip",
      info: "Strikingly thin and fast so you can work, play, or create anywhere.",
      price: "From $999 or $83.25/mo. for 12 mo.**",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mba_13_15_d7d6ff0e7.jpg",
    },
    {
      name: "MacBook Pro 14” and 16”",
      chip: "M5, M4 Pro, or M4 Max chip",
      info: "The most advanced Mac laptops for demanding workflows.",
      price: "From $1599 or $133.25/mo. for 12 mo.**",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mbp_14_16_47133b32e.jpg",
    },
    {
      name: "iMac",
      chip: "M4 chip",
      info: "A stunning all-in-one desktop for creativity and productivity.",
      price: "From $1299 or $108.25/mo. for 12 mo.**",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/imac_24_83e2df31d.jpg",
    },
    {
      name: "Mac mini",
      chip: "M4 or M4 Pro chip",
      info: "The mini-est, most affordable Mac with mighty performance.",
      price: "From $599 or $49.91/mo. for 12 mo.**",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mac_mini_f02e93815.jpg",
    },
    {
      name: "Mac Studio",
      chip: "M4 Max or M3 Ultra chip",
      info: "Powerful performance and extensive connectivity for pro workflows.",
      price: "From $1999 or $166.58/mo. for 12 mo.**",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mac_studio_40d8b2ba8.jpg",
    },
    {
      name: "Mac Pro",
      chip: "M2 Ultra chip",
      info: "A pro workstation with PCIe expansion for demanding workflows.",
      price: "From $6999 or $583.25/mo. for 12 mo.**",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/mac_pro_496b81d48.jpg",
    },
    {
      name: "Studio Display",
      chip: "",
      info: "A 5K Retina display with stellar camera and audio.",
      price: "From $1599 or $133.25/mo. for 12 mo.**",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/studio_display_d2e254d9e.jpg",
    },
    {
      name: "Pro Display XDR",
      chip: "",
      info: "An advanced 6K XDR display for pro workflows.",
      price: "From $4999 or $416.58/mo. for 12 mo.**",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_product_tile/medium/pro_display_4e872e566.jpg",
    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      parentRef.current.children,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.8,
        duration: 1.5,
        delay: 0.2,
      }
    );
    
  }, []);
  useGSAP(()=>{
    gsap.to(scrollref.current,{
      x: countx
    })
  },[countx])

  return (
    <div className="bg-white mt-20">
      <div ref={parentRef} className="">
        <div className="font-[font2] max-md:ml-5   text-8xl ml-30">Mac</div>
        <div className="bg-gray-300 ml-30 relative mt-10 h-13 w-[30vw] max-md:ml-5 max-md:w-[90vw] max-md:text-[15px] rounded-full flex justify-evenly items-center font-[font5]">
          <div
            onClick={() => {
              setcount(0);
            }}
            className={`${
              count === 0 ? "bg-black text-white rounded-3xl w-28 p-2 h-10" : ""
            }`}
          >
            All Products
          </div>
          <div
            onClick={() => {
              setcount(1);
            }}
            className={`${
              count === 1
                ? "bg-black text-white rounded-3xl  w-20 p-2 h-10"
                : ""
            }`}
          >
            Laptops
          </div>
          <div
            onClick={() => {
              setcount(2);
            }}
            className={`${
              count === 2 ? "bg-black text-white rounded-3xl w-23 p-2 h-10" : ""
            }`}
          >
            Desktops
          </div>
          <div
            onClick={() => {
              setcount(3);
            }}
            className={`${
              count === 3 ? "bg-black text-white rounded-3xl w-22 p-2 h-10" : ""
            }`}
          >
            Displays
          </div>
        </div>
        <div className="flex justify-end space-x-5 mr-8 max-md:mt-8 items-end">
          <div className="" onClick={()=>{
            setcountx(countx + 350)
            console.log(countx);
            
          }}><ChevronLeft size={30}/></div>
          <div onClick={()=>{
            setcountx(countx-350)
          }} className=""><ChevronRight size={30}/></div>
        </div>
<div className="overflow-x-hidden ">
        <div ref={scrollref} className="flex ml-30 gap-5 mt-5  ">
            {data.map((elem)=>{
              return(
              <div ref={parentRef} className="">
                <img src={elem.img} className="h-[50vh] min-w-[30vw] max-md:min-w-[80vw] max-md:h-[40vh] rounded-3xl object-cover" alt="" />
                

                <div className="mt-10 text-center font-[font2] text-3xl">{elem.name}</div>
                <div className="mt-3 text-center font-[font2] ">{elem.chip}</div>
                <div className="mt-3 px-5 text-center text-[20px] font-[font5] ">{elem.info}</div>
                <div className="mt-3 px-20 text-center text-[20px] font-[font2] ">{elem.price}</div>

                <div className="flex text-2xl mt-10 space-x-10 items-center max-md:text-[15px] max-md:space-x-6 px-20">
                  <div className="bg-blue-500 px-3 py-2 rounded-full max-md:px-1  text-white">Learn More</div>
                  <div className="text-blue-700 text-[20px] flex text-center hover:underline">Buy <ChevronRight /></div>
                </div>
                
              </div>
              )
            })}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Midcontent;
