// store.js
import { configureStore } from "@reduxjs/toolkit";
import {
  counterReducer,
  questionReducer,
  changeQuestionReducer,
} from "../REDUX/slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    questions: questionReducer,
    changeQuestion: changeQuestionReducer,
  },
});
