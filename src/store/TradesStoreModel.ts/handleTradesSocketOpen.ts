export const handleTradesSocketOpen = (socket: WebSocket) => {
  socket.send('{"type":"subscribe","symbol":"AAPL"}');
  socket.send('{"type":"subscribe","symbol":"BINANCE:BTCUSDT"}');
};
