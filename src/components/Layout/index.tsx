import { ReactNode } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MainArea = styled.div`
  display: flex;
  flex-grow: 1;
`;

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  console.log("here");

  return (
    <Container>
      <Header></Header>
      <MainArea>{children}</MainArea>
      <Footer></Footer>
    </Container>
  );
};
