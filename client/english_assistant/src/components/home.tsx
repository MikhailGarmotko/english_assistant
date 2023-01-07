import {useState} from 'react'; 
import { useNavigate } from "react-router-dom";

export const Home = () => {
const navigate = useNavigate();
const onClick = () => {
    localStorage.removeItem('access_token')
    navigate('/')
}

return (
    <>
    <div>Home</div>
    <button onClick={onClick}>SignOut</button>
    </>
    )
}