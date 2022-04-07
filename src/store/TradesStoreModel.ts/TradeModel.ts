import { Instance, SnapshotIn, types } from "mobx-state-tree";

export const TradeModel = types.model("Trade Model", {
  id: types.identifier,
  price: types.string,
  ticker: types.string,
});

export type SnapshotInTradeModel = SnapshotIn<typeof TradeModel>;
export type InstanceTradeModel = Instance<typeof TradeModel>;
