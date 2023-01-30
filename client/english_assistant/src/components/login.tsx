import {
  MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button,
  LoginWith,
  HorizontalRule,
  IconsContainer,
  ForgotPassword
} from '../styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import React from 'react';
import { useLoginMutation } from '../store/Auth.api';

interface inputData {
  username: string;
  password: string;
}

type Decoded = {
  name: string;
  email: string;
  jti: string;
};

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginMutation();
  const [inputData, setInputData] = useState<inputData>({ username: '', password: '' });
  const onChangeHandler = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSignInHandler = async (e: any) => {
    e.preventDefault();
    loginUser(inputData)
      .unwrap()
      .then((access_token: any) => {
        if (access_token) {
          localStorage.setItem('access_token', access_token);
          navigate('/');
        } else navigate('signup');
      });
  };

  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer height={'20%'}>
        <Input type="text" placeholder="User name" name="username" onChange={onChangeHandler} />
        <Input type="password" placeholder="Password" name="password" onChange={onChangeHandler} />
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign In" onClick={onSignInHandler} />
      </ButtonContainer>
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <GoogleOAuthProvider clientId="78282669505-d1podqbm237lt98p7t726q7ap8a2mer4.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={async (credentialResponse: any) => {
              const decoded: Decoded = jwt_decode(credentialResponse.credential);
              const { name: username, email, jti: password } = decoded;
              const response = await fetch('http://localhost:3000/auth/google', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
              });
              const { access_token } = await response.json();
              if (access_token) {
                localStorage.setItem('access_token', access_token);
                navigate('/');
              }
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </GoogleOAuthProvider>
      </IconsContainer>
      <ForgotPassword>Forgot Password ?</ForgotPassword>
    </MainContainer>
  );
};
