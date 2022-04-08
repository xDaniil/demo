export type WebSocketMessage = {
  id: string;
  type: string;
  data: {
    p: number;
    s: ID;
    t: number;
    v: number;
  }[];
};

export enum MessageType {
  TRADES = "trade",
}

export type MSTPath = string;
