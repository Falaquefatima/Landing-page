import Cart from "./Cart";

const Trade = () => {
  return (
    <>
      <div className="  bg-[url('./images/Hero.svg')] p-4 ">
        <h1 className=" text-center p-4 text-2xl bold text-white">
          Trade with us amazingly
        </h1>
        <p className=" text-center  text-white">
          Explore sensational features to prepare your best investment in
          cryptocurrency
        </p>
        <div className=" grid grid-cols-1  m-0 sm:grid-cols-2 md:grid-cols-4  gap-4 sm:m-6">
       
          <Cart
            img="./images/Frame 110.svg"
            title="Manage Portfolio"
            para="Buy and sell popular digital currencies, keep track of them in the one place."
           
          />
          <Cart
            img="./images/Frame 110.svg"
            title="Protected Securely"
            para="All cash balances are covered by FDIC insurance, up to a maximum of $250,000.."
            
          />
          <Cart
            img="./images/Frame 110.svg"
            title="Cryptocurrency Variety"
            para="Supports a variety of the most popular digital currencies and always uptodate.."
            
          />
          <Cart
            img="./images/Frame 110.svg"
            title="Learn Best Practice"
            para="Easy to know how to cryptocurrency works and friendly to newbie.."
            
          />
        </div>
      </div>
    </>
  );
};

export default Trade;
