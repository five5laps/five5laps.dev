import { create } from "zustand";

export type User = {
  name: string;
  phone: string;
  address: string;
};

interface AuthState {
  user: User | null;
  setUser: (val: User) => void;
  logoutUser: () => void;
  modal: boolean;
  setModal: (val: boolean) => void;

  servicesModal: boolean;
  setServicesModal: (val: boolean) => void;

  readingsModal: boolean;
  setReadingsModal: (val: boolean) => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  setUser: (val) => set({ user: val }),
  modal: false,
  setModal: (val) => set({ modal: val }),

  servicesModal: false,
  setServicesModal: (val) => set({ servicesModal: val }),

  readingsModal: false,
  setReadingsModal: (val) => set({ readingsModal: val }),

  logoutUser: () => set({ user: null }),
}));
