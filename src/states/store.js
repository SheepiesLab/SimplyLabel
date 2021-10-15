import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'remote-redux-devtools';
import itemsReducer from './ItemsSlice';
import appReducer from './AppSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'Your Instance Name',
  hostname: 'localhost',
  port: 8000, // the port your remotedev server is running at
});

const rootReducer = combineReducers({
  app: appReducer,
  items: itemsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeEnhancers());
const persistor = persistStore(store);

export {store, persistor};
