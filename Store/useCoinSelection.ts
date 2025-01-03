import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ZustandStorage } from "./AsyncStorage";

interface StoreType {
  coin: string;
  order: string;
  currency: string;
  addCoin: (value: string) => void;
  addCurrency: (value: string) => void;
  addOrder: (value: string) => void;
  prices: any[];
  addPrice: (data: Array<any>) => void;
}

export const useCoinStore = create<StoreType>((set, get) => ({
  prices: [],
  coin: "btc-bitcoin",
  order: "Good Till Cancelled",
  currency: "NGN",
  addCoin: (value: string) => set({ coin: value }),
  addOrder: (value: string) => set({ order: value }),
  addCurrency: (value: string) => set({ currency: value }),
  addPrice: (data: Array<any>) => set({ prices: data }),
}));
