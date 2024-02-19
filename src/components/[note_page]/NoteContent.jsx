import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    useLoading,
    useNoteData,
    useNoteDataDispatch,
    useUser,
} from "../../hooks/customHook";

import { getUserNoteDataByDay } from "../../api/GET";

import { NOTES } from "../../reducer/noteDataReducer";

import Comments from "./Comments";
import Note from "./Note";

import notDone from "/src/assets/not_done.svg";

const NoteContent = () => {
    const { userslug, day } = useParams();

    const noteDataDispatch = useNoteDataDispatch();
    const [loading, setLoading] = useLoading(true);
    const noteData = useNoteData();
    const user = useUser();

    useEffect(() => {
        setLoading(true);
        async function getNoteData() {
            const userData = {
                day_no: day,
                slug: userslug ? userslug : user.slug,
            };

            const res = await getUserNoteDataByDay(
                userData,
                localStorage.getItem("token")
            );

            if (res != null) {
                noteDataDispatch({
                    type: NOTES.UPDATE_NOTE_DATA,
                    payload: res,
                });
            } else {
                noteDataDispatch({ type: NOTES.NO_RECORD_FOUND });
            }
            setLoading(false);
        }

        getNoteData();

        return () => {
            setLoading(false);
        };
    }, [day]);

    if (loading) {
        return <Loading />;
    }
    return (
        <div className="h-full self-start w-full col-span-6 p-3 z-10 overflow-hidden ">
            {!day || noteData.noteData == null ? (
                <div className="w-full h-full flex-box relative gap-5 p-10 dark:bg-[#15131390] bg-[#ffffff2a] drop-shadow-md backdrop-blur-md rounded-[25px]">
                    {noteData.noteData == null || false ? (
                        <div className=" flex-box gap-3 flex-col">
                            <img
                                src={notDone}
                                alt="Image"
                                className=" w-[15rem] object-cover"
                            ></img>
                            <h1
                                className="  text-5xl font-semibold bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-orange-300 via-rose-500 to-orange-500 dark:from-orange-400 dark:via-red-300 dark:to-rose-500 text-transparent 
                            bg-clip-text"
                            >
                                {noteData?.userInfo?.name} was unable complete
                                Day {day}
                            </h1>
                        </div>
                    ) : (
                        <h1
                            className="  text-6xl font-semibold bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-orange-300 via-red-400 to-yellow-500 text-transparent 
                        bg-clip-text"
                        >
                            Select a Day
                        </h1>
                    )}
                </div>
            ) : (
                <div className="w-full h-full grid md:grid-cols-6 lg:grid-cols-4 relative gap-5 p-10 dark:bg-[#15131390] bg-[#ffffff2a] drop-shadow-md backdrop-blur-md rounded-[25px]  ">
                    <div className=" md:col-span-2 lg:col-span-1 flex items-center justify-start overflow-hidden  flex-col gap-5 h-full w-full">
                        <h1 className=" text-md md:text-4xl lg:text-8xl leading-tight font-[300] inter self-start  bg-gradient-to-tl dark:from-red-800 dark:to-rose-500  from-orange-400 to-rose-500 text-transparent bg-clip-text  ">
                            Day <br /> {day}
                        </h1>

                        <div className="flex flex-col gap-5 w-full h-full overflow-hidden mt-6">
                            <div className="flex-box self-start gap-3  ">
                                <hr className=" md:w-[15px] lg:w-[32px] md:h-[3px] lg:h-1 group-hover:w-[70%]  duration-500 drop-shadow-md outline-none  rounded-[20px] border-none  bg-gradient-to-r from-orange-400 to-orange-600" />
                                <h1 className=" md:text-md lg:text-2xl inter font-[600] bg-gradient-to-tl dark:from-red-600 dark:to-orange-400  from-yellow-400 to-orange-400  text-transparent bg-clip-text drop-shadow-sm">
                                    Comments
                                </h1>
                            </div>
                            <div className="flex flex-col gap-5 w-full mt-6  h-full overflow-y-scroll no-scrollbar">
                                <Comments />
                                {noteData["comments"] != null
                                    ? noteData["comments"]
                                          .filter((e) => e.isPositive != 0)
                                          .map((commentData) => {
                                              return (
                                                  <Comments
                                                      key={
                                                          commentData.comment_id
                                                      }
                                                      commentData={commentData}
                                                  />
                                              );
                                          })
                                    : null}
                            </div>
                        </div>
                    </div>

                    <div className=" md:col-span-4 lg:col-span-3 overflow-hidden flex flex-col gap-5 p-5  ">
                        <Note noteData={noteData["noteData"]} />
                    </div>
                </div>
            )}
        </div>
    );
};

export const Loading = () => {
    return (
        <div className="h-full self-start w-full col-span-6 p-3 z-10 overflow-hidden ">
            <div className="w-full h-full flex-box relative gap-5 p-10 dark:bg-[#15131390] bg-[#ffffff2a] drop-shadow-md backdrop-blur-md rounded-[25px]">
                <div class=" w-full h-full grid grid-cols-3 opacity-25 grid-rows-6 gap-3 flex-col animate-pulse">
                    <div class=" w-full row-span-2 col-span-1 bg-gray-50/60 dark:bg-zinc-900 rounded"></div>
                    <div class=" w-full row-span-1 col-span-2 bg-gray-50/60 dark:bg-zinc-900 rounded"></div>
                    <div class=" w-full row-span-1 col-span-2 bg-gray-50/60 dark:bg-zinc-900 rounded"></div>
                    <div class=" w-full row-span-4 col-span-1  bg-gray-50/60 dark:bg-zinc-900 rounded"></div>
                    <div class=" w-full row-span-4 col-span-2  bg-gray-50/60 dark:bg-zinc-900 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default NoteContent;
