import React from 'react'

const CurrentDayCard = () => {
  return (
    <div className="w-full h-[15%] p-2 flex-box justify-evenly rounded-[20px] bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-rose-400 to-yellow-600">
          <h1 className="text-4xl text-black font-bold inter bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 text-transparent bg-clip-text">Day 34</h1>
          <button className="px-3 py-2 text-base  rounded-[10px] font-semibold inter text-black bg-white/50 drop-shadow-md ">Write Todays Post</button>
    </div>
  )
}

export default CurrentDayCard