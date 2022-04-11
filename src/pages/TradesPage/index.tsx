import { observer } from "mobx-react-lite";
import { head } from "ramda";
import styled from "styled-components";
import { Chart } from "../../charts";
import { Typography } from "../../components";
import { useStore } from "../../hooks";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TradeBlock = styled.div`
  width: 100%;

  & * > {
    padding-bottom: 8px;
  }
`;

export const TradesPage = observer(() => {
  const {
    trades: { tradesArray },
  } = useStore();

  if (!head(tradesArray)) {
    return <div />;
  }

  return (
    <Container>
      {tradesArray.map((trade) => {
        return (
          <TradeBlock>
            <Typography type="subtitle">{trade.id}</Typography>

            <Chart data={trade?.d3DataSource} />
          </TradeBlock>
        );
      })}
    </Container>
  );
});
