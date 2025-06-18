// import React from 'react';

const Blocks = () => {
  return (
    <>
      <div className="text-center md:mt-4">
        <h1 className="text-2xl font-bold p-2 m-2 font-serif">Learn About Cryptocurrency</h1>
        <p>Learn all about cryptocurrency to start investing</p>
      </div>
      <div className=" grid md:grid-rows-2 md:grid-cols-4 gap-10 p-4 m-20 rounded-md ">
        <div className="bg-[url('./images/r1.jpg')] col-span-2 rounded-md">
          <h2 className=" pl-4 text-white font-bold pt-64 text-start">All about Investing in Cryptos and related risks</h2>
          <p className="text-start text-white pl-4">CRYPTO BASIC</p>
        </div>
        <div className="rounded-lg border border-slate-300">
            <img className="rounded-t-lg" src='./images/i7.jpg'/>
            <p className="p-2 pl-6">CRYPTO BASIC</p>
            <h3  className="px-2 pl-6  font-bold" >What is cryptocurrency? all you need to know</h3>
            <p  className="px-2 pl-6 mb-2">Cryptocurrencies are basically digital assets. It is secured by cryptography.. </p>
        </div>
        <div className="rounded-lg border border-slate-300">
             <img src='./images/i2.png' className="rounded-t-lg"/>
            <p className="p-2 pl-6">CRYPTO BASIC</p>
            <h3   className="px-2 pl-6  font-bold">Can crypto really replace your bank account?</h3>
            <p className="px-2 pl-6 mb-2">From direct deposit to earning yield, key ways crypto can help you take control.. </p>
        </div>
        <div className="rounded-lg border border-slate-300">
             <img src='./images/i1.jpg' className="rounded-t-lg"/>
            <p className="p-2 pl-6">CRYPTO BASIC</p>
            <h3  className="px-2 pl-6  font-bold">How to setup crypto wallet in your account</h3>
            <p  className="px-2 pl-6 mb-2">From direct deposit to earning yield, key ways crypto can help you take control..</p>
        </div>
         <div className="rounded-lg border border-slate-300">
             <img src='./images/i5.jpg' className="rounded-t-lg"/>
            <p className="p-2 pl-6">CRYPTO BASIC</p>
            <h3  className="px-2 pl-6  font-bold">The fact about bitcoin must you know</h3>
            <p  className="px-2 pl-6 mb-2">A crypto wallet is a place where you can securely keep your crypto.. </p>
        </div>
         <div className="rounded-lg border border-slate-300">
             <img src='./images/i6.jpg' className="rounded-t-lg"/>
            <p className="p-2 pl-6">TIPS & TRICKS</p>
            <h3  className="px-2 pl-6  font-bold">The fact about bitcoin must you know</h3>
            <p  className="px-2 pl-6 mb-2">Bitcoin is the world's first widely adopted cryptocurrency, it allows for secure..  </p>
        </div>
        <div className="rounded-lg border border-slate-300">
             <img src='./images/i4.jpg' className="rounded-t-lg"/>
            <p className="p-2 pl-6">TIPS & TRICKS</p>
            <h3  className="px-2 pl-6  font-bold">What Is DeFi? Inside the Wild West of Cryptocurrency.</h3>
            <p  className="px-2 pl-6 mb-2">Welcome to decentralized finance or DeFi, the new frontier of crypto that will.. </p>
        </div>


      </div>
    </>
  );
};

export default Blocks;
