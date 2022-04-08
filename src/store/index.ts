import { flow, Instance, SnapshotIn, types } from "mobx-state-tree";
import { fetchNews, registerSocket } from "../api";
import { NewsStoreModel } from "./NewsStoreModel";
import { TradesStoreModel } from "./TradesStoreModel.ts";
import { handleTradesSocketOpen } from "./TradesStoreModel.ts/handleTradesSocketOpen";

const initialStore = {
  trades: {},
  news: {},
};

const handleSocketOpen = async (socket: WebSocket) => {
  handleTradesSocketOpen(socket);
};

export const RootStoreModel = types
  .model({
    trades: TradesStoreModel,
    news: NewsStoreModel,
  })
  .actions((self) => ({
    init: flow(function* () {
      const [news] = yield Promise.all([fetchNews()]);

      self.news.entries.replace(news);

      registerSocket(self, handleSocketOpen);
    }),
  }));

export const rootStore = RootStoreModel.create(initialStore);

(async () => {
  await import("mobx-devtools-mst").then(({ default: makeInspectable }) => {
    makeInspectable(rootStore);
  });
})();

export type SnapshotInRootStoreModel = SnapshotIn<typeof RootStoreModel>;
export type InstanceRootStoreModel = Instance<typeof RootStoreModel>;
