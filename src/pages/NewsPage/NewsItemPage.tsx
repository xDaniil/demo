import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { useParams } from "react-router";
import { NewsItem } from "../../components/News/NewsItem";
import { useStore } from "../../hooks";
import { RouteParams } from "../../routing/RouteNames";

export const NewsItemPage = observer(() => {
  const {
    news: { entries },
  } = useStore();
  const { newsId } = useParams<RouteParams>();

  const { id, title, body, pictureUrl } = useMemo(() => {
    return { ...entries.get(newsId || "") };
  }, [newsId, entries]);

  if (!id || !title || !body || !pictureUrl) {
    return <></>;
  }

  return <NewsItem id={id} title={title} body={body} pictureUrl={pictureUrl} />;
});
