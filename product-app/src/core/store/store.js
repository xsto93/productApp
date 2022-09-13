import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunk];
const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

//Linea para quitar el addons de chrome
//const storeRedux = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));
export default reduxStore;
