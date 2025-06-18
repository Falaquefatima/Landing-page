// import Img from "../public/images/logo.svg";
import Modal from "./Modal";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
const Header = () => {
  const [showSidePanel, setShowSidePanel] = useState(false);
  return (
    <>
      <div className="w-full flex justify-between items-center p-2  bg-gradient-to-b from-[#140B49] to-[#140B49]/[0.72] rounded-b-2xl ">
        <div className=" w-1/2 sm:w-1/5">
          <img src="/images/logo.svg" alt="logoImg" />
        </div>
        <div className="hidden sm:flex w-3/5  sm:justify-center  space-x-4 text-white  text-[9px] md:text-[16px]">
          <p>Investment Philosophy,</p>
          <p>Asset Allocation,</p>
          <p>Legal offering,</p>
          <p>FAQs</p>
          <p>About</p>
        </div>

        <div className="hidden sm:flex w-1/5  justify-center">
          <button className=" text-white px-4 py-2 bg-transparent border border-[#00008B] rounded-3xl ">
            Contact Us
          </button>
        </div>
        <div className="w-1/2 sm:hidden flex justify-end text-white">
          <IoMenu size={25} onClick={()=>setShowSidePanel(true)} />
        </div>
      </div>

{showSidePanel && <div className="block sm:hidden"><Modal setShowSidePanel={setShowSidePanel}/></div>} 
    
    </>
  );
};

export default Header;
