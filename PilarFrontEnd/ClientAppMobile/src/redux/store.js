import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const middlewares = [
    thunkMiddleware,
].filter(Boolean);

export const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);
