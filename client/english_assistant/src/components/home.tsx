import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetAllUsersQuery } from '../store/Auth.api';
import { User } from '../store/types';

export const Home = () => {
  const navigate = useNavigate();
  const { data } = useGetAllUsersQuery<any>();
  const [users, setAllUsers] = useState<User[]>([]);
  const getAllUsers = () => {
    if (data) setAllUsers(data);
  };
  const onClick = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };
  // const getProfile = async () => {
  //   // const JWT = localStorage.getItem('access_token');
  //   // const response = await fetch('http://localhost:3000/auth/profile', {
  //   //   method: 'GET',
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //     Authorization: `Bearer ${JWT}`
  //   //   }
  //   // });
  //   // const user = await response.json();
  //   // setProfile(JWT)
  //   //   .unwrap()
  //   //   .then((user: User) => {
  //   //     if (user) {
  //   //       navigate('/profile', { state: user });
  //   //     }
  //   //   });
  // };

  return (
    <>
      <div>Home</div>
      <button onClick={onClick}>SignOut</button>
      <button onClick={() => navigate('/profile')}>Profile</button>
      <button onClick={getAllUsers}>All users</button>
      {users ? users.map((i) => <div key={i.id}>{i.username}</div>) : <></>}
    </>
  );
};
