// chempSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  getCarsData: [],
  // isLoading: false,
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
      state.cars = action.payload;
    },

    // setLoading: (state, action) => {
    //   state.isLoading = action.payload;
    // },
  },
});

export const { addUser, removeUser, setCars } = chempSlice.actions;
export default chempSlice.reducer;
