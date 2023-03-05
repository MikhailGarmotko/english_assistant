import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAppDispatch } from '../store';
import { setUser } from '../store/slices/userSlices';
import jwt_decode from 'jwt-decode';

type Props = {
  children: JSX.Element;
};
type Decoded = {
  name: string;
  email: string;
  jti: string;
};

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const access_token:any = localStorage.getItem('access_token');
    if (access_token) {
    const decode:any = jwt_decode(access_token);
    const {username, email, id} = decode; 
    dispatch(setUser({payload:{username,email,id}}));
}

  if (!access_token) {
    return <Navigate to="/login" />;
  }
  return children;
};
