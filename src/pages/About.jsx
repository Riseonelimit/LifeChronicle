import React, { useContext } from 'react'

const About = () => {

  console.log('rendered');

  return (
    
    <section className='h-screen w-full grid-rows-4 '>
        <h1 className='md:text-[3rem] row-span-1 lg:text-[4rem] inter font-[600] bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-yellow-400 to-orange-400  text-transparent bg-clip-text drop-shadow-lg self-start justify-items-start'>About</h1>

        <div>
          <div>
            
          </div>
        </div>

    </section>
  )
}

export default React.memo(About)