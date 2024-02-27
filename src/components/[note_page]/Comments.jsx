import React from "react";

const Comments = ({commentData}) => {
  
  if(commentData){
    return (
      <div className=" flex flex-col gap-2 p-[.7em]  dark:bg-[#33333388] bg-[#ffffff9f] backdrop-blur-sm  rounded-xl shadow-md shadow-rose-400 dark:shadow-rose-600">
      <div className="flex justify-between items-center w-full  ">
        <h1 className=" text-[.8rem] md:text-[.6rem] lg:text-[1rem] font-semibold text-rose-500">
          {commentData.username}
        </h1>
        <p className=" text-[.4rem] md:text-[.4rem] lg:text-xs lg:font-[300] dark:text-slate-100 ">
        {commentData.date}
        </p>
      </div>
      <p className=" text-[.6rem] md:text-[.5rem] lg:text-xs font-[300] tracking-wider ">
      {commentData.content}
      </p>
    </div>
    )
  }
  return (
    <div className=" flex flex-col   gap-2 p-[1em]  dark:bg-[#33333388] bg-[#ffffff9f] backdrop-blur-sm  rounded-xl shadow-md shadow-rose-400 dark:shadow-rose-600">
      <div className="flex justify-between items-center w-full  ">
        <h1 className=" md:text-[.6rem] lg:text-[1rem] font-semibold text-rose-500">
          Lorem, ipsum dolor.
        </h1>
        <p className=" md:text-[.4rem] lg:text-xs font-[300] dark:text-slate-100 ">
          2sec ago
        </p>
      </div>
      <p className=" md:text-[.5rem] lg:text-[0.7rem] font-[400]  tracking-wider ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci re 😔
      </p>
    </div>
  );
};

export default Comments;
