import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from './ItemsSlice';

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export default store;
