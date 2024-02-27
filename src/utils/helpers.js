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


export const validateFormInput = (email,password,age)=>{

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const passwordRegex = /^(?=[^\\/`]*[0-9])(?=[^\\/`]*[a-z])(?=[^\\/`]*[A-Z])(?=[^\\/`]*[a-zA-Z])[^\\/`]{8,}$/g;

  if([email,password,+age].some(e=> e == undefined || e == null || e == "")){
    return {isValid:false,message:"Fields must not be empty"} 
  }
  
  if(!emailRegex.test(email)){
    return {isValid:false,message:"Incorrect Email format"} 
  }
  if(!passwordRegex.test(password)){
    return {isValid:false,message:"Incorrect Password format"} 
  }
  if(age < 0 || age > 120){
    return {isValid:false,message:"Invalid Age"} 
  }
  
  return {isValid:true,message:""} 
  
}