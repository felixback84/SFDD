// devices actions
import {
    LOADING_UI,
    STOP_LOADING_UI,
    LOADING_DEVICES, 
    GET_DEVICES, 
    GET_DEVICE, 
    GET_LIKE_DEVICES, 
    GET_UNLIKE_DEVICES, 
    POST_DEVICE_COMMENT 
} from '../types';

// axios
import axios from 'axios';

// redux action to get all devices in the store
export const getDevices = () => (dispatch) => {
    dispatch({ type: LOADING_UI });
    dispatch({ type: LOADING_DEVICES });
    axios
        .get(`/devices`)
        .then((res) => { 
            dispatch({
                type: GET_DEVICES,
                payload: res.data
            });
            //dispatch({ type: STOP_LOADING_USER_DEVICES});
            dispatch({ type: STOP_LOADING_UI });
        })
        .catch((err) => console.log(err));
}