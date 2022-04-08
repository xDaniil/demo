import { Instance, SnapshotIn, types } from "mobx-state-tree";
import { NewsModel } from "./NewsModel";

export const NewsStoreModel = types
  .model("News Store Model", {
    entries: types.map(NewsModel),
  })
  .views((self) => ({
    get newsArray() {
      return [...self.entries.values()];
    },
  }));

export type SnapshotInNewsStoreModel = SnapshotIn<typeof NewsStoreModel>;
export type InstanceNewsStoreModel = Instance<typeof NewsStoreModel>;
