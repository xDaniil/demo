import { applyPatch } from "mobx-state-tree";
import { InstanceRootStoreModel } from "../../store";

import { getPath } from "./getPath";
import { MessageType, WebSocketMessage } from "./types";

export const applyMessage = (
  message: WebSocketMessage,
  store: Pick<InstanceRootStoreModel, "trades">
) => {
  try {
    switch (message.type) {
      case MessageType.TRADES: {
        const item = {
          ...message.data,
          id: message.data.s,
        };

        applyPatch(store, {
          op: store.trades.entries.has(item.id) ? "replace" : "add",
          path: getPath(MessageType.TRADES, item.id),
          value: item,
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
