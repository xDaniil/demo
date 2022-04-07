import { MessageType, MSTPath } from "./types";

const getSFSPath = (id: ID) => ({
  [MessageType.TRADES]: `/trades/${id}`,
});

export const getPath = (messageType: MessageType, itemID: ID): MSTPath => {
  return getSFSPath(itemID)[messageType];
};
