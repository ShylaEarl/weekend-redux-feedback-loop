import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//TODO add reducers here for each page
const feelingReducer = (state = 0, action) => {
    if(action.type === 'ADD_FEELING'){
        console.log('feeling payload', action.payload);
        return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
