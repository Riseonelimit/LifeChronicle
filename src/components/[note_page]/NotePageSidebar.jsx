import React, { useEffect, useState } from 'react'


import { IoMdClose } from "react-icons/io";

import UserCard from "./UserCard";
import CommentBox from "./CommentBox";
import { MemoryCardsRender } from './MemoryCards';
import { useNoteData } from '../../hooks/customHook';
import { useParams } from 'react-router-dom';


const NotePageSidebar = () => {

    const {userslug} = useParams()
    const [imageBox, setImageBox]         = useState(false);
    const [isCommentBox, setIsCommentBox] = useState(false);
    
    const noteData = useNoteData()
    if(noteData["noteData"] == null && noteData["userInfo"] == null){
        return (
            <div>Loading</div>
        )
    }
    return (
        <>
            <div className="grid relative grid-rows-3 z-10 gap-5 col-span-2 overflow-hidden border-red-500 px-3 py-5">
                <div className="row-span-2 flex flex-col justify-center gap-3 pb-1  ">
                    <div className="flex-box self-start gap-3">
                        <hr className="w-[35px] h-1 group-hover:w-[70%]  duration-500 drop-shadow-md outline-none  rounded-[20px] border-none  bg-gradient-to-r from-orange-400 to-orange-600" />
                        <h1 className="md:text-[1.5rem] lg:text-[2rem] inter font-[600] bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-yellow-400 to-orange-400  text-transparent bg-clip-text drop-shadow-lg">
                            Memory Lane
                        </h1>
                    </div>
                    <div className="w-full h-[85%] flex-box flex-col justify-start overflow-y-auto no-scrollbar">
                        <MemoryCardsRender
                            url={`/explore/${userslug}/`}
                            dayLimit={noteData["userInfo"].completed_days || 0}
                        />
                    </div>
                </div>
                        <UserCard
                            setIsCommentBox={setIsCommentBox}
                            setImageBox={setImageBox}
                            noteUserData={noteData["userInfo"]}
                            isNoteData={noteData['noteData'] != null ? true : false}
                        />

            </div>


                {isCommentBox && noteData['noteData'] != null? (
                    <CommentBox setIsCommentBox={setIsCommentBox} noteID={noteData["noteData"]["note_id"]} />
                ) : null}


                {imageBox && noteData["images"][0] != null && noteData['noteData'] != null ? (
                    <div
                        className={"absolute w-[70rem] dark:bg-[#151313fd] bg-[#fffffff9] flex-box flex-col gap-3 rounded-[2em] left-[20%] bottom-[10%] z-20 px-8 py-5 visible shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"}
                    >
                        <div className=" flex-box justify-between w-full">
                            <h1 className="md:text-[1rem] lg:text-[1.8rem] inter font-[700] bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-yellow-400 to-orange-400  text-transparent bg-clip-text">Images</h1>
                            <IoMdClose onClick={() => {setImageBox(false);}}
                            className=" p-1   text-3xl hover:bg-red-500 duration-300 rounded-lg" />
                        </div>

                        <div className="w-full h-full grid grid-cols-2  gap-5  ">
                            {noteData["images"].map((image) => {
                                return (
                                    <img
                                        className="col-span-1 row-span-1  w-full object-cover rounded-lg delay-300"
                                        src={image}
                                    ></img>
                                );
                            })}
                        </div>
                        
                    </div>
                ) : 
                null
                // <div
                // className={"absolute dark:bg-[#151313fd] bg-[#fffffff9] flex-box flex-col gap-3 rounded-[2em] left-[20%] bottom-[10%] z-20 px-8 py-5 visible shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]"}
                // >
                //     No Images
                // </div>   
                }
            </>
    )
}

export default NotePageSidebar