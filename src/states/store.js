import {createStore, combineReducers} from 'redux';
import itemsReducer from './ItemsSlice';
import appReducer from './AppSlice';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  app: appReducer,
  items: itemsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
