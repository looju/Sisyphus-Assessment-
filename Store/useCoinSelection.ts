import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ZustandStorage } from "./AsyncStorage";

type CodeStoreType = {
  coin: string;
  addcoin: (value: string) => void;
};

export const useCoinStore = create(
  persist(
    (set, get) => ({
      coin: "",
      addCoin: (value: string) => set({ code: value }),
    }),
    {
      name: "codeStore", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => ZustandStorage),
    }
  )
);
