import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Apple, ChevronLeft, ChevronRight, ChevronRightIcon, CreditCard, Laugh, RotateCwSquare, Truck } from "lucide-react";
import React, { useRef ,useState} from "react";

const Difference = () => {
  const [count, setcount] = useState(0)
  const scrollRef = useRef() 
  const content = [
    {
      color:'#008009',
      svg:<CreditCard size={50}/>,
      colortext:'No Cost EMI. Footnote § Plus Instant Cashback. Footnote §§'
    },
    {
      color:'#007aff',
      svg:<RotateCwSquare size={50} />,
      colortext:'Exchange your smartphone,',
      nocolortext:'get ₹3350.00-₹64000.00 in credit towards a new one. Footnote †'
    },
    {
      color:'#f5825f',
      svg:<Apple  size={50}/>,
      colortext:'Customise your Mac.',
      nocolortext:''
    },
    {
      color:'#ac39ff',
      svg:<Laugh size={50}/>,
      colortext:'Make them yours.',
      nocolortext:'Engrave a mix of emoji, name and number for free.'
    },
    {
      color:'#008009',
      svg:<Truck size={50}/>,
      colortext:'Enjoy delivery or easy pickup',
      nocolortext:'from an Apple store.'
    },
    
  ]

  useGSAP(()=>{
    gsap.to(scrollRef.current,{
      x:count
    })
  },[count])
  return (
    <div className="p-1">
      <div className=" flex font-[font2] ml-40 mt-10 text-4xl">
        <div className="flex">The Apple Store difference.&nbsp;</div>
        <div className="text-gray-500 flex">
          Even more reasons to shop with us.
        </div>
      </div>
        
<div className="overflow-x-hidden">
  <div ref={scrollRef} className="ml-40 mt-5 flex gap-5 ">

  {content.map((elem)=>{
    return(
        <div className="relative bg-white rounded-2xl  h-60 min-w-80 font-[font2] text-[20px]">
          <div>
  <div className={`text-[${elem.color}]`}>
          <div className="mt-5 ml-10">{elem.svg }</div> 
          <div className="mt-5 ml-10">{elem.colortext }</div> 
          <div className=" ml-10">{elem.nocolortext }</div> 
          </div>
          </div>
        
        </div>
        
      )
    })}
        
        </div>
        </div>
    <div className={` z-20 absolute -mt-32 bg-gray-400 ${count===0 ? 'hidden':'block'} rounded-full`}><ChevronLeft size={50} onClick={()=>{
      setcount(count+350)
    }}/></div>
    <div className={`absolute right-0 -mt-32 bg-gray-400 ${count===-1750 ? 'hidden':'block'} rounded-full`}><ChevronRight size={50} onClick={()=>{
      setcount(count-350)
    }}/></div>
    </div>
  );
};

export default Difference;
