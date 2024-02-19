import React from 'react'
import {BiTask} from 'react-icons/bi'

const DayCompletedCard = () => {
  return (
    <div className="w-full p-5 flex-box justify-evenly border-2 border-green-400 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-green-500 to-green-700 rounded-[20px]">
          <h1 className="text-2xl flex justify-evenly items-center gap-3">Today <BiTask/></h1>
    </div>
  )
}

export default DayCompletedCard