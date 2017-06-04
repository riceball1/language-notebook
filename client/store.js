import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// use redux-saga instead of thunk for this project

// then run the saga
// sagaMiddleware.run(mySaga)

// render the application

export default store;