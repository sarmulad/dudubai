import React from 'react'
import Good from "assets/images/Good.png";
import Money from "assets/images/Money.png";
import clsx from "classnames";
import texts from "assets/styles/texts";



const ProgramsCards = () => {
  return (
    <div className='max-w-[1200px] flex  items-center flex-col  gap-10 xl:gap-24 xl:flex-row mx-auto justify-between my-[100px] xl:my-[130px] '>
            <img 
             className="w-[312px] h-[312px]" 
             src={Good} 
             alt='programs-images'
             />
           <div className="w-100%">
           <h4
             className={clsx(
            texts.berk_h4_bold,
            "text-white text-center mb-6 xl:text-[32px] xl:leading-10"
            )}
          >
          DuDunomics
        </h4>
           <p className="text-white first-letter: font-weight-[500px] w-[90%] mx-auto font-bold text-center leading-loose mb-8 xl:pb-[73px] xl:pt-[10px] xl:mb-[58px] md:text-[15px]">
           SUPPLY: 100M  BUY/SELL TAX: 0% Tax LIQUIDITY: BURNED MINT & FREEZE AUTHORITY: REVOKED
                         
             </p>
         </div>
         <img 
             className="w-[312px] h-[312px]" 
             src={Money} 
             alt='programs-images'
             />
      

    </div>
  )
}

export default ProgramsCards