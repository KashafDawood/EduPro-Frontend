import { create } from "zustand";
import { persist } from "zustand/middleware";

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

const getInitialState = (): State => ({
  _id: typeof window !== "undefined" ? localStorage.getItem("_id") || "" : "",
  name: typeof window !== "undefined" ? localStorage.getItem("name") || "" : "",
  email:
    typeof window !== "undefined" ? localStorage.getItem("email") || "" : "",
  isAuth:
    typeof window !== "undefined"
      ? localStorage.getItem("isAuth") === "true"
      : false,
  token: "", // Do not load token from localStorage
});

type UserStore = State & Action;

export const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      ...getInitialState(),
      setAuth: (isAuth: boolean) => set({ isAuth }),
      setUser: (user) =>
        set({ _id: user._id, name: user.name, email: user.email }),
      clearUser: () =>
        set({ _id: "", name: "", email: "", isAuth: false, token: "" }),
      setToken: (token: string) => set({ token }),
    }),
    {
      name: "user-storage", // unique name for the storage
      getStorage: () => (typeof window !== "undefined" ? localStorage : null), // handle SSR
      partialize: (state) => ({
        _id: state._id,
        name: state.name,
        email: state.email,
        isAuth: state.isAuth,
        token: state.token,
      }),
    }
  )
);
