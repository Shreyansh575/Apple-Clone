import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AboutMac = () => {
  const [count, setcount] = useState(0) 
  const scrollRef = useRef()
  const data = [
    {
       text:'white',
      heading: "Performance and Battery Life",
      info: "Go fast. Go far.",
      img: "https://www.apple.com/assets-www/en_WW/mac/feature_card/medium/fc_performance_1244ce038.jpg",
    },
    {
         text:'white',
      heading: "Built for AI",
      info: "Smart. Secure. On device.",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_feature_card/medium/fc_intelligence_8a501816e.jpg",
    },
    {
         text:'black',
      heading: "macOS a⁠n⁠d⁠ ⁠A⁠p⁠p⁠l⁠e⁠ ⁠I⁠n⁠t⁠e⁠l⁠l⁠i⁠g⁠e⁠n⁠c⁠e",
      info: "Easy t⁠o⁠ ⁠u⁠s⁠e⁠. Easy to love.",
      img: "https://www.apple.com/assets-www/en_WW/mac/01_feature_card/medium/fc_macos_06c0eb9e2.jpg",
    },
    {
         text:'black',
      heading: "Mac + iPhone",
      info: "Together they work wonders.",
      img: "https://www.apple.com/assets-www/en_WW/mac/02_feature_card/medium/fc_iphone_342f05de2.jpg",
    },
    {
        text:'white',
      heading: "Compatibility",
      info: "Mac runs your f⁠a⁠v⁠o⁠u⁠r⁠i⁠t⁠e⁠ ⁠a⁠p⁠p⁠s⁠.",
      img: "https://www.apple.com/assets-www/en_IN/mac/01_feature_card/medium/fc_compatibility_6a26178eb.jpg",
    },
    {
        text:'white',
      heading: "Privacy and Security",
      info: "Your business is nobody else’s.",
      img: "https://www.apple.com/assets-www/en_WW/mac/feature_card/medium/fc_security_80bc3722b.jpg",
    },
    {
        text:'white',
      heading: "Durability",
      info: "Built to stand the test of time.",
      img: "https://www.apple.com/assets-www/en_WW/mac/feature_card/medium/fc_durability_9340b5ef3.jpg",
    },
    {
        text:'white',
      heading: "Apple Values",
      info: "Our values drive everything we do.",
      img: "https://www.apple.com/assets-www/en_WW/mac/feature_card/medium/fc_values_f48d6fed6.jpg",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  const enterRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      enterRef.current.children,
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: enterRef.current,
          start: "top 30%",
        },
        y: 0,
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  useGSAP(()=>{
      gsap.to(scrollRef.current,{
        x:count
      })
  },[count])
  return (
    <div>
      <div ref={enterRef} className="h-screen p-1 ">
        <div className="ml-30 font-[font2] max-md:ml-5 text-6xl mt-20 opacity-0">
          Get to know Mac.
        </div>

        <div className="opacity-0 max-md:mt-10 overflow-hidden">
          <div ref={scrollRef} className="flex ml-30 mt-10 space-x-5 max-md:ml-2 max-md:overflow-x-auto">
            {data.map((elem) => {
              return (
                <div className=" h-[105vh] min-w-[25vw] max-md:overflow-x-auto max-md:min-w-[85vw] rounded-3xl">
                  <img src={elem.img} className="relative rounded-4xl" alt="" />
                  <div className={`absolute -mt-[95vh] max-md:-mt-[75vh]   px-10 w-80 font-[font2] text-${elem.text}  z-10`}>
                    <div className=" ">{elem.heading}</div>
                    <div className="  text-3xl ">{elem.info}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      <div className="absolute right-0 mr-10  mt-10 gap-5 max-md:hidden flex">
        <div onClick={()=>{
          setcount(count+350)
        }} className=""><ChevronLeft size={50}/></div>
        <div onClick={()=>{
          setcount(count-350)
        }}><ChevronRight size={50}/></div>
       
       
      </div>
      </div>
    </div>
  );
};

export default AboutMac;
