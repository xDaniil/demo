import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { useParams } from "react-router";
import { useStore } from "../../hooks";
import { RouteParams } from "../../routing/RouteNames";

export const NewsItemPage = observer(() => {
  const {
    news: { entries },
  } = useStore();
  const { newsId } = useParams<RouteParams>();

  const selectedNewsItem = useMemo(() => {
    return { ...entries.get(newsId || "") };
  }, [newsId, entries]);

  return <div>{selectedNewsItem.title}</div>;
});
