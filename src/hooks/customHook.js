import { useContext, useState } from "react";
import { Data } from "../context/DataContext";

// DATA-CONTEXT
const userContext = () => {
    return useContext(Data)
}

// USER-DISPATCHER
export const useUserDispatch = ()=>{
    return userContext().USER_DISPATCHER;
}

// USER-DATA CONTEXT
export const useUser = ()=>{
    return userContext().USER;
}
export const useSetLoading = ()=>{
    return userContext().SET_LOADING;
}

// LOADING-STATE
export const useLoading = (initialState)=>{
    const [loading,setLoading] = useState(initialState);

    return [loading,setLoading]
}

// NOTE-DATA
export const useNoteData = ()=>{
    return useContext(Data).NOTE_DATA
}

// NOTE-DATA-DISPATCHER
export const useNoteDataDispatch = ()=>{
    return useContext(Data).NOTE_DATA_DISPATCHER
}

