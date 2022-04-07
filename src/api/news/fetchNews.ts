import { api } from "..";
import { objectsArrayToMap } from "../../utils";
import { NewsResponse } from "./types";

export const fetchNews = async () => {
  try {
    return objectsArrayToMap(await api.get("/news").json<NewsResponse[]>());
  } catch (error) {
    console.error(error);
  }
};
