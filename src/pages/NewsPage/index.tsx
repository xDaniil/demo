import { observer } from "mobx-react-lite";
import { News } from "../../components";
import { useStore } from "../../hooks";
import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomPadding = styled.div`
  padding-bottom: 32px;
  width: 100%;
`;

export const NewsPage = observer(() => {
  const {
    news: { newsArray },
  } = useStore();
  return (
    <>
      <NewsContainer>
        {newsArray.map((newsItem) => {
          return <News {...newsItem}></News>;
        })}
      </NewsContainer>

      <BottomPadding />
    </>
  );
});
