import { RouteObject } from 'react-router-dom';
import { Login } from './components/login';
import { HomePage } from './components/Home/homepage';
import { useRoutes } from 'react-router-dom';
import { ProtectedRoute } from './components/protectedRoute';
import { Profile } from './components/profile';
import { SignUp } from './components/signup';
import { WordList } from './components/WordList/saveWord';
import { CheckWord } from './components/WordList/checkWord';
import { MyWordList } from './components/WordList/myWordList';
import React from 'react';

const App: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <HomePage />
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
      path: '/saveword',
      element: <WordList />
    },
    {
      path: '/wordlist',
      element: (
        <ProtectedRoute>
        <MyWordList />
        </ProtectedRoute>
      )
    },
    {
      path: '/login/signup',
      element: <SignUp />
    },
    {
      path: '/checkword',
      element: <CheckWord />
    }
  ];
  return useRoutes(routes);
};

export default App;
