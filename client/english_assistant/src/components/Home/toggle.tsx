import { StyledToggle } from './homeStyle';

export const Toggle = ({ handleFunction, component }: any) => {
  return (
    <StyledToggle  onClick={handleFunction}>
      {component}
    </StyledToggle>
  );
};
