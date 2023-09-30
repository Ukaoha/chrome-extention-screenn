import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
<>
 <section className="h-screen">
  <Navbar/>
<div className="relative mt-5 flex gap-x-2">
  <div className=" w-full ml-[6.25rem] flex flex-col mt-[9.9rem] gap-y-[3rem]">

    <div>
                <h1 className="text-[4rem] leading-[4rem] text-headings font-bold font-sora mb-5 max-w-[29.5rem]">
                    Show Them Don't Just Tell
                </h1>
                <p className="font-inter font-normal text-xl max-w-[34.25rem] mb-12 text-grayText leading-7">
                    Help your friends and loved ones by creating and sending
                    videos on how to get things done on a website.
                </p>


                  <div className=" flex   items-center">
          <button className="bg-buttonColor text-white py-2 px-4 rounded-lg flex items-center space-x-2">

             <span>Install HelpMeOut</span>
             <AiOutlineArrowRight className="ml-2" />

           </button>
         </div>
         </div>

  </div>


  <div className="w-full flex mt-[6.5rem] gap-x-4 mr-10">
    <div className="relative flex flex-col gap-y-5">
      <img
        src='./images/womanblue.svg'
        alt="tech woman"
        className="rounded-[0.5rem]"
      />
      <img
        src='./images/males.png'
        alt="males on  pc"
        className="rounded-[0.5rem]"
      />
      <img
        src='./images/grid.png'
        alt="grid dots"
        className="absolute -bottom-[5rem] right-6 opacity-[30%] -z-10"
      />
    </div>
    <div className="flex flex-col">
      <img
        src='./images/grid.png'
        alt="grid dots"
        className="absolute top-[2.9rem] right-6 opacity-[70%] -z-10"
      />
      <img
        src='./images/youngwoman.svg'
        alt="lady with mobile phone "
        className="rounded-[0.5rem]"
      />
    </div>
  </div>
</div>
</section> 





</>
    
);
};

export default HeroSection;
