import axios from "axios";
import { axiosInstance } from "./axiosConfig";

export const getUserNoteDataByDay = async (userData, token) => {
    try{

        const { data, status } = await axiosInstance.get(
            "/note/getusernotes",
            {
                signal:AbortSignal.timeout(6000),
                params: {userData: userData}
            }
        );
        if (status === 200 && data != null) {
            return data.data;
        }
        return null;
    }catch(e){
        return null
    }
};

export const getAllNotes = async (pageOffSet) => {
    const { data, status } = await axiosInstance.get(
        "/note/getallnotes",
        {
            params: {pageOffSet: pageOffSet}
        }
    );

    if (status === 200) {
        return data.data;
    }
    if(status === 400){
        return 
    }
    return null;
};

export const fetchUserNotedata = async (userslug) => {
    const { data, status } = await axiosInstance.get(
        "/note/getuserinfobynote",
        {
            params: { userslug: userslug }
        }
    );

    if (status === 200) {
        return data.data;
    }
    return null;
};
    
export const getCommentsByNoteID = async (note_id) => {
    try{
        // console.log("called req");
        const { data, status } = await axiosInstance.get(
            "/note/getcommentbyid",
            {
                params: { note_id: note_id },
            }
            );
            if (status == 200) {
                return data.data;
            }
            if(status == 404){
                return null;
            }
            return null;
    }
    catch(e){
        return null
    }
};
export const getCommentReviewData = async(token)=>{
    try{
        const { data:responseData, status } = await axiosInstance.get(
            "/note/getreviewcomments",
            {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            }
            );
            
            return responseData;
    }
    catch(e){
        console.log(e);
    }
}
export const checkIfLike = async (data) => {
    try{
        const { data:responseData, status } = await axiosInstance.get(
            "/note/likes",
            {
                params: { 
                    note_id: data.note_id,
                    user_email:data.user_email
                },
            }
            );
            return responseData.data;
    }
    catch(e){

    }
};

export const getNoteByTitle = async (data) => {
    try{
        const { data:responseData, status } = await axiosInstance.get(
            "/note/search",
            {
                params: { 
                    title: data,  
                },
            }
            );
            return responseData.data;
    }
    catch(e){

    }
};