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
  height: calc(100vh - 92px);
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
