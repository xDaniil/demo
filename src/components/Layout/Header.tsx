import { useNavigate } from "react-router";
import styled from "styled-components";
import { RouteNames } from "../../routing/RouteNames";
import { Typography } from "../Typography";

const HeaderContainer = styled.div`
  display: flex;
  padding: 0px 16px;
  background-color: ${(props) => props.theme.colors.light};
  height: 60px;
  align-items: center;
  justify-content: space-between;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > * {
    padding-right: 16px;
  }
`;

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Typography color="secondary" type="h1">
        Daniil's Vege Market
      </Typography>

      <LinksContainer>
        <Typography
          onClick={() => navigate(RouteNames.NEWS)}
          color="secondary"
          type="subtitle"
        >
          News
        </Typography>

        <Typography
          onClick={() => navigate(RouteNames.TRADES)}
          color="secondary"
          type="subtitle"
        >
          Trades
        </Typography>
      </LinksContainer>
    </HeaderContainer>
  );
};
