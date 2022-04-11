import { WEBSOCKET_BASE_URL, WEBSOCKET_TOKEN } from "../../constants";
import { InstanceRootStoreModel } from "../../store";
import { applyMessage } from "./applyMessage";
import { WebSocketMessage } from "./types";

let socket: WebSocket | undefined;

export const registerSocket = (
  store: Pick<InstanceRootStoreModel, "trades">,
  onOpen: (socket: WebSocket) => void,
  onLostConnection?: () => {}
) => {
  const newSocket = () => {
    if (
      socket?.readyState === socket?.OPEN ||
      socket?.readyState === socket?.CONNECTING
    ) {
      socket?.close();
    }

    socket = new WebSocket(`${WEBSOCKET_BASE_URL}?token=${WEBSOCKET_TOKEN}`);

    socket.onopen = async (event) => {
      socket && onOpen(socket);
    };

    socket.onmessage = async (event) => {
      try {
        const message: WebSocketMessage = JSON.parse(event.data);

        applyMessage(message, store);
      } catch (error) {
        console.error(`Socket. DataBaseUpdate: `, error);
      }
    };

    socket.onerror = (event) => {
      console.error("Socket Error:", event);
    };

    socket.onclose = (event) => {
      onLostConnection && onLostConnection();

      setTimeout(() => {
        if (socket?.readyState === socket?.CLOSED) {
          newSocket();
        }
      }, 5000);
    };
  };

  newSocket();

  document.addEventListener(
    "visibilitychange",
    () => {
      if (
        socket?.readyState !== socket?.OPEN &&
        socket?.readyState !== socket?.CONNECTING
      ) {
        newSocket();
      }
    },
    false
  );
};

export const closeSocket = () => {
  if (socket) {
    socket.close();
  }
};
