import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {zustandStorage} from './mmkv';

export interface WorldState {
  languageState: string;
  setLanguageState: (languageState: string) => void;
  // Countries
  quantityQuestionCountries: number;
  setQuantityQuestionCountries: (quantityQuestion: number) => void;
  scoreCountries: number[];
  setScoreCountries: (scoreCountries: number[]) => void;
  // World
  quantityQuestionWorld: string;
  setQuantityQuestionWorld: (quantityQuestion: string) => void;
}

const useWorldStore = create<WorldState>()(
  persist(
    (set, get) => ({
      languageState: 'VI',
      setLanguageState: (languageState: string) => set({languageState}),
      // Countries
      quantityQuestionCountries: 10,
      setQuantityQuestionCountries: (quantityQuestionCountries: number) =>
        set({quantityQuestionCountries}),
      scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      setScoreCountries: (scoreCountries: number[]) => set({scoreCountries}),
      // World
      quantityQuestionWorld: '10',
      setQuantityQuestionWorld: (quantityQuestionWorld: string) =>
        set({quantityQuestionWorld}),
    }),
    {
      name: 'world',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useWorldStore;
