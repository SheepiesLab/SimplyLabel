import {createSlice} from '@reduxjs/toolkit';
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
    shadowContainerName: '',
    shadowInContainerItemList: [],
  },
  reducers: {
    setShadowItem: (state, action) => {
      state.entries.shadow = action.payload;
      if (state.entries.shadow.container !== '') {
        state.shadowContainerName =
          state.entries[state.entries.shadow.container].name;
      }
    },
    shadowItem: (state, action) => {
      if (action.payload === 'shadow') {
        state.entries.shadow = emptyShadow;
        state.shadowInContainerItemList = [];
        state.shadowContainerName = '';
      } else {
        state.entries.shadow = state.entries[action.payload];
        state.shadowInContainerItemList = [];
        if (state.entries.shadow.container !== '') {
          state.shadowContainerName =
            state.entries[state.entries.shadow.container].name;
        }
        for (const k in state.entries) {
          if (state.entries[k].container === action.payload) {
            state.shadowInContainerItemList.push(k);
          }
        }
      }
    },
    shadowItemAddContaining: (state, action) => {
      if (!state.shadowInContainerItemList.includes(action.payload)) {
        state.shadowInContainerItemList.push(action.payload);
      }
    },
    shadowItemRemoveContaining: (state, action) => {
      let index = state.shadowInContainerItemList.indexOf(action.payload);
      if (index !== -1) {
        state.shadowInContainerItemList.splice(index, 1);
      }
    },
    emptyShadowItem: (state, action) => {
      state.entries.shadow = emptyShadow;
      state.shadowInContainerItemList = [];
      state.shadowContainerName = '';
    },
    commitShadowItem: (state, action) => {
      const key = uuid();
      state.entries[key] = state.entries.shadow;
      for (const k in state.shadowInContainerItemList) {
        const itemKey = state.shadowInContainerItemList[k];
        state.entries[itemKey].container = key;
      }
    },
    updateItem: (state, action) => {
      const key = action.payload;
      state.entries[key] = state.entries.shadow;
      for (const k in state.shadowInContainerItemList) {
        const itemKey = state.shadowInContainerItemList[k];
        state.entries[itemKey].container = key;
      }
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
  setShadowItem,
  shadowItem,
  shadowItemAddContaining,
  shadowItemRemoveContaining,
  emptyShadowItem,
  commitShadowItem,
  updateItem,
  deleteItem,
  setEditMode,
} = itemsSlice.actions;

export default itemsSlice.reducer;
