import React, { useEffect, useState } from "react";
import {
    Form, useNavigate
} from "react-router-dom";

import { USER } from "../../reducer/userReducer";
import { useUser, useUserDispatch } from "../../hooks/customHook";
import { login } from "../../api/auth/AUTH";
import { checkDayExpiry } from "../../utils/helpers";
import LoginRedirect from "../utils/LoginRedirect";
import Banner from "../utils/Banner";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const userDispatch = useUserDispatch();
    const user = useUser();

    useEffect(() => {
        check();
    }, []);

    const check = () => {
        if (user.isAuth) {
            navigate(-1);
        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        const res = await login(data);
        console.log(res);

        if (res != null) {
            localStorage.setItem("token", res.token);

            await checkDayExpiry(res.user.day_timer, res.user, res.token);

            userDispatch({ type: USER.LOGGED_IN, payload: res.user });

            return navigate("/explore", { replace: true });
        } else {
            console.log("else");
            setEmail("");
            setPassword("");
            return navigate("/");
        }
    };
    return (
        <section className="h-[90vh] w-full flex-box  z-30">
            <div className=" w-[90%] lg:w-[30%] h-[60%] relative flex-box flex-col justify-start overflow-hidden self-start mt-[5em] bg-[#fffefe8d] dark:bg-[#1717178c] shadow-[rgba(0,_0,_0,_0.2)_0px_10px_20px_-7px] rounded-2xl ">
                
                <Banner>Login In</Banner>
                
                <Form
                    method="post"
                    className="flex-box  flex-col gap-10 w-full h-full"
                    autoComplete="off"
                >
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="w-3/4 lg:text-xl px-[0.8em] py-[0.5em] bg-gray-100 dark:bg-[#3b3b3b3d] focus:outline-none rounded-xl"
                        placeholder="email"
                    />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className="w-3/4 lg:text-xl px-[0.8em] py-[0.5em] bg-gray-100 dark:bg-[#3b3b3b3d] focus:outline-none rounded-xl"
                        placeholder="password"
                    />
                    <button
                        type="submit"
                        onClick={handleLogin}
                        className="lg:text-xl px-[0.7em] py-[0.5em] text-white bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-red-400 to-orange-400 hover:from-red-500 hover:to-orange-500  dark:hover:from-red-500 dark:hover:to-orange-600 duration-200 rounded-xl"
                    >
                        Submit
                    </button>
                    <LoginRedirect to={"/signup"} redirectText={"SignIn"}>
                        Not a User?
                    </LoginRedirect>
                </Form>
            </div>
        </section>
    );
};

export default Login;
