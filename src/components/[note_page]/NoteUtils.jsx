import React, { useEffect, useState } from 'react'
import { GoComment, GoHeart, GoHeartFill, GoImage } from "react-icons/go";
import { useLoading, useNoteData, useNoteDataDispatch, useUser } from '../../hooks/customHook';
import { NOTES } from '../../reducer/noteDataReducer';
import { getToken } from '../../utils/helpers';
import { updateLikeStatus } from '../../api/PATCH';
import { checkIfLike } from '../../api/GET';

const NoteUtils = ({setIsCommentBox,setImageBox}) => {

  
  const user = useUser()
  const [like, setLike] = useState();
  const noteData = useNoteData()
  const noteDataDispatch = useNoteDataDispatch()
  const [loading,setLoading] = useLoading(false)

  const handleClick = () => {

    setLoading(true)
    //update this and put user in different data
    const data = {
      likes_count: like ? --noteData["noteData"].likes_count : ++noteData["noteData"].likes_count,
      note_id:noteData["noteData"].note_id,
      user_email:user.email,
      isLike:like
    }
    updateLikeStatus(data,getToken('token'))
    
    noteDataDispatch({type:NOTES.UPDATE_NOTE_CONTENT,payload:{noteData:data}})
    setLike(!like);
    setLoading(false)
  };

  useEffect(()=>{

    const checkLike = async()=>{

      const data = {
        note_id:noteData["noteData"].note_id,
        user_email:user.email,
      }
      const res = await checkIfLike(data) 

      if(res){
        setLike(true)
      }
      else{
        setLike(false)
      }
    }
    checkLike()

  },[noteData["noteData"].note_id])
  return (
    <div className="flex gap-5 items-start justify-evenly w-full">
    <button
      className="flex-box  gap-2 md:text-sm lg:text-lg"
      onClick={handleClick}
    >
      {like ? (
        <GoHeartFill className=" md:text-lg lg:text-3xl fill-rose-500 " />
      ) : (
        <GoHeart className=" md:text-lg lg:text-3xl fill-rose-500" />
      )}
      {noteData["noteData"].likes_count}
    </button>
    <button
      className=""
      onClick={() => {
        setIsCommentBox(true);
      }}
    >
      <GoComment className=" md:text-lg lg:text-3xl fill-cyan-500" />
    </button>
    {noteData["images"][0] != null ?
      <button className="" onClick={()=>setImageBox(true)} data-te-target="tooltip-dark">
        <GoImage className=" md:text-lg lg:text-3xl fill-rose-500" />
      </button>
    : 
    null
    }
  </div>
  )
}

export default NoteUtils