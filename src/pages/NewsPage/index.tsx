import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks";

export const NewsPage = observer(() => {
  const {
    news: { newsArray },
  } = useStore();
  console.log(newsArray);

  return <></>;
});
