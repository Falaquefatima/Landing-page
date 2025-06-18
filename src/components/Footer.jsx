// import React from 'react';

const Footer = () => {
  return (
    <>
      <div className="m-20">
        <div>
          <p className="font-medium">See All Articles</p>
        </div>
        <div  className="flex justify-around rounded-lg border border-slate-300 p-2 mt-2">
          <img src="/images/logo.svg" alt="logoImg" className="mr-10 bg-gradient-to-b from-[#140B49] to-[#140B49]/[0.72] bg-transparent"/>
           <div >
           <p className="font-bold">About us</p> 
           <p>About</p>
           <p>Career</p>
           <p>Blog</p>
           <p>Legal and Privacy</p>
        </div>

        <div >
           <p className="font-bold">Service</p> 
           <p>Applications</p>
           <p>Buy Crypto</p>
           <p>Affiliate</p>
           <p>Institution</p>  
        </div>

        <div >
             <p className="font-bold">Learn</p> 
           <p>Cryptocurrency</p>
           <p>CryptoBasic</p>
           <p>Tips and tutorial</p>
           <p>Market update</p>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default Footer;
