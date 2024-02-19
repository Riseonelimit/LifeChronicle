import React, { useCallback, useEffect, useRef, useState } from 'react'
import SmallTitle from '../components/texts/SmallTitle'
import { useLocation } from 'react-router-dom';
import { getCommentReviewData } from '../api/GET';
import ReviewComment from '../components/ReviewComment';

const CommentReviewPage = ({}) => {
    
    const {pathname} = useLocation();
    const token = useRef(localStorage.getItem('token'));
    
    const [reviewComments,setReviewComments] = useState(null)
    const [loading,setLoading] = useState(true)
    
    
    const commentReviewData = useCallback(async()=>{
        const res = await getCommentReviewData(token.current)
        
        if(res){
            setReviewComments(res.reviewComments)
        }
        setLoading(false)
    })
    
    useEffect(()=>{
        setLoading(true)
        commentReviewData()

    },[pathname])

    return (
        <>
        <div className=' w-full h-full flex-box flex-col gap-2 justify-start overflow-y-auto no-scrollbar p-3 bg-[#ffa04d79] dark:bg-zinc-900/60 backdrop-blur-sm rounded-md'>
        {
            loading ?
            "Loading"
            :
            reviewComments.map(commentData => {
                return <ReviewComment key={commentData.review_id} commentData={commentData}/>
            })
        }
        </div>
        </>
        )
    }
    export default CommentReviewPage