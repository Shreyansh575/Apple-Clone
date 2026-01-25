import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useState } from "react";

const Newarrivals = () => {
  
  const scrollRef = useRef();
  const [count, setcount] = useState(0);
  const imgs = [
    {
      name: "iPhone 17 Pro",
      color: 'text-black',
      ai: "Apple Intelligence Footnote ±",
      price: "From ₹134900.00 Footnote †",
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-holiday-iphone-17-pro-202511?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=UWdrNzNrY0ZiOGhRNlVuUlF4U3Jod29LUXdLa0l4eHE1eFJDMGV5aG5PcGlJYS9HR0pEWlRaNTQ5aGsvYnhrYlM3UUxhTDY4VmxnT1pqOEpldm1McndYUldRZVYxMHFkRFZrQVZuaWMwSkFNQ1VOQ3VjWVczZldpb3Zjckt2L04",
    },
    {
      name: "MacBook Pro 14”",
      color: 'text-white',
      ai: "Supercharged by M5.",
      price: "From ₹169900.00 Footnote ±",
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-pro-202510?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyMm9DK3hwOFVzTGV2T3V6VkdGOUQ2UnFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1lsekVRWVZWZFZsS2Q1VFBGdkVHSUhMQ2gzYU14VEs0V1BFdWdmdWl3NGg",
    },
    {
      name: "iPad Pro",
       color: 'text-white',
      ai: "Mmmmm. Power.",
      price: "From ₹99900.00 Footnote ±",
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-ipad-pro-202510?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXTmRKNlp6TmhsQ0RBNndmZkxCVmYvSDZXYXJlRUd1cTBYTnRnbTNlazIvM3ZvdUZlR0V0VUdJSjBWaDVNVG95YkNJSU04U2x4akplUjNjVDFUUHpUaVU",
    },
    {
      name: "Apple Watch Series 11",
      ai: "The ultimate way to watch your health.",
      price: "From ₹46900.00 Footnote ±",
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s11-202509_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09valRRUlJUaDNLcGNDeGFIUENxWmdjS3FFMHhFSDhqV0JNYUQxSWJ4aDVUMjczTGJ1bkVZOVdxMC9CSUwydmQ4a0o0eThMS0YvelVrajJyK1hYTEVqWTdSTE1OZm1ieWlCUHN5eW1sSkY1alk",
    },
    {
      name: "iPhone 17",
      ai: "Magichromatic.",
      price: "From ₹82900.00 Footnote ±",
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSHVrRHVBUzZ5dlZsTGhlK2dxMHZnWDkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVFzY1NTN1pYSVRIN1hKQ2xOdjlkRnArYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    },
    {
      name: "MacBook Air",
      ai: "Speed of lightness.",
      price: "From ₹99900.00 Footnote ±",
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyOWVOMytmanI1M0ZTQWR1RjlDMWJpNXFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbk15N0N0R0lhUGhlMG1Tdmc3RjZVQ09NTUhYNlZ6OGxKNWpBMHlTSTlldko",
    },
    {
      name: "iPhone Air",
      ai: "The thinnest iPhone ever.",
      price: "From ₹119900.00 Footnote ±",
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-air-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXT0lGL3JSRk9QTHUvdlNaQzlmZ3M4Ym45S05qekNUdVUwMVFyK1pKaERUd2JGcXNRQnFCV0w3WVRjTExvdm1ic1VsVU5yYWhNQlZNeWo2SGZrN292cVlVRk5BYjU4dkMrYjBKSjFqVXFOVGg",
    },
    {
      name: "Apple Watch SE 3",
      ai: "Walk it. Talk it. Track it. Love it.",
      price: "From ₹25900.00 Footnote ±",
      img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-se-202509_GEO_IN?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vblVvWDFTR2d2QS9FZ0dqdEJBMEFEbys0ZkxtVy9RN1JoTnJaSXpBMGNyaTFQYkthbm1jaTVkUmtRenhDTTR4ZnI3N0VpSi8yV1hHV0lOdGdTbTEwNmtndEVhS2wvdmExUTEzS0Q3elh5cEo",
    },
  ];
  console.log(imgs);

  useGSAP(() => {
    gsap.to(scrollRef.current, {
      x: -count,
    });
  }, [count]);

  return (
    <div className="p-1 overflow-auto max-md:ml-0 max-md:grid max-md:h-100vh  ">
      <div className="flex mt-20 font-[font7] text-4xl max-md:ml-8  ml-40">
        <div className="text-blue-500 flex top-5">The &nbsp;</div>
        <div className="text-blue-400"> l</div>
        <div className="text-[#26453c]">a</div>
        <div className="text-[#c45515]">test.</div>
        <div className="text-gray-400 max-md:-ml-45 max-md:mt-10">Truly awe-inspired Gifts.</div>
      </div>
      <div className="  overflow-hidden   mt-20">
        <div ref={scrollRef} className="ml-40 max-md:ml-0 flex gap-5  max-md:overflow-auto ">
          {imgs.map((elem) => (
            <div className="min-w-[40px] max-md:ml-0
              h-[75vh] flex-shrink-0 scale-101 rounded-3xl hover:scale-102 ">
              <div className="w-full  space-y-10">

              <div className={`absolute mt-5  ml-4 ${elem.color}  z-10 max-md:text-2xl  font-[font2] text-3xl `}>{elem.name}</div>

              <div className={`absolute mt-5  ml-4 ${elem.color} mt-13 z-10 max-md:text-[18px] max-md:leading-5 font-[font2] text-[20px] `}>{elem.ai}</div>
              <div className={`absolute mt-5  ml-4 ${elem.color} mt-20 z-11  font-[font5] text-[15px] max-md:mt-23`}>{elem.price}</div>
              </div>
              <img
                src={elem.img}
                className="h-full max-md:max-w-[300px] max-md:max-h-[500px] relative w-full object-cover rounded-3xl"
                alt="dd"
              />
            </div>
          ))}
       </div>
      </div>

      <div
        className={`absolute bg-gray-400  rounded-full ${count>0 ? 'block':'hidden'}  z-50 left-1 max-md:hidden -mt-60  max-md:mt-130`}
        onClick={() => {
          setcount(count-340);
          console.log(count);
        }}
      >
        <ChevronLeft size={30} />
      </div>
      <div
        className={`absolute z-50 right-1 bg-gray-400 ${count>2100 ? 'hidden':'block'} rounded-full  max-md:mt-130  max-md:right-2 -mt-60 max-md:hidden`}
        onClick={() => {
          setcount(count+340);
          console.log(count);
        }}
      >
        <ChevronRight size={30} />
      </div>
    </div>
  );
};

export default Newarrivals;
