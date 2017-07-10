/**
 * Created by Utku on 02/03/2017.
 */
import queryApi from '../api';
import types from './actionTypes';
export function getAllQueries() {
    return function (dispatch, state) {
        return queryApi.getAllQueries().then((queries) => {
            if (queries.err) {
                dispatch({
                    type: types.GET_ALL_QUERIES_FAILED,
                    customName: "allQueries",
                    data: queries.err
                })
            } else {
                dispatch({
                    type: types.GET_ALL_QUERIES_SUCCESS,
                    data: {allQueries: queries.res.data}
                })
            }
        }).catch((error) => {
            dispatch({
                type: types.GET_ALL_QUERIES_FAILED,
                data: error
            })
        })
    }
}
export function getQueryByName(queryName) {
    return function (dispatch) {
        return queryApi.getQueryByName(queryName).then((queries) => {
            if (queries.err) {
                dispatch({
                    type: types.GET_QUERY_BY_NAME_FAILED,
                    data: queries.err
                })
            } else {
                dispatch({
                    type: types.GET_QUERY_BY_NAME_SUCCESS,
                    data: {[queryName]: queries.res.data}
                })
            }
        }).catch((error) => {
            dispatch({
                type: types.GET_QUERY_BY_NAME_FAILED,
                data: error
            })
        })
    }
}
export function upsertQuery(optData) {
    return function (dispatch, state) {
        if (!optData.params.queryName)
            return queryApi.createNewQuery(state().form[optData.form].values, optData.params.queryName).then((newData) => {
                if (newData.err) {
                    dispatch({
                        type: types.UPSERT_QUERY_FAILED,
                        data: newData.err
                    })
                    dispatch(showNotification("Query Oluşturulurken Hata Oluştu. Hata: "+newData.err,"red"))
                } else {
                    dispatch({
                        type: types.UPSERT_QUERY_SUCCESS,
                        data: newData
                    });
                    dispatch(showNotification("Query Başarıyla Oluşturuldu.","green"))
                    if (optData.onSave) {
                        optData.onSave(newData.res.data)
                    }
                }
            }).catch((error) => {
                dispatch({
                    type: types.UPSERT_QUERY_FAILED,
                    data: error
                })
                dispatch(showNotification("Query Oluşturulurken Hata Oluştu. Hata: "+error,"red"))
            })
        else{
            return queryApi.updateQuery(state().form[optData.form].values, optData.params.queryName).then((newData) => {
                if (newData.err) {
                    dispatch({
                        type: types.UPSERT_QUERY_FAILED,
                        data: newData.err
                    })
                    dispatch(showNotification("Query Kaydedilirken Hata Oluştu. Hata: "+newData.err,"red"))
                } else {
                    dispatch({
                        type: types.UPSERT_QUERY_SUCCESS,
                        data: newData
                    });
                    dispatch(showNotification("Query Başarıyla Kaydedildi.","green"))
                    if (optData.onSave) {
                        optData.onSave(newData.res.data)
                    }
                }
            }).catch((error) => {
                dispatch({
                    type: types.UPSERT_QUERY_FAILED,
                    data: error
                })
                dispatch(showNotification("Query Kaydedilirken Hata Oluştu. Hata: "+error,"red"))
            })
        }
    }
}
export function deleteQuery(queryName,optData) {
    return function (dispatch) {
            return queryApi.deleteQuery(queryName).then((newData) => {
                if (newData.err) {
                    dispatch({
                        type: types.DELETE_QUERY_FAILED,
                        data: newData.err
                    })
                    dispatch(showNotification("Query Silinirken Hata Oluştu. Hata: "+newData.err,"red"))
                } else {
                    dispatch({
                        type: types.DELETE_QUERY_SUCCESS,
                        data: newData
                    })
                    dispatch(showNotification("Query Başarıyla Silindi.","green"))
                    if (optData.onDelete) {
                        optData.onDelete()
                    }
                }
            }).catch((error) => {
                dispatch({
                    type: types.DELETE_QUERY_FAILED,
                    data: error
                })
                dispatch(showNotification("Query Silinirken Hata Oluştu. Hata: "+error,"red"))
            })
    }
}

export function getAllForms() {
    return function (dispatch, state) {
        return queryApi.getAllForms().then((forms) => {
            if (forms.err) {
                dispatch({
                    type: types.GET_ALL_FORMS_FAILED,
                    customName: "allForms",
                    data: forms.err
                })
            } else {
                dispatch({
                    type: types.GET_ALL_FORMS_SUCCESS,
                    data: {allForms: forms.res.data}
                })
            }
        }).catch((error) => {
            dispatch({
                type: types.GET_ALL_QUERIES_SUCCESS,
                data: error
            })
        })
    }
}
export function getFormByName(formName) {
    return function (dispatch) {
        return queryApi.getFormByName(formName).then((forms) => {
            if (forms.err) {
                dispatch({
                    type: types.GET_FORM_BY_NAME_FAILED,
                    data: forms.err
                })
            } else {
                dispatch({
                    type: types.GET_FORM_BY_NAME_SUCCESS,
                    data: {[formName]: forms.res.data}
                })
            }
        }).catch((error) => {
            dispatch({
                type: types.GET_FORM_BY_NAME_FAILED,
                data: error
            })
        })
    }
}
export function upsertFormData(optData) {
    return function (dispatch, state) {
        if (!optData.params.formName)
            return queryApi.createNewForm(state().form[optData.form].values, optData.params.formName).then((newData) => {
                if (newData.err) {
                    dispatch({
                        type: types.UPSERT_FORM_FAILED,
                        data: newData.err
                    })
                    dispatch(showNotification("Form Oluşturulurken Hata Oluştu. Hata: "+newData.err,"red"))
                } else {
                    dispatch({
                        type: types.UPSERT_FORM_SUCCESS,
                        data: newData
                    });
                    dispatch(showNotification("Form Başarıyla Oluşturuldu.","green"))
                    if (optData.onSave) {
                        optData.onSave(newData.res.data)
                    }
                }
            }).catch((error) => {
                dispatch({
                    type: types.UPSERT_FORM_FAILED,
                    data: error
                })
                dispatch(showNotification("Form Oluşturulurken Hata Oluştu. Hata: "+error,"red"))
            })
        else{
            return queryApi.updateForm(state().form[optData.form].values, optData.params.formName).then((newData) => {
                if (newData.err) {
                    dispatch({
                        type: types.UPSERT_FORM_FAILED,
                        data: newData.err
                    })
                    dispatch(showNotification("Form Kaydedilirken Hata Oluştu. Hata: "+newData.err,"red"))
                } else {
                    dispatch({
                        type: types.UPSERT_FORM_SUCCESS,
                        data: newData
                    });
                    dispatch(showNotification("Form Başarıyla Kaydedildi.","green"))
                    if (optData.onSave) {
                        optData.onSave(newData.res.data)
                    }
                }
            }).catch((error) => {
                dispatch({
                    type: types.UPSERT_FORM_FAILED,
                    data: error
                })
                dispatch(showNotification("Form Kaydedilirken Hata Oluştu. Hata: "+error,"red"))
            })
        }
    }
}
export function deleteForm(formName,optData) {
    return function (dispatch) {
        return queryApi.deleteForm(formName).then((newData) => {
            if (newData.err) {
                dispatch({
                    type: types.DELETE_FORM_FAILED,
                    data: newData.err
                })
                dispatch(showNotification("Form Silinirken Hata Oluştu. Hata: "+newData.err,"red"))
            } else {
                dispatch({
                    type: types.DELETE_FORM_SUCCESS,
                    data: newData
                })
                dispatch(showNotification("Form Başarıyla Silindi.","green"))
                if (optData.onDelete) {
                    optData.onDelete()
                }
            }
        }).catch((error) => {
            dispatch({
                type: types.DELETE_FORM_FAILED,
                data: error
            })
            dispatch(showNotification("Form Silinirken Hata Oluştu. Hata: "+error,"red"))
        })
    }
}

export function showNotification(infoText,infoColor) {
    return{
            type: types.PUSH_NOTIFICATION,
            infoText,
            infoColor,
    }
}
export function clearNotification(){
    return function(dispatch){
        dispatch({
            type :types.CLEAR_NOTIFICATION,
        });
    }
}