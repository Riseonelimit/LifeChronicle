import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { BiLogOut, BiSun, BiMoon } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { PiNotepad } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { Data } from "../../context/DataContext";
import { USER } from "../../reducer/userReducer";

const Navbar = () => {
    const [theme, setTheme] = useState("light");

    const [isExtended, setIsExtended] = useState(false);

    const context = useContext(Data);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (theme == "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [theme]);

    const themeSwitch = () => {
        setTheme(theme == "dark" ? "light" : "dark");
    };

    const handleLogOut = () => {
        localStorage.removeItem("token");
        context.USER_DISPATCHER({ type: USER.LOGGED_OUT });
        navigate("/", { replace: true });
    };

    return (
        <nav
            className={`w-full h-[10vh] flex-box justify-between gap-5 px-3 lg:px-10 backdrop-blur-sm z-30 ${
                pathname == "/" ? "text-white" : ""
            }`}
        >
            <div className="flex-box gap-4">
                <h1 className="lg:text-2xl  font-[500]">
                    Life
                    <span className=" text-orange-500 font-[600] ">
                        Chronicle
                    </span>
                </h1>
                <ul className="flex-box gap-16 ml-[5rem] hidden lg:flex ">
                    <li>
                        <NavLink
                            to={"/"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-red-400 to-orange-400 text-white font-medium py-2 px-3 rounded-[10px] duration-500 "
                                    : " py-2 px-3 rounded-[10px] duration-500 "
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/explore"}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-red-400 to-orange-400 text-white py-2 px-3 rounded-[10px] duration-500 "
                                    : "" +
                                      " py-2 px-3 rounded-[10px] duration-500 "
                            }
                        >
                            Explore
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="flex-box  lg:gap-4">
                {!context.USER.isAuth ? (
                    <div className="flex-box gap-2 lg:gap-5">
                        <button
                            className=" p-2 bg-orange-200 dark:bg-orange-500 group rounded-full"
                            onClick={themeSwitch}
                        >
                            {theme == "light" ? (
                                <BiMoon className=" lg:text-2xl group-hover:rotate-45 duration-300" />
                            ) : (
                                <BiSun className=" lg:text-2xl  group-hover:rotate-45 duration-300 " />
                            )}
                        </button>
                        <Link
                            to={"/login"}
                            className=" backdrop-blur-lg hover:bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  hover:from-red-400 hover:to-orange-400 hover:text-white  text-xs md:text-base lg:text-base lg:font-medium py-2 px-2 rounded-[10px] duration-200"
                        >
                            Login
                        </Link>
                        <Link
                            to={"/signup"}
                            className="backdrop-blur-lg hover:bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  hover:from-yellow-400 hover:to-orange-400  hover:text-white text-xs md:text-base lg:text-base lg:font-medium py-2 px-2 rounded-[10px] duration-200"
                        >
                            Sign Up
                        </Link>
                    </div>
                ) : (
                    <div className="flex-box gap-5 ">
                        <button onClick={themeSwitch}>
                            {theme == "light" ? (
                                <BiMoon className=" text-3xl " />
                            ) : (
                                <BiSun className=" text-3xl   " />
                            )}
                        </button>
                        <div className=" w-full group flex-box gap-3 relative">
                            {context.USER.profile_img ? (
                                <div className="w-[1.5rem] lg:w-[3rem] overflow-hidden">
                                    <img
                                        src={`data:image/svg+xml;base64,${context.USER.profile_img}`}
                                        alt=""
                                        className=" w-full h-full object-cover"
                                    />
                                </div>
                            ) : null}

                            <h1 className=" lg:text-2xl  font-semibold ">
                                {context.USER.email
                                    ? context.USER.username
                                    : null}
                            </h1>
                            <div className="absolute top-14 lg:block  lg:group-hover:visible opacity-0 group-hover:opacity-100  invisible duration-300 bg-[#fffefebd] dark:bg-[#171717ee] shadow-[rgba(0,_0,_0,_0.2)_0px_10px_20px_-7px] rounded-2xl ">
                                <ul className="w-full h-full flex-box flex-col justify-evenly text-black dark:text-white gap-3 py-3 px-2">
                                    <li className=" w-full flex-box justify-start hover:bg-stone-200 hover:text-sky-400 dark:hover:bg-zinc-800  duration-300 rounded-2xl px-3 py-1">
                                        <CgProfile className="text-2xl" />
                                        <Link
                                            to={"/profile"}
                                            className="px-3 py-2 text-md font-medium text-start"
                                        >
                                            Profile
                                        </Link>
                                    </li>
                                    <li className=" w-full flex-box justify-start hover:bg-stone-200 hover:text-orange-400 dark:hover:bg-zinc-800  duration-300 rounded-2xl px-3 py-1">
                                        <PiNotepad className="text-2xl " />
                                        <Link
                                            to={"/notes/1"}
                                            className=" px-3 py-2 text-md font-medium text-start"
                                        >
                                            Notes
                                        </Link>
                                    </li>
                                    {context.USER.is_challenge_started ? (
                                        <li className=" w-full flex-box justify-start  hover:bg-stone-200 hover:text-green-500 dark:hover:bg-zinc-800  duration-300 rounded-2xl px-3 py-1">
                                            <TbTargetArrow className="text-2xl" />
                                            <Link
                                                to={"/addnote"}
                                                className=" px-3 py-2 text-md font-medium text-start"
                                            >
                                                Day {context.USER.current_day}
                                            </Link>
                                        </li>
                                    ) : null}

                                    <li className="w-full flex-box justify-start  hover:bg-red-500 hover:text-white  dark:hover:bg-red-800  duration-300 rounded-2xl px-3 py-1">
                                        <BiLogOut className="text-2xl" />
                                        <button
                                            onClick={handleLogOut}
                                            className="px-3 py-2 text-md font-medium text-start"
                                        >
                                            SignOut
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex-col flex flex-box lg:hidden text-black dark:text-white  overflow-hidden p-3">
                    {isExtended == true ? (
                        <>
                            <RxCross2
                                className="text-2xl "
                                onClick={() => setIsExtended(false)}
                            />
                            <div className="absolute top-20 right-10  opacity-100  duration-300  w-[10rem]  bg-[#fffefebd] dark:bg-[#171717ee] shadow-[rgba(0,_0,_0,_0.2)_0px_10px_20px_-7px] rounded-2xl ">
                                <ul className="w-full h-full flex-box flex-col justify-evenly  gap-3 py-3 px-2">
                                    <li className=" w-full flex-box justify-center hover:bg-stone-200 hover:text-sky-400 dark:hover:bg-zinc-800  duration-300 rounded-2xl px-3 py-1">
                                        <Link
                                            to={"/"}
                                            onClick={() => setIsExtended(false)}
                                            className="px-3 py-2 text-md font-medium text-center"
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className=" w-full flex-box justify-center  hover:bg-stone-200 hover:text-green-500 dark:hover:bg-zinc-800  duration-300 rounded-2xl px-3 py-1">
                                        <Link
                                            to={"/explore"}
                                            onClick={() => setIsExtended(false)}
                                            className=" px-3 py-2 text-md font-medium text-center"
                                        >
                                            Explore
                                        </Link>
                                    </li>
                                    <li className=" w-full flex-box justify-center hover:bg-red-500 hover:text-white  dark:hover:bg-red-800   duration-300 rounded-2xl px-3 py-1">
                                        <button
                                            onClick={handleLogOut}
                                            className="px-3 py-2 text-md font-medium text-start"
                                        >
                                            SignOut
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </>
                    ) : (
                        <RxHamburgerMenu
                            className="text-2xl "
                            onClick={() => setIsExtended(true)}
                        />
                    )}
                </div>
            </div>
        </nav>
    );
};

export default React.memo(Navbar);
