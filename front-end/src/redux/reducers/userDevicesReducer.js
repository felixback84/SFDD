import {
    LOADING_USER_DEVICES, 
    GET_USER_DEVICES,
    GET_USER_DEVICE
} from '../types';


// initial state
const initialState = {
    loading: false,
    userDevices:[],
    userDevice:{}
}

// function to determine the type of action to set state
export default function(state = initialState, action){
    switch(action.type){
        case LOADING_USER_DEVICES:
            return{
                ...state,
                loading: true
            }
        case GET_USER_DEVICES:
            return {
                ...state,
                loading: false, 
                userDevices: action.payload
            }
        case GET_USER_DEVICE:
            return {
                ...state,
                loading: false, 
                userDevice: action.payload
                
            }
        default:
            return state; 
    }    
}    