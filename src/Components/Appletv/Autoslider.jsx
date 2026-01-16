import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState,useEffect } from "react";

const Autoslider = () => {
  const slideRef = useRef(null);

  const data = [
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/CF09SVn2huJzOBM_KRs4Rg/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/7wrtoO8W3jt5HhU87C5KNw/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/RUnF4CVb7Bj5jvPpsnH2Zg/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/4HIYvhgUWaSu9jDlrIvL8w/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/ctu2ZNuCjL3Nyej1udyVRA/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/zVMbjHwChR6d7sPYBWRObw/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/eRFTZzeFOiFPevHIpZKqNA/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/8rF8s5lmPuF1fmRHAMrzKQ/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/1A5UrdlUF6-zEu5cfQvZag/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/HNwryvUxII-66e0CC_HPQg/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/XXsgSHPSnQg5AJpBDRKAoA/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/ULTK27RWbKy0_IOXZ3jAqQ/314x177.jpg",
    },
    
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/5Qz4uhl7ZfeRONLyHtOGfw/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/TCvrc9BdrkslZG6b2I6BOg/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/IY3HJrbbwhzfGGkFJo9iZQ/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/WAPCq-CJPr0baplXIVPKRA/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/C5OV-SU2f8Bu8zJ5A-JNrA/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/flbDNzh_RaO2eT3uSW3DNQ/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/ILiI5DusuhKGWDrqqAJqTQ/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/3KHOv3zGexuX8XodN8CRdA/314x177.jpg",
    },
    {
      img: "https://is1-ssl.mzstatic.com/image/thumb/QcS_7F1bJg0rYiJdwFgn6w/314x177.jpg",
    },
  ];

  
   useEffect(() => {
    
     const fn = gsap.to(slideRef.current, {
        xPercent: -600,
        duration: 205,
        ease: "linear",
        repeat: -1,
      });

  }, []);

  return (
    <div>
      <div className="overflow-x-hidden">
        <div ref={slideRef} className="flex gap-10  mt-10">
          {data.map((elem) => {
            return(
              <div className="min-w-90">
                <img src={elem.img} alt=" " className="w-90 rounded-2xl"/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Autoslider;
