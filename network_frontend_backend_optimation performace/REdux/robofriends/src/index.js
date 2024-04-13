import React from 'react';
// import ReactDOM from 'react-dom';// The new way to import createRoot:
import { createRoot } from "react-dom/client";
import { Provider , connect} from 'react-redux';
import {  legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import './index.css';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducer';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(rootReducer, applyMiddleware(thunk, logger)); 

import registerServiceWorker from './registerServiceWorker';
// 


const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>, document.getElementById('root'));
registerServiceWorker();
