import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Data } from '../../context/DataContext'
import { useUser } from '../../hooks/customHook'

const MemoryCards = ({url,idx}) => {
  return ( 
    <NavLink  key={idx} to={url}
    className={({isActive})=>
    isActive ? 
    " self-start flex-box flex-col md:p-1 lg:p-3 w-[5rem]  bg-gradient-to-tl dark:from-orange-500 dark:to-red-600  from-red-400 to-orange-400 row-span-1 text-white rounded-[.4em]  drop-shadow-md "  : " flex-box flex-col gap-5 md:p-1 lg:p-3 w-[5rem] col-span-1 bg-[#fff9f7d0]  dark:bg-[#1a171788] dark:border-[2px] border-zinc-800 row-span-1 rounded-[.4em] drop-shadow-md " } >
        <h1 className={' drop-shadow-lg md:text-[.6rem] md:font-[300] lg:font-[400] lg:text-sm font-semibold ' + (true? " " : " text-red-600 font-[700]")}>Day {idx}</h1>
    </NavLink>
    
  )
}


export const MemoryCardsRender = ({url,dayLimit})=>{

  const componentsToRender = [];
  // console.log(dayLimit);
  const user = useUser();
    
  for (let i = 1; i <=  dayLimit ; i++) {

    // FINAL URL IS ADDED WITH THE DAY so URL FORM THE PROPS + INDEX 
    componentsToRender.push(<MemoryCards key={i} idx={i} url={url+i} completed_day={0}/>);
  }

  return(
    <div className="p-3 overflow-y-scroll self-center w-full flex-box items-start justify-center flex-wrap  no-scrollbar  gap-4 ">
      {componentsToRender}
    </div>
  )
}
export default MemoryCards

