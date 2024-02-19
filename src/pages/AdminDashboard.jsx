import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Form, Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUser } from '../hooks/customHook'
import ProtectedRoute from '../components/ProtectedRoute';
import { adminLogin } from '../api/auth/AUTH';
import SmallTitle from '../components/texts/SmallTitle';
import { getCommentReviewData } from '../api/GET';

const AdminDashboard = () => {

    const user = useUser();
    const [isAdmin,setIsAdmin] = useState(false)
    const {pathname} = useLocation();
    const token = useRef(localStorage.getItem('token'));

    const handleAdminLogin = async ()=>{
        const checkAdmin = await adminLogin({email:user.email,name:user.name},token.current);
        setIsAdmin(checkAdmin)
    }

    return (
        <ProtectedRoute>    
            <section className="w-full h-[90vh] flex-box flex-col  gap-5 ">
                <div className=' w-3/4 h-full flex-box flex-col justify-evenly '>
                    {
                        !isAdmin ? 

                            <button
                            onClick={handleAdminLogin} 
                            className=' rounded-lg bg-orange-400 px-2 py-3 text-md text-white font-semibold'>Admin Login</button>
                        
                        :
                        <>
                            <div className=' w-full flex-box justify-start p-2 gap-3  rounded-md dark:text-orange-100 '>
                                    <Link to={'/dashboard/comment'}  className=' px-3 py-2 rounded-md bg-orange-400'>Review Comments</Link>   
                                    <button  className=' px-3 py-2 rounded-md bg-orange-400'>users</button>    
                            </div>
                            <div className=' w-full h-[80%] '>
                                <Outlet/>
                            </div>
                        </>
                    }
                </div>
            </section>
        </ProtectedRoute>
    )
}

export default AdminDashboard