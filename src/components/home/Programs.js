import React from "react";
import clsx from "classnames";
import texts from "assets/styles/texts";


const Programs = () => {
  return (
    <div className=" ">
      <div
        className="max-w-[95%] my-[100px] bg-[#680398] border-white border-[4px] mx-auto px-5 py-[59px] xl:pt-[50px] "
        id="programs"
      >
        <h4
          className={clsx(
            texts.berk_h4_bold,
            "text-white text-center mb-12 xl:text-[32px] xl:leading-10"
          )}
        >
          About DuDubai
        </h4>
        <div className="flex flex-col xl:flex-row space-between   justify-center gap-10 mx-auto max-w-[1200px]" >
          <div className="flex-1  mx-auto w-[90%] xl:max-w-[331px] ">
            <p className="text-white font-weight-[400px] leading-loose  xl:pb-[73px] xl:pt-[10px] xl:mb-[58px] md:text-[15px]">
            In the city of dreams, skyscrapers kiss the sky,
              Lies DuDuBai, oh my, oh my!<br/>

              With pockets deep and desires wild,
              He lived in luxury, yet his whims were quite mild.<br/>

              But beneath the glitz and glamour, a tale unfolds,
              Of strange fantasies, and stories untold.           
              </p>
          </div>
          <div className="flex-1 mx-auto w-[90%] xl:max-w-[331px]">
           
            <p className="text-white font-weight-[400px] leading-loose  xl:pb-[73px] xl:pt-[10px] xl:mb-[58px] md:text-[15px]">
                              For DuDuBai, with his wealth so grand,
                  Had a peculiar hobby, oh isn't it grand?<br/>

                  He'd fly in influencers from lands afar,
                  They'd engage in activities, oh so bizarre,
                  From camel rides to steamers under the desert’s star.<br/>

                  But behind closed doors, the truth did lurk,
                  For DuDuBai's fantasies, left many berserk.
            </p>
          </div>

          <div className="flex-1  mx-auto w-[90%] xl:max-w-[331px]">
           
            <p className="text-white font-weight-[400px] leading-loose  xl:pb-[73px] xl:pt-[10px] xl:mb-[58px] md:text-[15px]">
                          So beware, oh traveler, when in Dubai you roam,
              For DuDuBai's antics may turn your trip to foam.<br/>

              But amidst the shock and laughter, let's not forget,
              Dubai's beauty shines bright, like a golden sunset.
                          
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
