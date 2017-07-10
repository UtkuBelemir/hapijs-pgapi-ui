import React from 'react';
import store from './utils/store'
import ReactDOM from 'react-dom';
import {Provider} from'react-redux';
import Routes from './router/index';
import './css/index.css';
import 'react-mdl/extra/css/material.deep_orange-blue.min.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
    <Provider store={store}>
            <Routes/>
    </Provider>,
    document.getElementById('root')
);
