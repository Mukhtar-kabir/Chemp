// chempSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  getCarsData: [],
  generateCarImageUrl: [],
};

export const chempSlice = createSlice({
  name: "chemp",
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },

    removeUser: (state) => {
      return {
        ...state,
        userInfo: null,
      };
    },

    setCars: (state, action) => {
      state.getCarsData = action.payload;
    },

    setGenerateCars: (state, action) => {
      state.generateCarImageUrl = action.payload;
    },
  },
});

export const { addUser, removeUser, setCars, setGenerateCars } =
  chempSlice.actions;
export default chempSlice.reducer;
