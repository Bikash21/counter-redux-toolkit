import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter";

const counterStore = configureStore({
  reducer: {
    counter: counterSliceReducer,
  },
});

export default counterStore;
