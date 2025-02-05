import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const FETCH_QUESTIONNAIRE_SUCESS = 'FETCH_QUESTIONNAIRE_SUCESS';
export const FETCH_QUESTIONNAIRE_FAILURE = 'FETCH_QUESTIONNAIRE_FAILURE';
export const SAVE_USER_RESPONSES = 'SAVE_USER_RESPONSES';
export const SAVE_CALCULATED_SCORES = 'SAVE_CALCULATED_SCORES';

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
            const response = await axios.get('http://localhost:5001/api/v1/data');//'http://172.20.0.2:5001/api/v1/data'
            dispatch(fetchDataSuccess(response.data));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
};

export const fetchQuestionnaire = () => {
    return async dispatch => {
        try{
            const response = await axios.get('http://localhost:5001/api/v1/questionnaire');//http://172.20.0.2:5001/api/v1/questionnaire
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

export const saveCalculatedScores = (calculatedScores) => ({
    type: SAVE_CALCULATED_SCORES,
    payload: calculatedScores,
});

export const submitQuestionnaire = (userResponses) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5001/api/v1/questionnaire', {
            responses: userResponses,
        });

        if (response.data) {
            dispatch(saveCalculatedScores(response.data));
            localStorage.setItem('calculatedScores', JSON.stringify(response.data));
        }
    } catch (error) {
        console.error('Error submitting responses:', error);
    }
};