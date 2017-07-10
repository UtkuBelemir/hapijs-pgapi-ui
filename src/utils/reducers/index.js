/**
 * Created by Utku on 02/03/2017.
 */
import {combineReducers} from 'redux';
import {queryReducer} from './queryReducers';
import {notificationReducers} from './notificationReducers';
import {reducer as formReducer} from 'redux-form';
export const rootReducer = combineReducers({
    notification : notificationReducers,
    queryReducer,
    form: formReducer,
})