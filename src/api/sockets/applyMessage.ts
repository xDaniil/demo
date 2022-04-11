import { applyPatch } from "mobx-state-tree";
import { last } from "ramda";
import { InstanceRootStoreModel } from "../../store";
import { InstanceTradeModel } from "../../store/TradesStoreModel.ts";

import { getPath } from "./getPath";
import { MessageType, WebSocketMessage } from "./types";

const validateTradeMessage = (
  item: WebSocketMessage,
  currrentStore?: InstanceTradeModel
) => {
  const lastItem = last(item.data);

  if (!lastItem) {
    return {};
  }

  const id = lastItem.s;

  const lastItemPriceAndTimestamp = {
    price: lastItem.p,
    timestamp: lastItem.t,
  };

  if (!currrentStore) {
    return {
      id,
      items: [lastItemPriceAndTimestamp],
    };
  }

  return {
    id,
    items: [...currrentStore.items, { ...lastItemPriceAndTimestamp }],
  };
};

export const applyMessage = (
  message: WebSocketMessage,
  store: Pick<InstanceRootStoreModel, "trades">
) => {
  try {
    switch (message.type) {
      case MessageType.TRADES: {
        const id = last(message.data)?.s;

        if (!id) {
          return;
        }

        applyPatch(store, {
          op: store.trades.entries.has(id) ? "replace" : "add",
          path: getPath(MessageType.TRADES, id),
          value: validateTradeMessage(message, store.trades.entries.get(id)),
        });

        break;
      }

      default:
        console.warn(
          `Unknown Message Type: ${message.type}. Skip message with id ${message.id}`
        );
    }
  } catch (error) {
    console.error(
      `Error when apply Socket Message with id: ${message.id}. ${error}`
    );
  }
};
