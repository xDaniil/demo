export enum RouteNames {
  NEWS = "/news",
  TRADES = "/trades",
}

export enum RouteIds {
  NEWS_ID = ":newsId",
}

export type RouteParams = {
  newsId: string;
};
