import { Instance, SnapshotIn, types } from "mobx-state-tree";

export const NewsModel = types.model("News Model", {
  id: types.identifier,
  title: types.string,
  body: types.string,
  pictureUrl: types.string,
});

export type SnapshotInNewsModel = SnapshotIn<typeof NewsModel>;
export type InstanceNewsModel = Instance<typeof NewsModel>;
