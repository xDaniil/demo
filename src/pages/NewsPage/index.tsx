import { observer } from "mobx-react-lite";
import { News } from "../../components";
import { useStore } from "../../hooks";
import { NewsContainer } from "./styles";

export const NewsPage = observer(() => {
  const {
    news: { newsArray },
  } = useStore();
  return (
    <NewsContainer>
      {newsArray.map((newsItem) => {
        return <News {...newsItem}></News>;
      })}
    </NewsContainer>
  );
});
