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
    shadowInContainerItemList: [],
  },
  reducers: {
    setShadowItem: (state, action) => {
      state.entries.shadow = action.payload;
    },
    shadowItem: (state, action) => {
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
    },
    commitShadowItem: (state, action) => {
      const key = uuid();
      state.entries[key] = state.entries.shadow;
      for (const k in state.shadowInContainerItemList) {
        const itemKey = state.shadowInContainerItemList[k];
        state.entries[itemKey].container = key;
      }
      state.entries.shadow = emptyShadow;
      state.shadowInContainerItemList = [];
    },
    updateItem: (state, action) => {
      const key = action.payload;
      state.entries[key] = state.entries.shadow;
      for (const k in state.shadowInContainerItemList) {
        const itemKey = state.shadowInContainerItemList[k];
        state.entries[itemKey].container = key;
      }
      state.entries.shadow = emptyShadow;
      state.shadowInContainerItemList = [];
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
