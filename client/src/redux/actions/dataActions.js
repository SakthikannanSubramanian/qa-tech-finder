import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_QUESTIONNAIRE_SUCESS = 'FETCH_QUESTIONNAIRE_SUCESS';
export const FETCH_QUESTIONNAIRE_FAILURE = 'FETCH_QUESTIONNAIRE_FAILURE';
export const SAVE_USER_RESPONSES = 'SAVE_USER_RESPONSES';

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

const fetchQuestionnaireSuccess = data => ({
    type: FETCH_QUESTIONNAIRE_SUCESS,
    payload: data,
})

const fetchQuestionnaireFailure = error => ({
    type: FETCH_QUESTIONNAIRE_FAILURE,
    payload: error,
})

export const fetchData = () => {
    return async dispatch => {
        dispatch(fetchDataRequest());
        try {
            const response = await axios.get('http://172.20.0.2:5001/api/v1/data');//'http://backend:5001/api/v1/data'
            dispatch(fetchDataSuccess(response));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
};

export const fetchQuestionnaire = () => {
    return async dispatch => {
        try{
            const response = await axios.get('http://172.20.0.2:5001/api/v1/questionnaire');//http://localhost:5001/api/v1/questionnaire
            dispatch(fetchQuestionnaireSuccess(response.data.questionnaire))
        }catch (error) {
            console.log("error" + error.response)
            dispatch(fetchQuestionnaireFailure(error.message));
        }
    }
}

export const saveUserResponses = (responses) => ({
    type: SAVE_USER_RESPONSES,
    payload: responses,
});