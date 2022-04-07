import styled from "styled-components";
import { Typogaphy } from "../Typography";

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: red;
  height: 50px;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Typogaphy type="h1">Hello World!</Typogaphy>
    </HeaderContainer>
  );
};
