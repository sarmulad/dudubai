import React from "react";

import herobt from "assets/images/dudubai.png";
import her from "assets/images/her.png";

import dudubt from "assets/images/duduBtn.png";

import { TopNav } from "components/navigation";


const Hero = () => {
  return (
    <>
    <div className=" bg-[#8100BE] relative">
    <TopNav  />
      {/*  */}
      <div className="relative ">
         
          <img
            src={herobt}
            alt="background-patterns"
            className="hidden xl:block max-w-[1200px] mx-auto mt-[40px] pb-10"
           />
            <img
            src={her}
            alt="background-patterns"
            className="block xl:hidden w-[75%] mx-auto mt-[40px] pb-10"
           />

           <div>
           <img
            src={dudubt}
            alt="background-patterns"
            className=" max-w-[1200px] mx-auto mt-[40px] pb-10"
           />
           </div>
       </div>
    </div>
    </>
  );
};

export default Hero;
