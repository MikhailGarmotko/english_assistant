import { MainContainer, InfoText, Button } from '../styles';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store';

export const Profile: React.FC = () => {

  const { username, email } = useAppSelector((state) => state.userProfile.user);
  const navigate = useNavigate();
  return (
    <MainContainer>
      <InfoText>
        <div>Email : {email}</div>
        <div>User : {username}</div>
      </InfoText>
      <Button content="Back" onClick={() => navigate('/')} />
    </MainContainer>
  );
};
