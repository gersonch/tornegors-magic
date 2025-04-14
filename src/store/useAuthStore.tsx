import { create } from "zustand";
import { User } from "@supabase/auth-js";

interface AuthStore {
  user: User | null;
  loading: boolean; // Nuevo estado para manejar la carga
  setLoading: (loading: boolean) => void; // Función para establecer el estado de carga
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: false, // Nuevo estado para manejar la carga
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  setLoading: (loading) => set({ loading }),
}));
