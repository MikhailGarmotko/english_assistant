import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserPayLoad, UserProfile } from '../types';

export interface UserState {
  user: UserPayLoad | null;
}

const initialState: UserProfile = {
  user: {}
};

export const userProfileSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setUser: (state, action: PayloadAction<UserPayLoad>) => {
      const { username, email, id } = action.payload.payload;
      // debugger;
      state.user = { username, email, id };
    }
  }
});

export const { setUser } = userProfileSlice.actions;
export default userProfileSlice.reducer;
