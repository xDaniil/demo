import { Instance } from "mobx-state-tree";
import { createContext, useContext } from "react";
import { rootStore, RootStoreModel } from "../store";

export type StoreInstance = Instance<typeof RootStoreModel>;

const StoreContext = createContext(rootStore);

export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext<StoreInstance>(StoreContext);
