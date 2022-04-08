import { Instance, SnapshotIn, types } from "mobx-state-tree";

export const TradeModel = types.model("Trade Model", {
  id: types.identifier,
  price: types.number,
  timestamp: types.number,
});

export type SnapshotInTradeModel = SnapshotIn<typeof TradeModel>;
export type InstanceTradeModel = Instance<typeof TradeModel>;
