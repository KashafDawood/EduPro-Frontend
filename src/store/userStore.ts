import { create } from "zustand";

type State = {
  firstName: string;
  lastName: string;
  isAuth: boolean;
};

type Action = {
  setAuth: (isAuth: boolean) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useUserStore = create<State & Action>((set) => ({
  firstName: "Talha",
  lastName: "Masood",
  isAuth: false,
  setAuth: (isAuth: boolean) => set({ isAuth }),
}));
