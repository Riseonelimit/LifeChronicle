import React, { useState } from 'react'

import { GoRocket, GoX } from "react-icons/go";
import { Form, useNavigate } from 'react-router-dom';
import { useNoteDataDispatch, useUser } from '../../hooks/customHook';
import { addComment } from '../../api/POST';
import { NOTES } from '../../reducer/noteDataReducer';

const CommentBox = ({setIsCommentBox,noteID}) => {

  const user = useUser();
  const navigate = useNavigate()
  const noteDataDispatch = useNoteDataDispatch();

  const [commentData,setCommentData] = useState({
    note_id:noteID,
    user_email:user.email,
    username:user.username,
    content:"",
  })

  const handleCommentSubmit = async ()=>{

    if(user.email == null){
      navigate('/login')
    }

    const res = await addComment(commentData,localStorage.getItem('token'))

    if(res){
      noteDataDispatch({type:NOTES.UPDATE_NOTE_COMMENTS,payload:commentData})
      setCommentData({...commentData,content:''})
      setIsCommentBox(false)    
    }
  }

  return (
    <div className={"absolute w-[30rem] h-[20rem]  dark:bg-[#151313fd] bg-[#fffffff9] rounded-[2em] left-[2%] bottom-[20%]  z-30  block visible"}>
          <div className="  w-full h-full flex-box flex-col p-[2em]  ">
            <Form className="flex-box flex-col h-full w-full   gap-5 ">
              <textarea
                name="text"
                onChange={e=>setCommentData({...commentData,content:e.target.value})}
                value={commentData.content}
                placeholder="Type Here..."
                draggable="false"
                className="w-full resize-none h-full text-sm font-[300] leading-[2em] outline-none bg-transparent select-none "
              ></textarea>
              <div className="flex-box gap-3 w-full justify-between">
                <button onClick={handleCommentSubmit} className="flex-box gap-2 md:text-sm lg:text-sm font-[500] bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-yellow-400 to-orange-400  py-[.5em]  px-[1em] rounded-[0.5em]">
                  Add Comment <GoRocket className=" md:text-lg lg:text-2xl" />
                </button>
                <button onClick={()=>{setIsCommentBox(false)}} className="flex-box gap-2 md:text-sm lg:text-sm font-[500] dark:bg-[#282828fd] bg-[#d5d5d5fd] py-[.5em] px-[1em] rounded-[.5em] hover:bg-red-500 dark:hover:bg-red-500 hover:text-white duration-300">
                  Close <GoX className=" md:text-lg lg:text-2xl" />
                </button>
              </div>
            </Form>
          </div>
        </div>
  )
}

export default CommentBox