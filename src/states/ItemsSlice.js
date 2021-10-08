import {createSlice} from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    entries: {},
  },
  reducers: {
    upsertItem: (state, action) => {
      state.entries[action.payload.key] = action.payload.value;
    },
    deleteItem: (state, action) => {
      state.entries[action.payload.key] = undefined;
    },
  },
});

export const {upsertItem, deleteItem} = itemsSlice.actions;

export default itemsSlice.reducer;
