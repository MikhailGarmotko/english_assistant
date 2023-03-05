import styled from 'styled-components';
import React from 'react';

export const MainContainerHome = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  flex-direction: column;
  height:98vh;
  width: 98vw;
`;

export const Profile = styled.div`
border-radius:50%;
color: white;
display:flex;
width:50px;
height:60%;
background-color:red;
align-items:center;
justify-content:center;
`

interface HomeInterface {
  flex:string, 
}
interface HomeInterface {
  flex:string, 
  children:JSX.Element
}
export const HomeContainerComponent:React.FC<HomeInterface> = ({flex,children}) => {
  return <HomeComponent flex={flex}  >{children}</HomeComponent>
}
const HomeComponent = styled.div<HomeInterface>`
flex : ${ (props) => props.flex};
width:100%;
box-shadow: 0 4px 2px -2px gray;
`;

export const MainContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: dark;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

export const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

export const InfoText = styled.h5`
  margin: 3rem 0 2rem 0;
`;

interface InputParams {
  type: string;
  placeholder: string;
  name?: string;
  height?: string;
  /* eslint-disable */ 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /* eslint-enable */
}

export const Input = ({ type, placeholder, name, onChange }: InputParams) => {
  return <StyledInput type={type} placeholder={placeholder} name={name} onChange={onChange} />;
};

const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #b9abe099;
    font-weight: 100;
    font-size: 1rem;
  }
`;

interface InputContainerPatternInterface {
  height: string;
}

type InputContainerParams = {
  height: string;
  children: JSX.Element[];
};

export const InputContainer: React.FC<InputContainerParams> = ({ height, children }) => {
  return <InputContainerPattern height={height}>{children}</InputContainerPattern>;
};

export const InputContainerPattern = styled.div<InputContainerPatternInterface>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: ${(props) => props.height};
  width: 100%;
`;

interface ButtonParams {
  content: string;
  /* eslint-disable */ 
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /* eslint-enable */
}

export const Button = ({ content, onClick }: ButtonParams) => {
  return <StyledButton onClick={onClick}>{content}</StyledButton>;
};

const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const LoginWith = styled.h5`
  cursor: pointer;
`;

export const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

type IconParams = {
  color: string;
  children: JSX.Element;
};

interface IconProps {
  background: string;
}

export const Icon: React.FC<IconParams> = ({ color, children }) => {
  return <StyledIcon background={color}>{children}</StyledIcon>;
};

const StyledIcon = styled.div<IconProps>`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const ForgotPassword = styled.h4`
  cursor: pointer;
`;
