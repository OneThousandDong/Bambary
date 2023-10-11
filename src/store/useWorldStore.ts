import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { zustandStorage } from './mmkv';

type Menu = {
  quantityQuestionCountries: number;
  scoreCountries: number[];
}

export interface WorldState {
  languageState: string;
  setLanguageState: (languageState: string) => void;
  // // Countries
  // quantityQuestionCountries: number;
  // setQuantityQuestionCountries: (quantityQuestion: number) => void;
  // scoreCountries: number[];
  // setScoreCountries: (scoreCountries: number[]) => void;
  // // World
  // quantityQuestionWorld: string;
  // setQuantityQuestionWorld: (quantityQuestion: string) => void;
  //Country/World/Africa/Asia/Europe/NAmerica/SAmerica/Oceania
  countryMenu: Menu;
  setCountryMenu: (countryMenu: Menu) => void;
  worldMenu: Menu;
  setWorldMenu: (worldMenu: Menu) => void;
  asiaMenu: Menu;
  setAsiaMenu: (asiaMenu: Menu) => void;
  africaMenu: Menu;
  setAfricaMenu: (africaMenu: Menu) => void;
  europeMenu: Menu;
  setEuropeMenu: (europeMenu: Menu) => void;
  nAmericaMenu: Menu;
  setNAmericaMenu: (nAmericaMenu: Menu) => void;
  sAmericaMenu: Menu;
  setSAmericaMenu: (sAmericaMenu: Menu) => void;
  oceaniaMenu: Menu;
  setOceaniaMenu: (oceaniaMenu: Menu) => void;
}

const useWorldStore = create<WorldState>()(
  persist(
    (set, get) => ({
      languageState: 'VI',
      setLanguageState: (languageState: string) => set({ languageState }),
      // // Countries
      // quantityQuestionCountries: 10,
      // setQuantityQuestionCountries: (quantityQuestionCountries: number) =>
      //   set({quantityQuestionCountries}),
      // scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // setScoreCountries: (scoreCountries: number[]) => set({scoreCountries}),
      // // World
      // quantityQuestionWorld: '10',
      // setQuantityQuestionWorld: (quantityQuestionWorld: string) =>
      //   set({quantityQuestionWorld}),
      countryMenu: {
        quantityQuestionCountries: 10,
        scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      setCountryMenu: (countryMenu: Menu) => set({ countryMenu }),
      worldMenu: {
        quantityQuestionCountries: 10,
        scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      setWorldMenu: (worldMenu: Menu) => set({ worldMenu }),
      asiaMenu: {
        quantityQuestionCountries: 10,
        scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      setAsiaMenu: (asiaMenu: Menu) => set({ asiaMenu }),
      africaMenu: {
        quantityQuestionCountries: 10,
        scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      setAfricaMenu: (africaMenu: Menu) => set({ africaMenu }),
      europeMenu: {
        quantityQuestionCountries: 10,
        scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      setEuropeMenu: (europeMenu: Menu) => set({ europeMenu }),
      nAmericaMenu: {
        quantityQuestionCountries: 10,
        scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      setNAmericaMenu: (nAmericaMenu: Menu) => set({ nAmericaMenu }),
      sAmericaMenu: {
        quantityQuestionCountries: 10,
        scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      setSAmericaMenu: (sAmericaMenu: Menu) => set({ sAmericaMenu }),
      oceaniaMenu: {
        quantityQuestionCountries: 10,
        scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      setOceaniaMenu: (oceaniaMenu: Menu) => set({ oceaniaMenu }),
    }),
    {
      name: 'world',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useWorldStore;
