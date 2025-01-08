import { create } from "zustand";

type State = {
  _id: string;
  name: string;
  email: string;
  isAuth: boolean;
  token: string;
};

type Action = {
  setToken: (token: string) => void;
  setAuth: (isAuth: boolean) => void;
  setUser: (user: { _id: string; name: string; email: string }) => void;
  clearUser: () => void;
};

// Create your store, which includes both state and (optionally) actions
export const useUserStore = create<State & Action>((set) => ({
  _id: "",
  name: "",
  email: "",
  isAuth: false,
  token: "",
  setAuth: (isAuth: boolean) => set({ isAuth }),
  setUser: (user) => set({ _id: user._id, name: user.name, email: user.email }),
  clearUser: () => set({ _id: "", name: "", email: "", isAuth: false }),
  setToken: (token: string) => set({ token }),
}));
