import styled from 'styled-components';
import wheelImg from '../../images/wheel.gif';



export const MainContainer = styled.div`
width:99vw;
height:99vh;
display:flex;
justify-content:center;
align-items:center;
gap:2rem;
flex-direction:column;
`

export const WheelImg = styled.div`
background-image:url(${wheelImg});
width:200px;
height:200px;
`
export const WordsContainer = styled.div`
display:flex;
width:90vw;
height:60vh;
justify-content:top;
// align-items:center;
flex-direction:column;
border-bottom:1px solid white;
gap:1rem;
padding:1rem;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.97);
overflow:auto;
`

export const WordContainer = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
padding:2rem;
box-shadow: 0 8px 32px 0 rgba(21, 68, 135, 0.27);
font-size:1.5rem;
border-radius:1rem;
`
export const WordTitle  = styled.h1`
text-transform:uppercase;
text-aligh:super left;
`

export const StyledButton = styled.button`
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 25%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;