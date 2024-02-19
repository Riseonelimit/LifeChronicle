import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

import { useUser } from "../hooks/customHook";
import SmallTitle from "../components/texts/SmallTitle";
import UserProfileInfo from "../components/layout/UserProfileInfo";
import RemainingTime from "../components/RemainingTime";

import { MdOutlineNoAccounts } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { FaHourglassEnd } from "react-icons/fa";
const UserProfile = () => {
    const user = useUser();

    const ProfileRef = useRef();
    const ChallengeRef = useRef();
    const SecurityRef = useRef();
    const DangerZoneRef = useRef();
    return (
        <section className="w-full flex-box flex-col  gap-5 h-[90vh] ">
            <div className=" w-3/4 h-[90%] grid grid-cols-5  bg-[#ffffff7b] dark:bg-[#1513139f] backdrop-blur-md rounded-2xl">
                <div className=" col-span-1 w-full h-full flex-container justify-start p-5 border-r-1 bg-[#f8300852] dark:bg-[#25252571] rounded-2xl border-stone-600 dark:border-stone-800 text-orange-900 dark:text-orange-200 ">
                    <button
                        onClick={() =>
                            ProfileRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className=" w-full p-3  text-center rounded-xl hover:bg-orange-900 duration-200 text-lg  dark:text-orange-200 focus:bg-orange-900 focus:text-orange-300  hover:text-orange-300 "
                    >
                        Profile
                    </button>
                    <button
                        onClick={() =>
                            ChallengeRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className=" w-full p-3  text-center rounded-xl hover:bg-orange-900 focus:bg-orange-900 focus:text-orange-300 hover:text-orange-300 duration-200 text-lg"
                    >
                        Challenge
                    </button>
                    <button
                        onClick={() =>
                            SecurityRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className=" w-full p-3  text-center rounded-xl hover:bg-orange-900 focus:bg-orange-900 focus:text-orange-300 hover:text-orange-300 duration-200 text-lg"
                    >
                        Security
                    </button>
                    <button
                        onClick={() =>
                            DangerZoneRef.current.scrollIntoView({
                                behavior: "smooth",
                            })
                        }
                        className=" w-full p-3  text-center rounded-xl  text-red-600 dark:text-red-500 hover:bg-red-800 dark:hover:text-red-200 hover:text-red-200 focus:bg-red-900 focus:text-red-200 duration-200 text-lg"
                    >
                        Danger Zone
                    </button>
                </div>
                <div className="col-span-4 w-full h-full flex-container overflow-y-auto no-scrollbar gap-10 justify-start p-10">
                    <div
                        ref={ProfileRef}
                        className=" w-full flex-container relative items-start gap-10"
                    >
                        <div className="  flex-box flex-col gap-1  items-start  ">
                            <h1 className=" text-5xl text-orange-400 font-semibold ">
                                Profile
                            </h1>
                            <p className=" text-zinc-800 dark:text-zinc-400">
                                Manage Your Profile
                            </p>
                        </div>
                        <hr className=" w-full border-stone-600" />
                        <SmallTitle text={"ProfileImage"} />
                        <UserProfileInfo className="flex-container gap-3 items-start">
                            <div className=" w-[5rem] h-[5rem] overflow-hidden ml-[3rem]">
                                <img
                                    src={`data:image/svg+xml;base64,${user.profile_img}`}
                                    alt="user_img"
                                    className=" w-full h-full object-cover"
                                />
                            </div>
                        </UserProfileInfo>

                        <hr className=" w-full border-stone-600" />
                        <SmallTitle text={"Username"} />
                        <UserProfileInfo className="flex-container gap-3 items-start ml-[3rem]">
                            <div className=" flex-box flex-col gap-4 items-start group ">
                                <h1 className=" text-3xl font-semibold dark:text-orange-200 ">
                                    {user.username}
                                </h1>
                                <button className=" p-2 flex-box gap-1 bg-orange-900  group-hover:visible  text-orange-200 text-[0.7rem]  rounded-lg">
                                    <GoPencil size={15} />
                                    Change Username
                                </button>
                            </div>
                        </UserProfileInfo>

                        <hr className=" w-full border-stone-600" />
                        <SmallTitle text={"Email"} />
                        <UserProfileInfo>
                            <h1 className=" text-3xl font-semibold dark:text-orange-200 ">
                                {user.email}
                            </h1>
                        </UserProfileInfo>
                    </div>
                    <hr className=" w-full border-stone-600" />
                    <div
                        ref={ChallengeRef}
                        className=" w-full flex-container items-start gap-10"
                    >
                        <div className=" flex-box flex-col gap-1 items-start">
                            <h1 className=" text-5xl text-orange-400 font-semibold ">
                                Challenge
                            </h1>
                            <p className=" text-zinc-800 dark:text-zinc-400">
                                Your Challenge Progress
                            </p>
                        </div>
                        <hr className=" w-full border-stone-600" />
                        <SmallTitle text={"Current Day"} />
                        <UserProfileInfo>
                            <h1 className=" text-3xl font-semibold dark:text-orange-200 ">
                                {user.current_day}
                            </h1>
                        </UserProfileInfo>

                        <hr className=" w-full border-stone-600" />
                        <SmallTitle text={"Completed Days"} />
                        <UserProfileInfo>
                            <h1 className=" text-3xl font-semibold dark:text-orange-200 ">
                                {user.completed_days}
                            </h1>
                        </UserProfileInfo>

                        <hr className=" w-full border-stone-600" />
                        <SmallTitle text={"Next Day In"} />
                        <UserProfileInfo>
                            <h1 className=" text-3xl font-semibold dark:text-orange-200 ">
                                <RemainingTime />
                            </h1>
                        </UserProfileInfo>
                    </div>

                    <hr className=" w-full border-stone-600" />
                    <div
                        ref={SecurityRef}
                        className=" w-full flex-container items-start gap-10"
                    >
                        <div className=" flex-box flex-col gap-1 items-start">
                            <h1 className=" text-5xl text-orange-400 font-semibold ">
                                Security
                            </h1>
                            <p className=" text-zinc-800 dark:text-zinc-400">
                                Manage your security preferences
                            </p>
                        </div>

                        <hr className=" w-full border-stone-600" />
                        <SmallTitle text={"Password"} />
                        <UserProfileInfo>
                            <h1 className=" text-3xl font-semibold dark:text-orange-200 ">
                                {""}
                            </h1>
                            <button className=" p-2 flex-box gap-1 bg-orange-900  group-hover:visible  text-orange-200 text-[0.7rem]  rounded-lg">
                                <GoPencil size={15} />
                                Reset Password
                            </button>
                        </UserProfileInfo>

                        <hr className=" w-full border-stone-600" />
                    </div>

                    <div
                        ref={DangerZoneRef}
                        className=" w-full flex-container items-start gap-10 "
                    >
                        <div className=" flex-box flex-col gap-1 items-start">
                            <h1 className=" text-5xl text-red-700 font-semibold ">
                                Danger Zone
                            </h1>
                            <p className=" text-zinc-800 dark:text-zinc-400">
                                Action that can be dangerous
                            </p>
                        </div>

                        <hr className=" w-full border-red-600" />
                        <UserProfileInfo>
                            <h1 className=" text-lg  dark:text-red-200 ">
                                {"Stop the Challenge"}
                            </h1>
                            <button className=" p-2 flex-box gap-1 bg-red-800  group-hover:visible  text-red-200 text-[1rem]  rounded-lg">
                                <FaHourglassEnd size={20} />
                                Stop Challenge
                            </button>
                            <h1 className=" text-lg  dark:text-red-200 ">
                                {"Once its gone its gone"}
                            </h1>
                            <button className=" p-2 flex-box gap-1 bg-red-800  group-hover:visible  text-red-200 text-[1rem]  rounded-lg">
                                <MdOutlineNoAccounts size={25} />
                                Delete Account
                            </button>
                        </UserProfileInfo>

                        <hr className=" w-full border-red-600" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;
