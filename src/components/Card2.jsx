// import React from 'react';

const Card2 = () => {
  return (
    <>
      <div className=" grid grid-cols-1 m-2 gap-2 md:grid-cols-2  md:grid-rows-2 md:gap-4 mx-44 ">
        {/* <div className=" bg-gradient-to-b from-blue-900 to-indigo-900 rounded-2xl mt-6 ">
          <h1 className="m-6 font-bold text-xl p-4 text-center text-white">
            Buy Crypto with us easily.
          </h1>
          <div className="flex justify-center">
            <button className=" bg-gradient-to-b from-cyan-400 to-teal-500 rounded-full mt-4 p-2 text-white">
              We Manage Your Funds
            </button>
          </div>
          <div className="flex justify-center mt-2">
            {" "}
            <button className="text-white p-2 bg-gradient-to-b from-cyan-400 to-sky-600 rounded-full ">
              With Guaranteed Returns
            </button>
          </div>
        </div> */}

        <div className="flex bg-gradient-to-b from-blue-900 to-indigo-900 rounded-2xl mt-6 ">
          <div className="w-2/3">
            {" "}
            <h1 className="m-6 font-bold text-xl p-4 text-center text-white">
              Buy Crypto with us easily.
            </h1>
            <div className="flex justify-center sm:ml-4">
              <button className=" bg-gradient-to-b from-cyan-400 to-teal-500  sm:rounded-xl md:rounded-full mt-4 p-4 m-6 text-white ">
                We Manage Your Funds
              </button>
            </div>
            <div className="flex justify-center mt-2 ">
              <button className="text-white  bg-gradient-to-b from-cyan-400 to-sky-600  sm:rounded-xl md:rounded-full  mt-4 p-4 m-6">
                With Guaranteed Returns
              </button>
            </div>
          </div>
          <div className="w-1/3 ">
            <img src="./images/Technology.svg " />
          </div>
        </div>

        <div className=" bg-gradient-to-b from-blue-900 to-indigo-900 md:row-span-2 rounded-2xl text-white font-bold p-10 m-4">
          <h1 className="text-center text-lg mb-6">
            Grow your portfolio with us managing your trades
          </h1>
          <img src="./images/mobile.svg" />
        </div>
        <div className="bg-gradient-to-b from-blue-900 to-indigo-900  rounded-2xl text-white font-bold ">
          <h2 className="m-6 p-4 text-center font-bold text-xl">
            Lorem Ipsum Lorem Ipsum
          </h2>
          <p className="m-6 p-4 text-center">
            Lorem Ipsum Lorem Ipsum in risus ullamcorper egestas. Praesent
            volutpat, libero id finibus blandit, mauris massa porta ex, id
            vehicula enim nisi at est.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card2;
