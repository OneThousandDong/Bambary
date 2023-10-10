import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { zustandStorage } from './mmkv';

export interface WorldState {
  languageState: string;
  setLanguageState: (languageState: string) => void;
}
// const useWorldStore = create<WorldState>(persist(set, get) => ({
//   languageState: 'VI',
//   setLanguageState: (languageState: string) => set({ languageState }),
// }), {
//   name: 'world',
//   storage: createJSONStorage(() => sessionStorage),
// }));

const useWorldStore = create<WorldState>()(
  persist((set, get) => ({
      languageState: 'VI',
      setLanguageState: (languageState: string) => set({languageState}),
    }),
    {
      name: 'world', 
      storage: createJSONStorage(() => zustandStorage),
    }
  )
)

export default useWorldStore;
