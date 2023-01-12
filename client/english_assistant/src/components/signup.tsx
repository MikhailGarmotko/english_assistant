import { MainContainer, WelcomeText, InputContainer, Input, ButtonContainer, Button, LoginWith, HorizontalRule, IconsContainer, ForgotPassword, Icon} from "../styles";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import {FacebookBackground, TwitterBackground, InstagramBackground, GoogleBackground} from '../constants/colors';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

interface inputData {
    username:string;
    password:string;
    email:string; 
}

export const SignUp:React.FC = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState<inputData>({username:"",password:"",email:""});
    const [emailIsExisted, setEmailIsExisted] = useState(false);
    const onChangeHandler = (e:any) => {
    setInputData({...inputData, [e.target.name]:e.target.value})
    }


    const onSignUpHandler = async (e:any) => {
        e.preventDefault();
        console.log(JSON.stringify(inputData));
        const response = await fetch('http://localhost:3000/user/create', {method:'POST', headers: {
            'Content-Type': 'application/json',
          },body:JSON.stringify(inputData)});
        const {message} = await response.json();

        if (message) setEmailIsExisted(true);
        
        navigate("/login")
    }

    return (
<MainContainer>
<WelcomeText>Welcome</WelcomeText>
<InputContainer height="50%">
     <Input type="text" placeholder="User name" name="username" onChange={onChangeHandler}/>
     <Input type="password" placeholder="Password" name ="password" onChange={onChangeHandler} />
     <Input type="email" placeholder="Email" name ="email" onChange={onChangeHandler} />
     {emailIsExisted ? (<div style ={{color:'red'}}>Email is existed</div>):<></> }
</InputContainer>
   <ButtonContainer>
     <Button content="Sign Up" onClick = {onSignUpHandler} />
   </ButtonContainer>
   
</MainContainer>
    )
}