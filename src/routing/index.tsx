import { observer } from "mobx-react-lite";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Layout } from "../components";
import { NewsPage, TradesPage } from "../pages";
import { NewsItemPage } from "../pages/NewsPage/NewsItemPage";
import { RouteNames, RouteIds } from "./RouteNames";

export const RoutesProvider = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewsPage />} />

          <Route path={RouteNames.NEWS}>
            <Route index element={<NewsPage />} />

            <Route path={RouteIds.NEWS_ID} element={<NewsItemPage />}></Route>
          </Route>

          <Route path={RouteNames.TRADES} element={<TradesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
});
