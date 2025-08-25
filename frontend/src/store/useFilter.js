import { create } from "zustand";

const usefilter = create((set) => ({
  brandval: [],
  categoryval: [],

  toggleBrand: (brand, checked) =>
    set((state) => ({
      brandval: checked
        ? [...state.brandval, brand]
        : state.brandval.filter((b) => b !== brand),
    })),

  toggleCategory: (category, checked) =>
    set((state) => ({
      categoryval: checked
        ? [...state.categoryval, category]
        : state.categoryval.filter((c) => c !== category),
    })),

  resetFilters: () => set({ brandval: [], categoryval: [] }),
}));

export default usefilter;
