import {create} from 'zustand';

export interface WorldState {
  languageState: string;
  setLanguageState: (languageState: string) => void;
}
const useWorldStore = create<WorldState>(set => ({
  languageState: 'VI',
  setLanguageState: (languageState: string) => set({languageState}),
}));

export default useWorldStore;
