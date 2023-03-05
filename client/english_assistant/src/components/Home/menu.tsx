import { StyledMenu, StyledLink, CloseToggle } from './homeStyle';
import { FaTimes } from 'react-icons/fa';

export const Menu = ({ handleFunction }: any) => {
  return (
    <StyledMenu>
      <StyledLink
        className="animate__animated animate__fadeInRight"
        onClick={handleFunction}
        to="/saveword">
        Save world
      </StyledLink>
      <StyledLink
        className="animate__animated animate__fadeInRight"
        onClick={handleFunction}
        to="/wordlist">
        My Word List
      </StyledLink>
      <StyledLink
        className="animate__animated animate__fadeInRight"
        onClick={handleFunction}
        to="/">
        Train
      </StyledLink>
      <CloseToggle className="animate__animated animate__fadeInRight" onClick={handleFunction}>
        <FaTimes />
      </CloseToggle>
    </StyledMenu>
  );
};
