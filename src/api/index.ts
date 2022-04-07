import ky from "ky";
import { API_BASE_URL } from "../constants";

export * from "./sockets";
export * from "./news";

export const api = ky.create({ prefixUrl: API_BASE_URL });
