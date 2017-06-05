import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// for devTools
import { composeWithDevTools } from 'redux-devtools-extension';

// import { helloSaga } from './sagas';

import rootReducer from './reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
	rootReducer, 
	composeWithDevTools(
    applyMiddleware(sagaMiddleware)
));
// use redux-saga instead of thunk for this project

// then run the saga
// sagaMiddleware.run(helloSaga);

// render the application

export default store;