import { create } from "zustand";
import { User } from "../useAuth/useAuth";

type Reading = {
  reading_id: number;
  user: User;
  month: string; // '2025-04'
  type: string;
  kilowatts: number;
  submitted_at: string;
};

interface MeterState {
  readings: Reading[];
  addReading: (r: Reading) => void;
}

export const useMeters = create<MeterState>((set) => ({
  readings: [],
  addReading: (r) =>
    set((state) => ({
      readings: [...state.readings, r],
    })),
}));
