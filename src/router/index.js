/**
 * Created by Utku on 02/03/2017.
 */
import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import MainPage from '../pages/indexPage';
import QueryList from '../pages/queryPages/listQueries';
import QueryCreator from '../pages/queryPages/queryCreator';
import FormList from '../pages/formPages/listForms';
import FormCreator from '../pages/formPages/formCreator';
import Header from '../fixedComponents/header';

export default class AllRoutes extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route onChange={ () => console.log("Route")} components={Header}>
                    <Route path="/" components={MainPage}/>
                    <Route path="allqueries" components={QueryList}/>
                    <Route path="query">
                        <Route path="new" components={QueryCreator}/>
                        <Route path="edit/:queryName" components={QueryCreator}/>
                    </Route>
                    <Route path="allforms" components={FormList}/>
                    <Route path="form">
                        <Route path="new" components={FormCreator}/>
                        <Route path="edit/:formName" components={FormCreator}/>
                    </Route>
                </Route>
            </Router>
        )
    }
}
