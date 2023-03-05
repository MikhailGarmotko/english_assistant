import { createSlice } from '@reduxjs/toolkit';
import { Word } from '../types';

const initialState: Word = {
  word: '',
  words: [],
};
export const wordSlice = createSlice({
  initialState,
  name: 'wordSlice',
  reducers: {
    saveWord: (state,action) => {
    state.word = action.payload.word; 
     },
    loadWords: (state,action) => {
      state.words.push(action.payload); 
       },
  }
});

export const { saveWord, loadWords } = wordSlice.actions;
export default wordSlice.reducer;
