import { configureStore } from '@reduxjs/toolkit';
import UserProfileReducer from './slices/userSlices';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authApi } from './slices/api/Auth.api';
import { userApi } from './slices/api/User.api';
import { wordApi } from './slices/api/WordApi';
import { translateApi } from './slices/api/translateApi';
import wordSlice  from './slices/wordSlices';

export const store = configureStore({
  reducer: {
    userProfile: UserProfileReducer,
    wordProfile: wordSlice,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [wordApi.reducerPath]: wordApi.reducer,
    [translateApi.reducerPath]: translateApi.reducer
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware,wordApi.middleware, translateApi.middleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
