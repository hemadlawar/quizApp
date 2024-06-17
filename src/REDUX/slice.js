// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { queryAllByTestId } from "@testing-library/react";

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
    {
      questionNumber: 4,
      title: "capital of Uk is------",
      options: { a: "Paris", b: "london", c: "Baghdad", d: "None of them" },
      correct: "london",
    },
    {
      questionNumber: 5,
      title: "capital of mexico is------",
      options: {
        a: "erbil",
        b: "mexico city",
        c: "Baghdad",
        d: "None of them",
      },
      correct: "mexico city",
    },
  ],
  reducers: {},
});

const changeQuestions = createSlice({
  name: "changeQuestion",
  initialState: { value: 1 },
  reducers: {
    nextQuestion: (state) => {
      state.value += 1;
    },
    prevQuestion: (state) => {
      state.value -= 1;
    },
  },
});

// Actions
export const { increment, reset } = counterSlice.actions;
export const { nextQuestion, prevQuestion } = changeQuestions.actions;

// Reducers
export const counterReducer = counterSlice.reducer;
export const questionReducer = questionSlice.reducer;
export const changeQuestionReducer = changeQuestions.reducer;
