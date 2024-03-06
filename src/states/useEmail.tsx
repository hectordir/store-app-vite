import { create } from "zustand";

type Email = {
  value: string;
  setEmail: (email: string) => void;
};

export const useEmail = create<Email>((set) => ({
  value: "",

  setEmail: (email) => {
    localStorage.setItem("email", email);
    set((state) => {
      return { ...state, value: email };
    });
  },
}));
