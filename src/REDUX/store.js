// store.js
import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, questionReducer } from "../REDUX/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    questions: questionReducer,
  },
});
