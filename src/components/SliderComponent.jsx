// import React from 'react';
 import { FaArrowLeft } from "react-icons/fa";
 import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

 const images=[
  {Id:1, src:'./images/a1.jpg'},
  {d:2, src:'./images/a2.jpg'}, 
  {Id:3, src:'./images/a3.jpg'},
  {Id:4, src:'./images/a4.jpg'},
  {Id:5, src:'./images/a5.jpg'},
  {Id:6, src:'./images/a6.jpg'},
  {Id:7, src:'./images/a7.jpg'},
   
 ]




const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
  if(currentIndex === images.length - 1) {
      return
    }else{
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }
  const prevImage = () => {
    if(currentIndex === 0) {
      return
    }else{
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }
  const currentImage = images[currentIndex].src;
  
  return (<>
    <div className="flex justify-center items-center h-96">
    <div className="bg-slate-500 rounded-full p-2"><FaArrowLeft onClick={prevImage} className="text-xl"/></div>
    <div><img src={currentImage} className="object-contain w-[500px] h-[200px]"/></div>
    <div  className="bg-slate-500 rounded-full p-2"><FaArrowRight onClick={nextImage}  className="text-xl"/></div>
    </div>
    
    </>)
}

export default SliderComponent;
