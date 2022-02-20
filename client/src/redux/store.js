import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import rootSaga from "./saga/rootSaga";



const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)
));



export default store;

sagaMiddleware.run(rootSaga);