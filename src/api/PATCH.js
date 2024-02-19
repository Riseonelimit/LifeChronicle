import {axiosInstance} from "./axiosConfig"

export const updateLikeStatus = async(data,token)=>{

    const {status} = await axiosInstance.patch('/note/updatelikecount',{likes_count:data.likes_count,note_id:data.note_id},{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })

    if(data.isLike){
        const {status:status3} = await axiosInstance.delete('/note/likes',{
            headers:{
                "Authorization":`Bearer ${token}`
            },
            params:{note_id:data.note_id,user_email:data.user_email}
        })
    }
    else{
        const {status:status2} = await axiosInstance.post('/note/likes',{note_id:data.note_id,user_email:data.user_email},{
            headers:{
                "Authorization":`Bearer ${token}`
            }
        })
    }
    
    if(status == 200){
        return true
    }
    return false
}

export const startChallenge = async (userData,token)=>{

    const {status} = await axiosInstance.patch('/user/startchallenge',userData,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
    if(status == 200){
        return true
    }
    return false
}

export const setNewDay = async (userData,token)=>{

    const {data,status} = await axiosInstance.patch('/user/setnewday',userData,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    })
    if(status == 200){
        return data.data
    }
    return null
}
