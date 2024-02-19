export const NOTES = {
    UPDATE_NOTE_DATA:'UPDATE_NOTE_DATA',
    UPDATE_NOTE_COMMENTS:'UPDATE_NOTE_COMMENTS',
    UPDATE_NOTE_CONTENT:'UPDATE_NOTE_CONTENT',
    SET_INITIAL_STATE:'SET_INITIAL_STATE',
    NO_RECORD_FOUND:'NO_RECORD_FOUND'
} 

export const noteInitialState = {
    userInfo:null,
    noteData:null,
    images:[],
    comments:[]
}

export const noteDataReducer = (prevState  ,action)=>{
    
    switch(action.type){

        case NOTES.UPDATE_NOTE_DATA:
            return {...prevState,...action.payload}

        case NOTES.UPDATE_NOTE_CONTENT:
            return {...prevState,noteData:{...prevState.noteData,...action.payload}}

        case NOTES.UPDATE_NOTE_COMMENTS:
            return {...prevState,comments:[...prevState.comments,action.payload]}        
        case NOTES.NO_RECORD_FOUND:
            return {...prevState,noteData:null}
            
        case NOTES.SET_INITIAL_STATE:
            return noteInitialState;
        
        default:
            console.log("Invalid");
            break;
    }
}