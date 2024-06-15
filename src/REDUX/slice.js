// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      // corrected from 'rest' to 'reset'
      state.value = 0;
    },
  },
});

export const questionSlice = createSlice({
  name: "questions",
  initialState: [
    {
      questionNumber: 1,
      title: "capital of Kurdistan region is------",
      options: { a: "Erbil", b: "Sulii", c: "Baghdad", d: "Koya" },
      correct: "Erbil",
    },
    {
      questionNumber: 2,
      title: "capital of Iraq is------",
      options: { a: "Erbil", b: "Sulii", c: "Baghdad", d: "Koya" },
      correct: "Baghdad",
    },
    {
      questionNumber: 3,
      title: "capital of USA is------",
      options: { a: "Paris", b: "Dubai", c: "Baghdad", d: "None of them" },
      correct: "None of them",
    },
  ],
  reducers: {},
});

// Actions
export const { increment, reset } = counterSlice.actions;

// Selectors
export const selectCount = (state) => state.counter.value;

// Reducers
export const counterReducer = counterSlice.reducer;
export const questionReducer = questionSlice.reducer;
