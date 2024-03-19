import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";


const Events = () => {
  return (
    <div className=" ">
      <div
        className="max-w-[95%] my-[100px] bg-[#680398] border-white border-[4px] mx-auto px-5 py-[59px] xl:pt-[50px] "
        id="Events"
      >
        <h4
          className={clsx(
            texts.berk_h4_bold,
            "text-white text-center my-6 xl:my-12  xl:text-[32px] xl:leading-10"
          )}
        >
          How to buy DuDubai
        </h4>
        <div className="flex flex-col xl:flex-row  items-center xl:space-between justify-center xl:gap-10 mx-auto max-w-[1200px]" >
          <div className="">
           <div className=" max-w-[331px] mb-5">
            <p className="text-white font-weight-[400px] leading-loose   xl:pt-[10px] xl:mb-[58px] md:text-[15px]">
              <span className="font-bold text-[20px] text-[#3AFF42]">1. </span>Download phantom
              Install Phantom Wallet on Chrome or the App Store, and create a new wallet.         
              </p>
          </div>
          <div className=" max-w-[331px] mb-5">
            <p className="text-white font-weight-[400px] leading-loose   xl:pt-[10px] xl:mb-[58px] md:text-[15px]">
              <span className="font-bold text-[20px] text-[#3AFF42]">2. </span>GET some SOL!
             Buy SOL from the Phantom wallet or use an exchange like Coinbase to deposit into your wallet.         
              </p>
          </div>

          </div>
         <div className="">
          <div className=" max-w-[331px] mb-5">
            <p className="text-white font-weight-[400px] leading-loose   xl:pt-[10px] xl:mb-[58px] md:text-[15px]">
              <span className="font-bold text-[20px] text-[#3AFF42]">3. </span>BUY some DuDubai
                Via Raydium, swap your SOL for $DUPE tokens using the official contract address.         
              </p>
          </div>
          <div className=" max-w-[331px] mb-5">
            <p className="text-white font-weight-[400px] leading-loose   xl:pt-[10px] xl:mb-[58px] md:text-[15px]">
              <span className="font-bold text-[20px] text-[#3AFF42]">4. </span>DONE
You are now a certified SHIT. Buy more cream because we are sending hard.        
              </p>
          </div>

         </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
