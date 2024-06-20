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
    {
      questionNumber: 6,
      title: "capital of brazil is------",
      options: {
        a: "brazilia",
        b: "mexico city",
        c: "Baghdad",
        d: "None of them",
      },
      correct: "brazilia",
    },
    {
      questionNumber: 7,
      title: "capital of russia is------",
      options: {
        a: "brazil",
        b: "mexico city",
        c: "Baghdad",
        d: "moscow",
      },
      correct: "moscow",
    },
    {
      questionNumber: 8,
      title: "capital of south korea is------",
      options: {
        a: "seoul",
        b: "mexico city",
        c: "new york",
        d: "moscow",
      },
      correct: "seoul",
    },
    {
      questionNumber: 9,
      title: "capital of greece is------",
      options: {
        a: "brazil",
        b: "mexico city",
        c: "athens",
        d: "moscow",
      },
      correct: "athens",
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

const showResult = createSlice({
  name: "showTheFinalResult",
  initialState: {
    showYourMark: false,
  },
  reducers: {
    presentTheResult: (state) => {
      state.showYourMark = true;
    },
    hideTheResult: (state) => {
      state.showYourMark = false;
    },
  },
});

// Actions
export const { increment, reset } = counterSlice.actions;
export const { nextQuestion, prevQuestion } = changeQuestions.actions;
export const { presentTheResult, hideTheResult } = showResult.actions;

// Reducers
export const counterReducer = counterSlice.reducer;
export const questionReducer = questionSlice.reducer;
export const changeQuestionReducer = changeQuestions.reducer;
export const showResultReducer = showResult.reducer;
