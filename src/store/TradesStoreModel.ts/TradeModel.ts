import { Instance, SnapshotIn, types } from "mobx-state-tree";

const TradeItem = types.model("Trade Item", {
  timestamp: types.number,
  price: types.number,
});

export const TradeModel = types
  .model("Trade Model", {
    id: types.identifier,
    items: types.array(TradeItem),
  })
  .views((self) => ({
    get d3DataSource() {
      return {
        id: self.id,
        items: self.items
          .slice()
          .sort(
            ({ timestamp }, { timestamp: nextTimestamp }) =>
              timestamp - nextTimestamp
          )
          .map(({ timestamp, price }) => ({
            timestamp,
            value: price,
          })),
      };
    },
  }));

export type SnapshotInTradeModel = SnapshotIn<typeof TradeModel>;
export type InstanceTradeModel = Instance<typeof TradeModel>;
