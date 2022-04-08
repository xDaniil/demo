import { MessageType, MSTPath } from "./types";

const getStorePath = (id: ID) => ({
  [MessageType.TRADES]: `/trades/entries/${id}`,
});

export const getPath = (messageType: MessageType, itemID: ID): MSTPath => {
  return getStorePath(itemID)[messageType];
};
