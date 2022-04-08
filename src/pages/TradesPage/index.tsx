import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks";

export const TradesPage = observer(() => {
  const {
    trades: { tradesArray },
  } = useStore();

  console.log(tradesArray);

  return <></>;
});
