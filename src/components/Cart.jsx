// import React from 'react';
import { FaArrowRight } from "react-icons/fa"
const Cart = ({img,title,para}) => {
 return <>
 <div className=" md:pb-6 bg-white p-10 rounded-lg ">
 <img src={img} className=" h-10 w-15"/>
 <h3 className="pr-2 sm:p-2 font-bold">{title}</h3>
 <p className="  sm:px-2">{para}</p>
 <div className="flex justify-start items-center p-2 font-semibold ">
<p className="text-[#0FAE96]">See Explained</p>
<FaArrowRight className="text-xl ml-2 text-[#0FAE96]"/>

 </div>
 </div>
 </>
}

export default Cart;
