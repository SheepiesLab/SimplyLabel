import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';
import {v4 as uuid} from 'uuid';

const emptyShadow = {
  label: '',
  name: '',
  description: '',
  container: '',
  isVirtual: false,
  isContainer: false,
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    itemScreenInEdit: false,
    entries: {
      shadow: emptyShadow,
    },
    shadowInContainerItemList: [],
  },
  reducers: {
    shadowItem: (state, action) => {
      state.entries.shadow = action.payload;
    },
    setShadowItem: (state, action) => {
      if (action.payload === 'shadow') {
        state.entries.shadow = emptyShadow;
        state.shadowInContainerItemList = [];
      } else {
        state.entries.shadow = state.entries[action.payload];
        state.shadowInContainerItemList = [];
        for (const k in state.entries) {
          if (state.entries[k].container === action.payload) {
            state.shadowInContainerItemList.push(k);
          }
        }
      }
    },
    shadowItemAddContaining: (state, action) => {
      state.shadowInContainerItemList.push(action.payload);
    },
    emptyShadowItem: (state, action) => {
      state.entries.shadow = emptyShadow;
      state.shadowInContainerItemList = [];
    },
    commitShadowItem: (state, action) => {
      state.entries[uuid()] = state.entries.shadow;
    },
    updateItem: (state, action) => {
      state.entries[action.payload] = state.entries.shadow;
    },
    deleteItem: (state, action) => {
      delete state.entries[action.payload];
    },
    setEditMode: (state, action) => {
      state.itemScreenInEdit = action.payload;
    },
  },
});

export const {
  shadowItem,
  setShadowItem,
  shadowItemAddContaining,
  emptyShadowItem,
  commitShadowItem,
  updateItem,
  deleteItem,
  setEditMode,
} = itemsSlice.actions;

export default itemsSlice.reducer;
