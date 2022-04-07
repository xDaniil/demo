export type WebSocketMessage = {
  id: string;
  type: number;
  content: {
    price: number;
    ticker: string;
  };
};

export enum MessageType {
  TRADES,
}

export type MSTPath = string;
