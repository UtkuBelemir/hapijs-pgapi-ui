/**
 * Created by Utku on 02/03/2017.
 */
import axios from 'axios';
//const APIURL = "http://www.reactivers.com:4000";
const APIURL = "http://localhost:4000";
class QueryApi {
    static getAllQueries() {
        return axios.get(APIURL + "/queries").then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
    static getQueryByName(queryName) {
        return axios.get(APIURL + "/queries/"+queryName).then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
    static createNewQuery(data) {
        return axios.post(APIURL + "/queries",data).then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
    static updateQuery(data,queryName) {
        return axios.put((APIURL + "/queries/"+queryName),data).then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
    static deleteQuery(queryName) {
        return axios.delete((APIURL + "/queries/"+queryName)).then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
    static getAllForms() {
        return axios.get(APIURL + "/forms").then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
    static getFormByName(formName) {
        return axios.get(APIURL + "/forms/"+formName).then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
    static createNewForm(data) {
        return axios.post(APIURL + "/forms",data).then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
    static updateForm(data,formName) {
        return axios.put((APIURL + "/forms/"+formName),data).then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
    static deleteForm(formName) {
        return axios.delete((APIURL + "/forms/"+formName)).then((response) => {
            return {res : response}
        }).catch((error) => {
            return {err : error}
        })
    }
}
export default QueryApi;