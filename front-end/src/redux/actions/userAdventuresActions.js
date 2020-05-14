// user actions
import {
    LOADING_UI,
    STOP_LOADING_UI,
    LOADING_USER_ADVENTURES,
    GET_USER_ADVENTURES,
    GET_USER_ADVENTURE 
} from '../types';

// axios
import axios from 'axios';

// redux action to get one specific userDevice
export const getUserAdventures = () => (dispatch) => {
    dispatch({ type: LOADING_UI });
    dispatch({ type: LOADING_USER_ADVENTURES });
    axios
        .get(`/useradventures`)
        .then((res) => { 
            dispatch({
                type: GET_USER_ADVENTURES,
                payload: res.data
            });
            //dispatch({ type: STOP_LOADING_USER_DEVICES});
            dispatch({ type: STOP_LOADING_UI });
        })
        .catch((err) => console.log(err));
}