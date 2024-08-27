import { create } from "zustand";
import type { Book, User } from "./definitions";
import { devtools } from "zustand/middleware";

type AuthState = {
  user: User | null;
  setUser: (newUser: User) => void;
  logout: () => void;
};

type BookState = {
  books: Book[];
  setBooks: (newBooks: Book[]) => void;
};

const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    user: null,
    setUser: (newUser: User) => set({ user: newUser }),
    logout: () => set({ user: null }),
  }))
);

const useBookStore = create<BookState>()(
  devtools((set) => ({
    books: [],
    setBooks: (newBooks: Book[]) => set({ books: newBooks }),
  }))
);

export default useAuthStore;
