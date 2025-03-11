import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  initialState: {
    value: 0,
  },
  name: "counter",
  reducers: {
    inc: (state) => {
      return { ...state, value: state.value + 1 };
    },
    dec: (state) => {
      return { ...state, value: state.value - 1 };
    },
    reset: (state) => {
      return { ...state, value: 0 };
    },
  },
});

export const { inc, dec, reset } = counterSlice.actions;

export default counterSlice.reducer;
