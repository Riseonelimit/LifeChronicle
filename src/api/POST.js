import { axiosInstance } from './axiosConfig';


export const addNote = async (noteData,token)=>{

    const {data,status} = await axiosInstance.post('/note/addnote',noteData,{
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })
    if(status == 200){
        return data.data
    }
    return null;
}


export const addComment = async (commentData,token)=>{

    const {status} = await axiosInstance.post('/note/addcomment',commentData,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
    if(status == 200){
        return true
    }
    return false
}