import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "@/types/User";

export type AuthStore = {
  isAuthenticated: boolean;
  toggleAuth: (isAuthenticated: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setUser: (user) => set({ user }),
      toggleAuth: (val) => set({ isAuthenticated: val }),

      logout: () => {
        localStorage.removeItem("token");
        set({ user: null, isAuthenticated: false });
      },
    }),

    {
      name: "auth-store",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
