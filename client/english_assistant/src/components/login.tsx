import { MainContainer, WelcomeText, InputContainer, Input, ButtonContainer, Button, LoginWith, HorizontalRule, IconsContainer, ForgotPassword, Icon} from "../styles";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import {FacebookBackground, TwitterBackground, InstagramBackground, GoogleBackground} from '../constants/colors';
import {useState} from 'react';
import { useNavigate } from "react-router-dom";

interface inputData {
    username:string;
    password:string;
}

export const Login:React.FC = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState<inputData>({username:"",password:""});
    const onChangeHandler = (e:any) => {
    setInputData({...inputData, [e.target.name]:e.target.value})
    }

    const onSignInHandler = async (e:any) => {
        e.preventDefault();
        console.log(JSON.stringify(inputData));
        const response = await fetch('http://localhost:3000/auth/login', {method:'POST', headers: {
            'Content-Type': 'application/json',
          },body:JSON.stringify(inputData)})
        const {access_token} = await response.json();
        if (access_token) {
            localStorage.setItem('access_token',access_token)
            navigate("/")
        }
    }

    return (
<MainContainer>
<WelcomeText>Welcome</WelcomeText>
<InputContainer>
     <Input type="text" placeholder="User name" name="username" onChange={onChangeHandler}/>
     <Input type="password" placeholder="Password" name ="password" onChange={onChangeHandler} />
</InputContainer>
   <ButtonContainer>
     <Button content="Sign Up" onClick = {onSignInHandler} />
   </ButtonContainer>
   <LoginWith>OR LOGIN WITH</LoginWith>
   <HorizontalRule />
   <IconsContainer>
     <Icon color={FacebookBackground}>
       <FaFacebookF />
     </Icon>
     <Icon color={InstagramBackground}>
       <FaInstagram />
     </Icon>
     <Icon color={TwitterBackground}>
       <FaTwitter />
     </Icon>
     <Icon color={GoogleBackground}>
       <FaGoogle />
     </Icon>
   </IconsContainer>
   <ForgotPassword>Forgot Password ?</ForgotPassword>
</MainContainer>
    )
}

