import React, { useContext } from "react";
import Typewriter from "typewriter-effect";
import landingPageCardImg from '../assets/landingPageCardImg.svg'
import landingPageBlur from '../assets/landingPageBlur.svg'
import {BsArrowRightShort,BsQuestionLg} from 'react-icons/bs'

import About from "./About";
import {  useNavigate } from "react-router-dom";
import { useUser } from "../hooks/customHook";


const LandingPage = () => {

  const user = useUser()
  const navigate = useNavigate()

  const handleStartedClick = ()=>{
    
    if(user.isAuth){
      console.log("in if");
      return navigate("/explore")
    }
    else{
      return navigate('/signup',{replace:true})
    }
    
  }



  return (
    <section className="relative w-full flex flex-col items-center gap-[10rem]">

      <div className="relative w-[90%] lg:w-3/4 h-[35vh] md:h-[70vh] lg:h-[70vh] z-10 my-[5rem] px-4 lg:px-[5rem] py-5 lg:py-4 flex-box  justify-evenly flex-col md:flex-row lg:flex-row   bg-[#fff7f139] dark:bg-[#2e2c2860] duration-300 rounded-[20px] shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] backdrop-blur-md">
        <div className="flex-box flex-col items-start lg:w-[30%] h-[80%] z-10 justify-evenly">
        <h1 className="text-2xl lg:text-7xl md:text-7xl font-[500] lg:font-[300] text-white items-center justify-center ">
          100 Days<br/>can be 
          <span className="duration-100 delay-300 font-[500] text-orange-700 dark:text-orange-300 ">
             <Typewriter  
              options={{loop: true,}}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Choice")
                  .pauseFor(2000)
                  .changeDeleteSpeed(3000)
                  .deleteAll()
                  .typeString("Happy :)")
                  .pauseFor(2000)
                  .changeDeleteSpeed(3000)
                  .deleteAll()
                  .typeString("Sad :(")
                  .pauseFor(2000)
                  .changeDeleteSpeed(3000)
                  .deleteAll()
                  .typeString("Gloomy")
                  .pauseFor(2000)
                  .changeDeleteSpeed(3000)
                  .deleteAll()
                  .start()
              }}
            />
          </span>
        </h1>
        <p className=" text-sm lg:text-base">
        Embrace the 100-day challenge, for with each entry, you craft a unique tale of resilience, growth, and triumph
        </p>
        <button onClick={handleStartedClick} className=" px-2 py-1 lg:py-3 lg:px-4 text-xs lg:text-base flex justify-center items-center  bg-orange-400 hover:bg-orange-600  duration-300 rounded-[10px] md:font-[500] lg:font-[500] text-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]">Get Started <BsArrowRightShort size={30}/></button>
        </div>

        <div className="hidden md:block lg:block  w-[70%] z-10 h-full ">
          <img src={landingPageCardImg} alt="" className="w-full h-full " draggable="false" />
        </div>
      </div>
        <img src={landingPageBlur} alt="" className="absolute w-full h-full top-0 right-0  object-cover " draggable="false"/>

      <About/>
      
    </section>
  );
};

export default LandingPage;
