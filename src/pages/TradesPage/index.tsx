import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks";

export const TradesPage = observer(() => {
  const {
    trades: { tradesArray },
  } = useStore();

  return <div style={{ width: "100%", background: "red" }}></div>;
});
