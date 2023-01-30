import { configureStore } from '@reduxjs/toolkit';
import UserProfileReducer from './slices/userSlices';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authApi } from './Auth.api';

export const store = configureStore({
  reducer: {
    userProfile: UserProfileReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({}).concat([authApi.middleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
