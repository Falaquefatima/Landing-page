// import React from 'react';

const StartCrypto = () => {
  return (
    <>
      <div className="flex  justify-around  p-4 m-8">
        <div>
          <h1 className=" text-center p-2 font-bold text-xl mb-2">How To Get Started</h1>
          <p className=" p-8 w-80 mb-2 text-center">Simple and easy way to start your investment in cryptocurrency</p>
          <div className="flex justify-center">
            <button className="m-2 bg-gradient-to-b from-[#140B49] to-[#140B49]/[0.72] rounded-lg mt-2 px-6 py-2  text-white">Get Started</button>
            </div>
          
        </div>
        <div >
          <div className=" flex  p-4 bg-slate-200 rounded-lg mt-4">
            <div>
              <img src="./images/imgCrypto.png" className="  h-[50px] w-[50px] mr-4"/>
            </div>
            <div>
              
              <h3 className="font-bold">Lorem Ipsum</h3>
              <p>
                Vivamus dictum eget velit molestie imperdiet. Proin consectet
              </p>
            </div>
          </div>

          <div  className="flex p-4 bg-slate-200 mt-4 rounded-lg">
            <div>
              <img src="./images/imgCrypto.png" className="h-[50px] w-[50px] mr-4"/>
            </div>
            <div>
              
              <h3 className="font-bold">Lorem Ipsum</h3>
              <p>
                Vivamus dictum eget velit molestie imperdiet. Proin consectet
              </p>
            </div>
          </div>

          <div className="flex p-4 bg-slate-200  mt-4 rounded-lg">
             <div>
              <img src="./images/imgCrypto.png" className="h-[50px] w-[50px] mr-4" />
            </div>
            <div>
              
              <h3 className="font-bold">Lorem Ipsum</h3>
              <p>
                Vivamus dictum eget velit molestie imperdiet. Proin consectet
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartCrypto;
