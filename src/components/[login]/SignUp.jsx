import React, { useContext, useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

import DataContext, { Data } from "../../context/DataContext";
import { USER } from "../../reducer/userReducer";
import {useUser, useUserDispatch} from "../../hooks/customHook";
import LoginRedirect from "../utils/LoginRedirect";
import Banner from "../utils/Banner";

const SignUp = () => {

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const navigate = useNavigate() 
    
    
    const user = useUser();
    const userDispatch = useUserDispatch();

    const handleSignUp = async(e)=>{

        e.preventDefault()


        //VALIDATION REMAINS

        const data = {
            name:name,
            age:age,
            email:email,
            password:password
        }

        userDispatch({type:USER.UPDATE_FIELD,payload:data})
        return navigate('/signup/userinfo')

    }
    // console.log(context.USER);
    return (
            <div className=" w-full lg:w-[30%] overflow-hidden  relative flex-box flex-col  justify-evenly self-start mt-[5em] bg-[#fffefe8d] dark:bg-[#1717178c] shadow-[rgba(0,_0,_0,_0.2)_0px_10px_20px_-7px] rounded-2xl ">
                <Banner>SignUp</Banner>
                    {/* <img src={bg} alt="bg_blur" className="absolute w-full h-full top-0 left-0 object-cover -z-10  "/> */}

                <div className="w-full flex-box flex-col  ">
                    <Form
                        method="post"
                        className="flex-box flex-col gap-10 w-full py-[2em] h-full"
                        autoComplete="off"
                    >
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                            className="w-3/4 lg:text-xl px-[0.8em] py-[0.5em] bg-orange-50 dark:bg-[#3b3b3b3d] focus:outline-none rounded-xl"
                            placeholder="Name"
                        />
                        <input
                            type="text"
                            name="password"
                            value={age}
                            onChange={(e)=>{setAge(e.target.value)}}
                            className="w-3/4 lg:text-xl px-[0.8em] py-[0.5em] bg-orange-50 dark:bg-[#3b3b3b3d] focus:outline-none rounded-xl"
                            placeholder="age"
                        />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            className="w-3/4 lg:text-xl px-[0.8em] py-[0.5em] bg-orange-50 dark:bg-[#3b3b3b3d] focus:outline-none rounded-xl"
                            placeholder="email"
                        />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className="w-3/4 lg:text-xl px-[0.8em] py-[0.5em] bg-orange-50 dark:bg-[#3b3b3b3d] focus:outline-none rounded-xl"
                            placeholder="password"
                        />
                        
                        <button
                            type="submit"
                            onClick={handleSignUp}
                            className="lg:text-xl px-[0.7em] py-[0.5em] text-white bg-orange-400  dark:bg-orange-500 hover:bg-orange-500  dark:hover:bg-orange-600 duration-200 rounded-xl"
                        >
                            Submit
                        </button>
                        <LoginRedirect to={"/login"} redirectText={"Login"}>Not a User?</LoginRedirect>
                    </Form>
                </div>
            </div>
    );
};

export default SignUp;
