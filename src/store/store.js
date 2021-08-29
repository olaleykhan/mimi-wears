import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/rootReducer';

// const middlewares = [];
const middlewares = [];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persist = persistStore(store)

// export default { store, persist }