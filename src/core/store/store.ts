import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';

const middlewares: any = [thunk];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
}

const initialState = {};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const reduxStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

//Linea para quitar el addons de chrome
//const storeRedux = createStore(reducers, initialState, compose(applyMiddleware(...middlewares)));
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch;
export default reduxStore;
