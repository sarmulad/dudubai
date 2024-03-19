import React from "react";
import Logoo from "assets/images/logoo.png";
import Shit from "assets/images/shit.png";
import Twt from "assets/images/twitter.png";
import Tlg from "assets/images/telegram.png";



// import { ReactComponent as LogoWhite } from "assets/icons/logo-white.svg";

const Footer = () => {
  return (
    <div >
      <div className="  text-white px-5 xl:px-0 max-w-[1200px] gap-y-[40px] xl:gap-y-0 mx-auto flex flex-col items-center  xl:flex-row xl:justify-between py-[71px] justify-center">
        <div>
           <img 
             className="w-[196px] h-[196px]" 
             src={Logoo} 
             alt='programs-images'
             />
           
        </div>
        <div>
          <img 
             className="w-[196px] h-[196px] hidden xl:block" 
             src={Shit} 
             alt='programs-images'
             />
        </div>

        <div className="flex flex-col gap-y-3 justify-center items-center text-center">
          <h2 className="text-white text-[15px] xl:text-[69px] font-bold leading-normal ">FOLLOW US</h2>
           <p className="text-white text-[15px] xl:text-[25px]  font-bold leading-normal xl:mb-[15px]">jOIN THE DuDubai<br/> community</p>
        <div className="flex gap-4">
            <img 
             className=" w-[28px] h-[28px] xl:w-[53px] xl:h-[53px]" 
             src={Twt} 
             alt='programs-images'
             />
             <img 
             className="w-[28px] h-[28px] xl:w-[53px] xl:h-[53px]" 
             src={Tlg} 
             alt='programs-images'
             />
        </div>
        </div>

      </div>
      
    </div>
  );
};

export default Footer;
