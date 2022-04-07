import { flow, Instance, SnapshotIn, types } from "mobx-state-tree";
import { fetchNews, registerSocket } from "../api";
import { TradesStoreModel } from "./TradesStoreModel.ts";

const initialStore = {
  trades: {},
};

export const RootStoreModel = types
  .model({
    trades: TradesStoreModel,
  })
  .actions((self) => ({
    init: flow(function* () {
      const [news] = yield Promise.all([fetchNews()]);

      self.trades.entries.replace(news);

      registerSocket(self);
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
