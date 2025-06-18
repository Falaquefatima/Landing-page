// import React from 'react';
import { IoMdClose } from "react-icons/io";
const Modal = ({ setShowSidePanel}) => {
  return (
    <>

      <div className="z-50 fixed inset-0 bg-black/20  flex  items-center">
        <div className="bg-white  p-5 w-2/4 h-full ">
        <div className="mb-2 flex justify-end"><IoMdClose onClick={()=> setShowSidePanel(false)}/></div>
          <ul>
            <li className="p-2">Investment Philosophy,</li>
            <li className="p-2">Asset Allocation,</li>
            <li className="p-2">Legal offering,</li>
            <li className="p-2">FAQs</li>
            <li className="p-2">About</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Modal;
