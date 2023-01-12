import {useState} from 'react'; 
import { useNavigate } from "react-router-dom";

export const Home = () => {
const navigate = useNavigate();
const onClick = () => {
    localStorage.removeItem('access_token')
    navigate('/')
}
const getProfile= async () => {
    const JWT = localStorage.getItem('access_token');
    const response = await fetch ('http://localhost:3000/auth/profile', {
    method:'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWT}`
    }
})
   const user = await response.json();
   if (user) {navigate ('/profile', {state:user})}
}

return (
    <>
    <div>Home</div>
    <button onClick={onClick}>SignOut</button>
    <button onClick={getProfile}>Profile</button>
    </>
    )
}