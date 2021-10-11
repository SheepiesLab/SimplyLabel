import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from './ItemsSlice';
import appReducer from './AppSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    items: itemsReducer,
  },
});

export default store;
