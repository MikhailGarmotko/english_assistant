import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null
};

export const userProfileSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;
