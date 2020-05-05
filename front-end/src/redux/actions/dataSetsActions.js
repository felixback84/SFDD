// user actions
import {
    LOADING_UI,
    STOP_LOADING_UI,
    LOADING_DATASETS,
    POST_DATASET,
    GET_DATASETS,
    GET_DATASET
} from '../types';

// axios
import axios from 'axios';

export const getAllDataSetsUserDevice = (userDeviceId) => (dispatch) => {
    dispatch({ type: LOADING_UI });
    dispatch({ type: LOADING_DATASETS });
    axios
        .get(`/user/device/${userDeviceId}/datasets`)
        .then((res) => { 
            dispatch({
                type: GET_DATASETS,
                payload: res.data
            });
            dispatch({ type: STOP_LOADING_UI });
        })
        .catch((err) => console.log(err));
}
