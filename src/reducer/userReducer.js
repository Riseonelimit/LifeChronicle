
export const USER = {
    LOGGED_IN:'LOGGED_IN',
    LOGGED_OUT:'LOGGED_OUT',
    UPDATE_FIELD:'UPDATE_FIELD',
    SIGNUP:'SIGNUP',
    IS_AUTH:'IS_AUTH'
}
export const initialState = {
    name:null,
    email: null,
    username: null,
    age: null,
    slug: null,
    is_challenge_started:false,
    completed_days:null,
    current_day:null,
    profile_img:null,
    isAuth:false,
    day_timer:null
}

export const reducer = (prevState  ,action)=>{
    
    switch(action.type){

        case USER.LOGGED_IN:
            return {...prevState,...action.payload,isAuth:true}

        case USER.LOGGED_OUT:
            return {...initialState,isAuth:false}

        case USER.UPDATE_FIELD:
            return{...prevState,...action.payload}

        default:
            console.log("Invalid");
            break;
    }
}