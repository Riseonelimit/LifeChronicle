import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    
  return (
    <div className='w-screen h-screen dark:bg-[#16161a] flex flex-col items-center justify-center gap-10'>

        <h1 className=' text-5xl font-bold dark:text-gray-200 '>Oops!😔</h1>
        <h1 className=' text-2xl font-bold dark:text-gray-400 '>{error.data}</h1>
        <div className='flex-box gap-5'>
          <h1 className=' text-2xl font-bold dark"text-gray-400 '>{error.status}</h1>
          <h1 className=' text-2xl font-bold text-gray-400 '>{error.statusText}</h1>
        </div>
        
    </div>
  )
}

export default ErrorPage