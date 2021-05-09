import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//redux
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// MUI theme provider
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

//Reducers to get/hold data from each page
const feelingReducer = (state = 0, action) => {
    if (action.type === 'ADD_FEELING') {
        console.log('feeling payload', action.payload);
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return state = 0;
    }
    return state;
}

const understandingReducer = (state = 0, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        console.log('understanding payload', action.payload);
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return state = 0;
    }
    return state;
}

const supportedReducer = (state = 0, action) => {
    if (action.type === 'ADD_SUPPORTED') {
        console.log('supported payload', action.payload);
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return state = 0;
    }
    return state;
}

const commentsReducer = (state = '', action) => {
    if (action.type === 'ADD_COMMENTS') {
        console.log('comments payload', action.payload);
        return action.payload;
    } else if (action.type === 'CLEAR') {
        return state = '';
    }
    return state;
}

//May not need this, trying to get Delete button functional
//check out redux-edit-example code
const deleteReducer = (state = {}, action) => {

    return state;
}

//store to hold all application data
const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer,
        deleteReducer,
    }),
    applyMiddleware(logger)
);

//Provider allows redux and react to talk to each other
ReactDOM.render(
    <ThemeProvider theme={theme}>...
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
