import { Instance, SnapshotIn, types } from "mobx-state-tree";
import { TradeModel } from "./TradeModel";

export const TradesStoreModel = types.model("Trades Store Model", {
  entries: types.map(TradeModel),
});

export type SnapshotInTradesStoreModel = SnapshotIn<typeof TradesStoreModel>;
export type InstanceTradesStoreModel = Instance<typeof TradesStoreModel>;
