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
import { useLoginMutation, useLoginWithGoogleMutation } from '../store/slices/api/Auth.api';
import { useAppDispatch } from '../store';
import { setUser } from '../store/slices/userSlices';

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
  const [loginWithGoogle] = useLoginWithGoogleMutation();
  const dispatch = useAppDispatch();
  const [inputData, setInputData] = useState<inputData>({ username: '', password: '' });
  const [inputValidation, setInputValidation] = useState(false);
  const [noUser, setNoUser] = useState(false)
  const onChangeHandler = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSignInHandler = async (e: any) => {
    e.preventDefault();
    setInputValidation(true);
    if (!inputData.password.length || !inputData.username.length ) return;
    loginUser(inputData)
      .unwrap()
      .then((payload: any) => {
        const { access_token, ...user } = payload;
        // debugger;
        if (access_token) {
          localStorage.setItem('access_token', access_token);
          dispatch(setUser(user));
          navigate('/');
        }
      })
      .catch((err) => (err ? setNoUser(true) : <></>));
  };

  return (
    <MainContainer>
      <WelcomeText>Welcome</WelcomeText>
      <InputContainer height={'20%'}>
        <Input type="text" placeholder="User name" name="username" onChange={onChangeHandler} />
        { inputValidation ?!inputData.username.length?<div style={{color:"red"}}>Please enter username</div>:<></>:<></>}
        <Input type="password" placeholder="Password" name="password" onChange={onChangeHandler} />
        { inputValidation ?!inputData.password.length?<div style={{color:"red"}}>Please enter password</div>:<></>:<></>}
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign In" onClick={onSignInHandler} />
        <Button content="Sign Up" onClick={() =>navigate('signup') } />
      </ButtonContainer>
      { noUser ?<div style={{color:"red"}}>No User, please sign up</div>:<></>}
      <LoginWith>OR LOGIN WITH</LoginWith>
      <HorizontalRule />
      <IconsContainer>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <GoogleLogin
            onSuccess={async (credentialResponse: any) => {
              const decoded: Decoded = jwt_decode(credentialResponse.credential);
              const { name: username, email, jti: password } = decoded;
              loginWithGoogle({ username, email, password })
                .unwrap()
                .then((payload: any) => {
                  const { access_token, ...user } = payload;
                  if (access_token) {
                    localStorage.setItem('access_token', access_token);
                    dispatch(setUser(user));
                    navigate('/');
                  }
                })
                .catch((err) => console.log(err));
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
