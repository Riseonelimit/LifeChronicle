import React, { Children, createContext, useReducer, useState } from "react";
import { initialState as userInitialState, reducer as userReducer} from "../reducer/userReducer";
import { useNavigate } from "react-router-dom";
import { noteDataReducer, noteInitialState } from "../reducer/noteDataReducer";

export const Data = createContext();

const DataContext = (props) => {

    const [theme, setTheme] = useState("light")
    const [user,userDispatch] = useReducer(userReducer,userInitialState)
    const [noteData,noteDataDispatch] = useReducer(noteDataReducer,noteInitialState)

    const [loading,setLoading] = useState(false);

    return (
        <Data.Provider value={{
            THEME:theme,
            SET_THEME:setTheme,
            USER:user,
            USER_DISPATCHER:userDispatch,
            NOTE_DATA:noteData,
            NOTE_DATA_DISPATCHER:noteDataDispatch,
            STATUS:loading,
            SET_STATUS:setLoading,
        }}
        
        >
            {props.children}
        </Data.Provider>);
};

export default DataContext;
