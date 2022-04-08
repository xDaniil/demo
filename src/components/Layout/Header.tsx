import styled from "styled-components";
import { Typography } from "../Typography";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 16px;
  background-color: ${(props) => props.theme.colors.light};
  height: 50px;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Typography color="secondary" type="h1">
        Hello World!
      </Typography>
    </HeaderContainer>
  );
};
