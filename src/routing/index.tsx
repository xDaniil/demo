import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { NewsPage, TradesPage } from "../pages";
import { RouteNames } from "./RouteNames";

export const RoutesProvider = observer(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteNames.NEWS} element={<NewsPage />} />

        <Route path={RouteNames.TRADES} element={<TradesPage />} />
      </Routes>
    </BrowserRouter>
  );
});
