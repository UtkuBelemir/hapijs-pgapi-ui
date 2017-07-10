/**
 * Created by Utku on 02/03/2017.
 */
import types from '../actions/actionTypes';
export function queryReducer(state = {}, action) {
    switch (action.type) {
        case types.GET_ALL_QUERIES_SUCCESS:
            return {...state, ...action.data}
        case types.UPSERT_QUERY_SUCCESS:
            return {...state, ...action.data}
        case types.DELETE_QUERY_SUCCESS:
            return {...state, ...action.data}
        case types.GET_QUERY_BY_NAME_SUCCESS:
            return {...state, ...action.data}

        case types.GET_ALL_FORMS_SUCCESS:
            return {...state, ...action.data}
        case types.UPSERT_FORM_SUCCESS:
            return {...state, ...action.data}
        case types.DELETE_FORM_SUCCESS:
            return {...state, ...action.data}
        case types.GET_FORM_BY_NAME_SUCCESS:
            return {...state, ...action.data}
        default :
            return state
    }
}