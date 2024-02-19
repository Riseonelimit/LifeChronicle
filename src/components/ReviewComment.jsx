import React from 'react'

const ReviewComment = ({commentData}) => {
  return (
      <div className=" w-full flex-box gap-3 bg-zinc-100 dark:bg-zinc-800 shadow-lg rounded-md p-3">
          <div className=" w-[15%] flex-box flex-col gap-3 ">
              <h1 className=" text-base font-bold dark:text-orange-200">{commentData.email}</h1>
              <div className=" flex-box gap-3 text-2xl ">
                  <button>✅</button>
                  <button>❌</button>
              </div>
          </div>
          <div className=" w-[85%] text-sm  ">
              <p>
                 {commentData.content}
              </p>
          </div>
      </div>
  );
}

export default ReviewComment