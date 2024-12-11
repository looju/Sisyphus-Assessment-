import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ZustandStorage } from "./AsyncStorage";

type CodeStoreType = {
  coin: string;
  addcoin: (value: string) => void;
};

export const useCoinStore = create((set, get) => ({
  coin: "btc-bitcoin",
  order: "Good Till Cancelled",
  addCoin: (value: string) => set({ code: value }),
  addOrder: (value: string) => set({ order: value }),
}));
