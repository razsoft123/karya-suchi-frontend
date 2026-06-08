import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, AuthState } from "../utils/types";

interface AuthStoreState extends AuthState {
  setUser: (user: User | null) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
  setAuth: (auth: boolean) => void;
  isAuthenticated: () => boolean;
}

const useAuthStore = create<AuthStoreState>()(
  persist(
    (set, get) => ({
      user: null,
      loading: false,
      error: false,
      auth: false,

      setUser: (user) =>
        set(() => ({
          user: user,
          auth: user !== null,
          error: false,
        })),

      logout: () =>
        set(() => ({
          user: null,
          auth: false,
          loading: false,
          error: false,
        })),

      setLoading: (loading) =>
        set(() => ({
          loading,
        })),

      setError: (error) =>
        set(() => ({
          error,
        })),

      setAuth: (auth) =>
        set(() => ({
          auth,
        })),

      isAuthenticated: () => get().auth && get().user !== null,
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        user: state.user,
        auth: state.auth,
      }),
    },
  ),
);

export { useAuthStore };
export type { AuthStoreState };
