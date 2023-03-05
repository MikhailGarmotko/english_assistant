import {
  MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button
} from '../styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserMutation } from '../store/slices/api/User.api';
import { inputData } from '../store/types';
import React from 'react';

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [createNewUser] = useCreateUserMutation();
  const [inputData, setInputData] = useState<inputData>({ username: '', password: '', email: '' });
  const [userIsExisted, setUserIsExisted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const onChangeHandler = (e: any) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const onSignUpHandler = async (e: any) => {
    e.preventDefault();
    createNewUser(inputData)
      .unwrap()
      .then((message: any) => {
        if (message) {
          const { message: notification } = message;
          setMessage(notification);
          setUserIsExisted(true);
          if (notification === 'logged') {
            setTimeout(() => navigate('/login'), 2000);
          }
        }
      });
  };

  return (
    <MainContainer>
      <WelcomeText>Please sign up</WelcomeText>
      <InputContainer height="50%">
        <Input type="text" placeholder="User name" name="username" onChange={onChangeHandler} />
        <Input type="password" placeholder="Password" name="password" onChange={onChangeHandler} />
        <Input type="email" placeholder="Email" name="email" onChange={onChangeHandler} />
        {userIsExisted ? <div style={{ color: 'red' }}>{`${message}`}</div> : <></>}
      </InputContainer>
      <ButtonContainer>
        <Button content="Sign Up" onClick={onSignUpHandler} />
        <Button content="Back" onClick={() => navigate('/login')} />
      </ButtonContainer>
    </MainContainer>
  );
};
