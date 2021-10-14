import {createSlice} from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid';

const emptyShadow = {
  label: '',
  name: '',
  description: '',
  container: '',
  isVirtual: false,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    itemScreenInEdit: false,
    entries: {
      shadow: emptyShadow,
    },
  },
  reducers: {
    shadowItem: (state, action) => {
      state.entries.shadow = action.payload;
    },
    emptyShadowItem: (state, action) => {
      state.entries.shadow = emptyShadow;
    },
    commitShadowItem: (state, action) => {
      state.entries[uuid()] = state.entries.shadow;
    },
    updateItem: (state, action) => {
      state.entries[action.payload] = state.entries.shadow;
    },
    deleteItem: (state, action) => {
      state.entries[action.payload] = undefined;
    },
    setEditMode: (state, action) => {
      state.itemScreenInEdit = action.payload;
    },
  },
});

export const {
  shadowItem,
  emptyShadowItem,
  commitShadowItem,
  updateItem,
  deleteItem,
  setEditMode,
} = itemsSlice.actions;

export default itemsSlice.reducer;
