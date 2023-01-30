import { RouteObject } from 'react-router-dom';
import { Login } from './components/login';
import { Home } from './components/home';
import { useRoutes } from 'react-router-dom';
import { ProtectedRoute } from './components/protectedRoute';
import { Profile } from './components/profile';
import { SignUp } from './components/signup';
import React from 'react';

const App: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      )
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/login/signup',
      element: <SignUp />
    }
  ];
  return useRoutes(routes);
};

export default App;
