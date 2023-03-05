import { CgProfile } from 'react-icons/cg';
import { StyledMenu, StyledLink, CloseToggle } from './homeStyle';
import { FaTimes } from 'react-icons/fa';

export const Profile = ({handleFunction, component}:any) => {
  return (
    <StyledMenu>
      <StyledLink
        className="animate__animated animate__fadeInRight"
        onClick={handleFunction}
        to="/profile">
        Profile
      </StyledLink>
      <StyledLink
        className="animate__animated animate__fadeInRight"
        onClick={() => {localStorage.removeItem('access_token'); localStorage.removeItem('user_id');handleFunction()}}
        to="/">
        Sign Out
      </StyledLink>
      <CloseToggle className="animate__animated animate__fadeInRight" onClick={handleFunction}>
        <FaTimes />
      </CloseToggle>
    </StyledMenu>
  );
};


