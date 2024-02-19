import { setNewDay } from "../api/PATCH";

export const checkDayExpiry = async (userDayTimer,userData,token)=>{

    const currentTime = new Date().valueOf()

    if(userData.day_timer < currentTime && userData.completed_days == userData.current_day){
      userData.completed_days--
    }
    while( userData.day_timer < currentTime){
      userData.day_timer = userData.day_timer + 86400000
      userData.current_day = ++userData.current_day
      userData.completed_days = ++userData.completed_days
    }

    await setNewDay({
      day_timer:userData.day_timer,
      current_day:userData.current_day,
      completed_days:userData.completed_days,
      email:userData.email,
    },token)
} 


export const getToken = (tokenName)=>{
  return localStorage.getItem(tokenName);
}