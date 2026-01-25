import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Iphonevideo = () => {
  const scrollRef = useRef();
  const [count, setcount] = useState(0);
  const [sec, setsec] = useState(0)




useEffect(() => {
  const intervalone = setInterval(() => {
    setsec(prev => {
      const next = prev + 10;

      switch (next) {
        case 10:
          setcount(0);
          break;
        case 20:
          
          setcount(-1200);
          break;
        case 30:
          setcount(-2400);
          break;
        case 40:
          setcount(-3600);
          break;
        case 50:
          setcount(0);
          return 0; // 👈 reset sec
        default:
          break;
      }

      return next;
    });
  }, 5000);

  return () => clearInterval(intervalone);
}, []);



  




    
    


  useGSAP(() => {
    gsap.to(scrollRef.current, {
      x: count,
    });
  }, [count]);
  const data = [
    {
      text: "white",
      name: "iPhone 17 Pro",
      info: "All out pro.",
      video:
        "https://www.apple.com/105/media/us/iphone/2025/468ec89a-8873-403d-a7f2-3f977bebf3d7/anim/iphone-17-pro/medium.mp4",
    },
    {
      text: "black",
      name: "iPhone Air",
      info: "The Thinnest iPhone ever. With the power of pro inside.",
      video:
        "https://www.apple.com/105/media/us/iphone/2025/468ec89a-8873-403d-a7f2-3f977bebf3d7/anim/iphone-air/medium.mp4",
    },
    {
      text: "black",
      name: "iPhone 17",
      info: "Magichromatic.",
      video:
        "https://www.apple.com/105/media/us/iphone/2025/468ec89a-8873-403d-a7f2-3f977bebf3d7/anim/iphone-17/medium.mp4",
    },
    {
      text: "black",
      name: "iPhone 16e",
      info: "Everything you love.Including the price.",
      video:
        "https://www.apple.com/105/media/us/iphone/2025/468ec89a-8873-403d-a7f2-3f977bebf3d7/anim/iphone-16e/medium.mp4",
    },
  ];


  return (
    <div className="h-screen max-md:hidden bg-white mt-20">
      <div>
        <div className="overflow-x-hidden">
          <div ref={scrollRef} className="flex ml-30 max-md:ml-1 max-md:overflow-x-auto bg-white gap-10">
            {data.map((elem) => {
              return (
                <div className="relative">
                  <video
                    autoPlay
                    loop
                    className="min-w-[85vw] h-[90vh] object-cover max-md:h-[60vh] max-md:min-w-[68vw] rounded-4xl"
                    src={elem.video}
                  />

                  <div
                    className={`absolute -mt-[85vh] ml-10  z-10 text-${elem.text}`}
                  >
                    <div className="flex text-6xl font-[font7] min-w-[30vw]  w-auto">
                      {elem.name}
                    </div>
                    <div className="flex text-2xl mt-5 w-[23vw]">
                      {elem.info}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="max-md:hidden">
        <div className="absolute w-50 h-15 bg-gray-400 rounded-4xl flex  z-50 -mt-8  left-[40vw] space-x-5">
          <div
            className={` bg-black rounded-full h-[15px] ml-10 mt-6 ${
              count === 0 ? "bg-blue-500" : "bg-black"
            } w-[15px]`}
            onClick={() => {
              setcount(0);
              
            }}
          ></div>
          <div
            onClick={() => {
              setcount(-1200);
              setsec(10)
            }}
            className={` bg-black rounded-full h-[15px]  mt-6 ${
              count === -1200 ? "bg-blue-500" : ""
            } w-[15px]`}
          ></div>
          <div
            onClick={() => {
              setcount(-2400);
              setsec(20)
            }}
            className={` bg-black rounded-full h-[15px] mt-6 ${
              count === -2400 ? "bg-blue-500" : ""
            } w-[15px]`}
          ></div>
          <div
            onClick={() => {
              setcount(-3600);
              setsec(30)
            }}
            className={` bg-black rounded-full h-[15px]  mt-6 ${
              count === -3600 ? "bg-blue-500 rounded-full" : "bg-black"
            } w-[15px]`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Iphonevideo;
