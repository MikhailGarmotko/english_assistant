import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { useGetAllUsersQuery, useGetAllUserWordsQuery } from '../../store/slices/api/User.api';
import { MainContainer, StyledButton, WordContainer, WordsContainer, WordTitle } from './saveWordstyle';
import { loadWords } from '../../store/slices/wordSlices';
import { useNavigate } from 'react-router-dom';

export const MyWordList = () => {
  const navigate = useNavigate();
  const { id, username } = useAppSelector((state) => state.userProfile.user);
  const words = useAppSelector((state) => state.wordProfile.words);
  const { data, refetch } = useGetAllUserWordsQuery(id, { refetchOnMountOrArgChange: true });
  // useEffect ( () => refetch(), [words]);
  return (
    <MainContainer>
      <WordTitle>{username}</WordTitle>
      <WordsContainer>{data && data.map((i: any) => <WordContainer>{i.words.word}</WordContainer>)}</WordsContainer>
      <StyledButton onClick={() => navigate('/')}>Back</StyledButton>
    </MainContainer>
  );
};
