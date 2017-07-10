/**
 * Created by Utku on 07/07/2017.
 */
import types from '../actions/actionTypes';
export function notificationReducers(state = {}, action) {
    switch (action.type) {
        case types.PUSH_NOTIFICATION:
            return {...state, infoText : action.infoText, infoColor: action.infoColor}
        case types.CLEAR_NOTIFICATION:
            return {};
        default :
            return state
    }
}