import React, { Suspense, useEffect, useState } from "react";
import { MemoryCardsRender } from "../components/[note_page]/MemoryCards";
import bg2 from "../assets/NoteBlur.svg";

import { useLoading, useNoteData, useNoteDataDispatch, useUser } from "../hooks/customHook";
import NoteContent from "../components/[note_page]/NoteContent";
import { useParams } from "react-router-dom";
import { fetchUserNotedata, getCommentsByNoteID, getUserNoteDataByDay } from "../api/GET";
import NotePageSidebar from "../components/[note_page]/NotePageSidebar";
import { NOTES } from "../reducer/noteDataReducer";

const NotePage = () => {

    // console.log("re-render");

    
    const { userslug ,day} = useParams();

    const noteDataDispatch = useNoteDataDispatch();

    const [loading, setLoading] = useLoading(true);


    // TODO: Make a api req -> fetch all the day_no from the DB
    //* DB -> check the day-complete bool value and make the query

    useEffect(() => {
        setLoading(true);
        const getNoteUserData = async (userslug) => {
            const res = await fetchUserNotedata(userslug);

            if (res) {
                noteDataDispatch({type:NOTES.UPDATE_NOTE_DATA,payload:{userInfo:res}})
            }
            setLoading(false);
        };
        getNoteUserData(userslug);
    }, [userslug]);
    if(loading){

        return (
            <section className="grid relative grid-cols-8 w-full h-[90vh] flex-col p-5">
            <div>Loading...</div>
            <img
                src={bg2}
                alt=""
                className="absolute w-full h-full top-0 right-0  object-cover select-none  "
                draggable="false"
            />
        </section>
        )
    }

    return (
        <section className="grid relative grid-cols-8 w-full h-[90vh] flex-col p-5">
            <NotePageSidebar/>
            <NoteContent  />

            <img
                src={bg2}
                alt=""
                className="absolute w-full h-full top-0 right-0  object-cover select-none  "
                draggable="false"
            />
        </section>
    );
};

export default NotePage;
