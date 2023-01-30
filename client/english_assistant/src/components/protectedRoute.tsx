import { Navigate } from 'react-router-dom';
import React from 'react';

type Props = {
  children: JSX.Element;
};
export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const user = localStorage.getItem('access_token');
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
