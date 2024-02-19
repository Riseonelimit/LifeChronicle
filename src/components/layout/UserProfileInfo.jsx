import React from 'react'

const UserProfileInfo = (props) => {
  return (
    <div  className='flex-container gap-3 items-start ml-[3rem]'>
        {props.children}
    </div>
  )
}

export default UserProfileInfo