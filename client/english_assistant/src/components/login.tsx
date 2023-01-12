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
}

type Decoded = {
  name:string;
  email:string;
  jti:string;
}


export const Login:React.FC = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState<inputData>({username:"",password:""});
    const onChangeHandler = (e:any) => {
    setInputData({...inputData, [e.target.name]:e.target.value})
    }

    const googleAuth = async () => {
    const response = await fetch ('http://localhost:3000/google', {method:'GET',headers: {
        'Content-Type': 'application/json',
    }});
    const data = await response.json()
    if (data) console.log(data)
    }

    const onSignInHandler = async (e:any) => {
        e.preventDefault();
        console.log(JSON.stringify(inputData));
        const response = await fetch('http://localhost:3000/auth/login', {method:'POST', headers: {
            'Content-Type': 'application/json',
          },body:JSON.stringify(inputData)});
        const {access_token} = await response.json();
        if (access_token) {
            localStorage.setItem('access_token',access_token)
            navigate("/")
        }
        else navigate('signup')
        
    }

    return (
<MainContainer>
<WelcomeText>Welcome</WelcomeText>
<InputContainer height ={'20%'}>
     <Input type="text" placeholder="User name" name="username" onChange={onChangeHandler}/>
     <Input type="password" placeholder="Password" name ="password" onChange={onChangeHandler} />
</InputContainer>
   <ButtonContainer>
     <Button content="Sign In" onClick = {onSignInHandler} />
   </ButtonContainer>
   <LoginWith>OR LOGIN WITH</LoginWith>
   <HorizontalRule />
   <IconsContainer>
     {/* <Icon color={FacebookBackground}>
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
     </Icon> */}
     {/* <Icon color={GoogleBackground}>
       <FaGoogle onClick = {googleAuth}/>
     </Icon> */}
     <GoogleOAuthProvider clientId = "78282669505-d1podqbm237lt98p7t726q7ap8a2mer4.apps.googleusercontent.com">
     <GoogleLogin
             onSuccess={async (credentialResponse:any) => {
             const decoded:Decoded = jwt_decode(credentialResponse.credential);
             const {name:username, email, jti:password} = decoded; 
             console.log(username,email,password);
             const response = await fetch('http://localhost:3000/auth/google', {method:'POST', headers: {
            'Content-Type': 'application/json',
          },body:JSON.stringify({username,email,password})});
        const {access_token, ...data} = await response.json();
        debugger;
        if (access_token) {
            localStorage.setItem('access_token',access_token)
            navigate("/")
        }
                        }}
             onError={() => {
               console.log("Login Failed");
             }}
           />
     </GoogleOAuthProvider>
     
   </IconsContainer>
   <ForgotPassword>Forgot Password ?</ForgotPassword>
</MainContainer>
    )
}

