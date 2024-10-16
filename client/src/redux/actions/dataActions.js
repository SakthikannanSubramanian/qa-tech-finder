import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export const fetchData = () => {
    return async dispatch => {
        dispatch(fetchDataRequest());
        try {
            const response = await axios.get('http://172.20.0.2:5001/api/v1/data');//'http://backend:5001/api/v1/data'
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
};
