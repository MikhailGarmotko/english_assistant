import { MainContainer, InfoText, Button } from '../styles';
import { useState } from 'react';
import React from 'react';
import { useSetProfileQuery } from '../store/Auth.api';
import { useNavigate } from 'react-router-dom';

export const Profile: React.FC = () => {
  // debugger;
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>();
  // const location = useLocation();
  // const { email, username } = location.state;
  const { username } = useSetProfileQuery<any>();
  if (username) {
    setProfile(username);
  }
  console.log(username);
  // const { email, username } = profileData;
  return (
    <MainContainer>
      <InfoText>
        {profile ? (
          <>
            <div>Email {profile}</div>
            <div>User {profile.username}</div>
          </>
        ) : (
          <div></div>
        )}
      </InfoText>
      <Button content="Back" onClick={() => navigate('/')} />
    </MainContainer>
  );
};
