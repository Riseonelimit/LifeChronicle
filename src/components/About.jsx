import React from "react";
import vectorCat from "../assets/stock.svg";
import {BsArrowRightShort,BsQuestionLg} from 'react-icons/bs'

const About = () => {
  return (
    <div className="flex overflow-hidden rounded-[10px]  z-10 lg:items-center sm:items-start lg:flex-row md:flex-row sm:flex-row sm:h-screen w-3/4 justify-evenly my-[5rem]">
            {/* <div className="w-[30%] h-[20vh] rounded-[100px] bg-yellow-400 drop-shadow-2xl"> */}
        <img src={vectorCat} alt="image" className="z-10 h-[40vh]" draggable="false"/>
      {/* </div> */}
      <div className="w-[45%] z-10  flex flex-col items-start justify-start gap-10">
        <div className="w-full group flex flex-col gap-10 ">
          <hr className="w-full group-hover:w-[20%] duration-700 outline-none h-1 drop-shadow-md rounded-[20px] border-none  bg-gradient-to-r from-orange-400 to-orange-600" />
          <h1 className="text-8xl text-zinc-400 dark:text-white font-[400] inter ">
            What is <span className="duration-500 bg-gradient-to-tl dark:from-red-600 dark:to-yellow-400  from-orange-400 to-yellow-400  text-transparent bg-clip-text">Life Chronicle ?</span>
          </h1>
          <hr className="w-[30%] group-hover:w-[70%]  duration-500 drop-shadow-md outline-none h-1 rounded-[20px] border-none  bg-gradient-to-r from-orange-400 to-orange-600" />
        </div>
        
        <div className="group flex-box flex-col gap-5 relative">
          <p className="text-slate-500 dark:text-[#ddf6f6] md:leading-9  lg:leading-9 lg:text-base md:lg:text-base text-xs j ">
            Our platform empowers you to embark on a transformative 100-day
            challenge, where you can chronicle your life, one entry at a time.
            Whether you're sharing personal achievements, reflecting on
            challenges, or simply celebrating the beauty of everyday moments,
            LifeChronicle is here to be your digital journal and companion.
          </p>

          <hr className="w-1  duration-500 outline-none h-[2rem] rounded-[20px] border-none  bg-gradient-to-r from-red-400 to-red-600" />

          <p className="text-slate-500 dark:text-[#ddf6f6]  leading-9">
            Our mission is to inspire, connect, and uplift individuals on their
            life's voyage. With a supportive community of fellow chronicle
            enthusiasts, you'll find encouragement, motivation, and a shared
            sense of purpose.
          </p>
        </div>
        <button className="flex-box gap-2 hover:underline">Know more<BsArrowRightShort size={20}/></button>
      </div>
    </div>
  );
};

export default About;
