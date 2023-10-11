import {create} from 'zustand';

export interface MenuState {
  typeCategory: string;
  setTypeCategory: (typeCategory: string) => void;
  arrayQuestion: [];
  setArrayQuestion: (arrayQuestion: []) => void;
}

const useMenuStore = create<MenuState>((set, get) => ({
  typeCategory: 'Country',
  setTypeCategory: (typeCategory: string) => set({typeCategory}),
  arrayQuestion: [],
  setArrayQuestion: (arrayQuestion: []) => set({arrayQuestion}),
}));

export default useMenuStore;
