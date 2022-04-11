import { Outlet } from "react-router";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MainArea = styled.div`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.main};
  padding: 16px;
  overflow: scroll;
  max-height: calc(100% - 92px);
`;

export const Layout = () => {
  return (
    <Container>
      <Header />

      <MainArea>
        <Outlet />
      </MainArea>

      <Footer />
    </Container>
  );
};
