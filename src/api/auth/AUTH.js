import axios from "axios";
import { axiosInstance } from "../axiosConfig";

export const login = async(postData)=>{
    try{

        const {data,status} = await axios.post('http://localhost:8080/api/v1/user/login',
            postData
            ,{
                headers:{
                    "Content-Type": "application/json"
                }
            },
        )
        if(status == 200){
            return data
        }
    }
    catch(e){
        return null;
    }
}   

export const authLogin = async(token)=>{

    try{
        const {data,status} = await axios.post('http://localhost:8080/api/v1/user/authlogin',null,
            {
                headers:{
                    "Authorization": `Bearer ${token}`
                }
            },
        )
        if(status == 200){
            return data
        }
        return null;

    }
    catch(e){
        return null;
    }
}   

export const adminLogin = async(userData,token)=>{
    
    try{

        const {data,status} = await axiosInstance.post('/user/adminlogin',userData,{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        })
        if(status == 200){
            if(data.isAdmin){
                return true
            }
            return false
        }
    }
    catch(e){
        console.log(e);
        return null
    }
}
export const signIn = async(userData)=>{

    const {data,status} = await axios.post("http://localhost:8080/api/v1/user/signin", userData, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    console.log(data);
    if(status == 200){
        return data
    }
    return null;
}   