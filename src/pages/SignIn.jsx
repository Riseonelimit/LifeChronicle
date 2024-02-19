import React from 'react'
import { Outlet } from 'react-router-dom'

const SignIn = () => {
  return (
    <section className="h-[90vh] w-full flex-box  z-30">
      <Outlet/>
    </section>
  )
}

export default SignIn