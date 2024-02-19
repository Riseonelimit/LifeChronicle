import React, { useContext, useEffect, useRef } from "react";


import { MemoryCardsRender } from "../components/[note_page]/MemoryCards";
import { Link,useNavigate} from "react-router-dom";
import { useUser } from "../hooks/customHook";
import { startChallenge } from "../api/PATCH";

import NoteContent from "../components/[note_page]/NoteContent";
import ProtectedRoute from "../components/ProtectedRoute";

const UserNotes = () => {
    const user = useUser();
    const navigate = useNavigate();

    const handleClick = async () => {
        if (user.email == null) {
            return navigate("/login", { replace: true });
        }

        user.is_challenge_started = true;

        const day_timer = new Date().valueOf() + 86400000;

        const userData = {
            day_timer: day_timer,
            email: user.email,
        };
        const res = await startChallenge(
            userData,
            localStorage.getItem("token")
        );

        if (res) {
            console.log(res);
            user.day_timer = day_timer;
            navigate("/addNote");
        } else {
            navigate("/login", { replace: true });
        }
    };

    return (
        <ProtectedRoute>
            <section className="relative w-full flex flex-col p-5 items-center gap-5 h-[90vh]">
                <div className=" grid grid-cols-8 overflow-hidden h-full w-full">
                    {
                        //CHECKING IF THE USER HAS STARTED CHALLENGE AND HAS AT LEAST 1 DAY
                        user.is_challenge_started && user.completed_days > 0 ? (
                            <>
                                <div className=" col-span-2 flex-box justify-start flex-col gap-5 h-full overflow-hidden ">
                                    <h1 className="text-4xl inter font-[600]  bg-gradient-to-tl dark:from-yellow-400 dark:to-orange-400  from-yellow-400 to-orange-400  text-transparent bg-clip-text">
                                        Your Memories
                                    </h1>
                                    <div className=" h-[95%] py-5 w-full flex-box flex-col items-center justify-start overflow-auto no-scrollbar ">
                                        <MemoryCardsRender
                                            url={"/notes/"}
                                            dayLimit={user.current_day}
                                        />
                                    </div>
                                </div>

                                <NoteContent />
                            </>
                        ) : user.completed_days == 0 &&
                        user.is_challenge_started ? (
                            <div className=" col-span-8 w-full flex-box flex-col gap-10 ">
                                <h1 className="text-4xl inter font-[600]  bg-gradient-to-tl dark:from-yellow-400 dark:to-orange-400  from-yellow-400 to-orange-400  text-transparent bg-clip-text">
                                    Complete Your Day
                                </h1>

                                <Link
                                    to={"/addnote"}
                                    className="bg-orange-300 p-3 rounded-2xl text-md font-semibold"
                                >
                                    Write About Day {user.current_day}
                                </Link>
                            </div>
                        ) : (
                            <div className=" col-span-8 w-full flex-box flex-col gap-10 ">
                                <h1 className="text-4xl inter font-[600]  bg-gradient-to-tl dark:from-yellow-400 dark:to-orange-400  from-yellow-400 to-orange-400  text-transparent bg-clip-text">
                                    You have not Started Your Challenge Yet!!
                                </h1>

                                <button
                                    onClick={handleClick}
                                    className="bg-orange-300 p-3 rounded-2xl text-md font-semibold"
                                >
                                    Start Challenge
                                </button>
                            </div>
                        )
                    }
                </div>
            </section>
        </ProtectedRoute>
    );
};

export default UserNotes;
