import { create } from "zustand";

interface ArtemState {
  found: boolean;
  setFound: (val: boolean) => void;
}

export const useArtem = create<ArtemState>((set) => ({
  found: false,
  setFound: (val) => set({ found: val }),
}));
