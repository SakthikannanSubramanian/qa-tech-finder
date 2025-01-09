import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FETCH_QUESTIONNAIRE_SUCESS,
    FETCH_QUESTIONNAIRE_FAILURE,
    SAVE_USER_RESPONSES,
} from '../actions/dataActions';

const initialState = {
    loading: false,
    data: [],
    questionnaire: [],
    userResponses: [], 
    error: '',
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: '',
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload,
            };
        case FETCH_QUESTIONNAIRE_SUCESS:
            return {
                ...state,
                loading: false,
                questionnaire: action.payload,
            };
        case FETCH_QUESTIONNAIRE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SAVE_USER_RESPONSES:
            return {
                ...state,
                userResponses: action.payload, 
            };
        default:
            return state;
    }
};

export default dataReducer;
