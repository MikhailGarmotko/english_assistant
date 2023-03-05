import { Home } from './home';
import { Toggle } from './toggle';
import { Menu } from './menu';
import { useState } from 'react';
import { Profile } from './profile';
import { NavBar } from './homeStyle';
import { HomeContainer } from './homeStyle';
import { CgProfile } from 'react-icons/cg';
import { FaBars } from 'react-icons/fa';

export const HomePage = () => {
  const [navMenuToggled, setNavMenuToggled] = useState(false);
  const [navProfileToggled, setNavProfileToggled] = useState(false);
  const handleNavToggle = () => {
    setNavMenuToggled(!navMenuToggled);
  };
  const handleProfileToggle = () => {
    setNavProfileToggled(!navProfileToggled);
  };
  return (
    <HomeContainer>
      <NavBar>
        <Toggle handleFunction={handleProfileToggle} component={<CgProfile />} />
        {navProfileToggled ? <Profile handleFunction={handleProfileToggle} /> : null}
        <Toggle handleFunction={handleNavToggle} component={<FaBars />} />
        {navMenuToggled ? <Menu handleFunction={handleNavToggle} /> : null}
      </NavBar>
      <Home />
    </HomeContainer>
  );
};
