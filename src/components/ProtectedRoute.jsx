import React, { useContext, useEffect, useState } from 'react'
import { useLoading, useUser } from '../hooks/customHook'
import { Navigate, useNavigate } from 'react-router-dom';
import { Data } from '../context/DataContext';
import axios from 'axios';

const ProtectedRoute = (props) => {


    const user = useUser();
    const [loading,setLoading] = useState(true);

    const [isVerified,setIsVerified] = useState(false);

    useEffect(() => {

        setLoading(true);

        const func = async (token) => {
            try {
                const { data, status } = await axios.post(
                    "http://localhost:8080/api/v1/user/verifyuser",
                    null,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setIsVerified(data.verified)
                return null;
            }
            catch(e){
                return;
            } 
            finally{
                setLoading(false);
            }
        };

        func(localStorage.getItem("token"));
    }, []);

    if(loading == true ){
        return <div className='w-full h-[90vh]'>Loading</div>
    }

    return (    
    <>
    {
        isVerified == false && loading == false? <Navigate to={'/login'}/> : 
        props.children
    }
    </>
  )
}

export default ProtectedRoute