import React, { useState } from "react";

import NoteUtils from "./NoteUtils";

const UserCard = ({ setIsCommentBox,setImageBox,noteUserData,isNoteData}) => {

  // console.log(noteUserData);
  return (
    <div className="  w-full flex-box">
      <div className=" min-w-[60%] dark:bg-[#0f0e0e88] bg-[#ffffffcb] backdrop-blur-md drop-shadow-md p-[1.5em] row-span-1 rounded-[2em] flex-box flex-col justify-evenly gap-5 ">
        <h1 className=" self-start md:text-md lg:text-2xl inter font-[600] bg-gradient-to-tl dark:from-orange-600 dark:to-yellow-400  from-orange-500 to-orange-400  text-transparent bg-clip-text drop-shadow-sm">
          Posted By
        </h1>
        <div className=" flex-box md:flex-col lg:flex-row flex-wrap justify-evenly gap-3">
          <div
            className=" md:w-[100%] md:h-[5rem] lg:w-[6rem] lg:h-[5rem] flex-box rounded-[1em] select-none overflow-hidden  drop-shadow-md"
            draggable="false"
          >
            <img
              src={`data:image/svg+xml;base64,${noteUserData.profile_img}`}
              alt=""
              className="w-[40%] lg:w-full h-full select-none"
              draggable="false"
            />
          </div>
          <div className="flex-box items-start flex-col ">
            <h1 className="lg:text-3xl lg:font-[600]  bg-gradient-to-tl dark:from-pink-600 dark:to-orange-400  from-pink-400 to-orange-400 text-transparent bg-clip-text ">
            {noteUserData.name}
            </h1>
            <h1 className="lg:text-md lg:font-[400] dark:text-slate-300 ">
              @{noteUserData.username}
            </h1>
          </div>
        </div>
        {
          isNoteData?
          <NoteUtils  setIsCommentBox={setIsCommentBox} setImageBox={setImageBox} />
          :
          null
        }
      </div>
      </div>
  );
};

export default UserCard;
