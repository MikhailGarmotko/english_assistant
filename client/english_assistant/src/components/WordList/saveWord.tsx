import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  MainContainer,
  WelcomeText,
  InputContainer,
  Input,
  ButtonContainer,
  Button
} from '../../styles';
import { useCreateWordMutation } from '../../store/slices/api/WordApi';
import { useAppDispatch } from '../../store';
import { useAppSelector } from '../../store';
import { CheckWord } from './checkWord';

export const WordList = () => {
  const [word, setWord] = useState('');
  const { username } = useAppSelector((state) => state.userProfile.user);
  const navigate = useNavigate();
  const onChangeHandler = (e: any) => {
    setWord(e.target.value);
  };

  const onCreateWordHandler = async (e: any) => {
    e.preventDefault();
    navigate('/checkWord', { state: { word } });
  };

  return (
    <MainContainer>
      <WelcomeText>WordList</WelcomeText>
      <InputContainer height={'20%'}>
        <Input type="text" placeholder="Enter word..." name="newword" onChange={onChangeHandler} />
        <></>
      </InputContainer>
      <ButtonContainer>
        <Button content="Enter Word" onClick={onCreateWordHandler} />
        <Button content="Back" onClick={() => navigate('/')} />
      </ButtonContainer>
    </MainContainer>
  );
};
