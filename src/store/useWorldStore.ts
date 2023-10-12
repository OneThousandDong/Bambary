import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {zustandStorage} from './mmkv';

type Type = {
  quantity: number;
  score: number[];
};

export type Menu = {
  [key: string]: any;
  // country
  quantityCountry: number;
  scoreCountry: number[];

  //world
  quantityWorld: number;
  scoreWorld: number[];

  //africa
  quantityAfrica: number;
  scoreAfrica: number[];

  //asia
  quantityAsia: number;
  scoreAsia: number[];

  //eu
  quantityEu: number;
  scoreEu: number[];

  //namerica
  quantityNAmerica: number;
  scoreNAmerica: number[];

  //samerica
  quantitySAmerica: number;
  scoreSAmerica: number[];

  //oceania
  quantityOceania: number;
  scoreOceania: number[];
};

export interface WorldState {
  languageState: string;
  setLanguageState: (languageState: string) => void;
  menuQuestion: Menu;
  setMenuQuestion: (key: string, value: any) => void;
  getQuantity: (key: string) => number;
  getScore: (key: string) => [];
  // // Countries
  // quantityCountries: number;
  // setquantityCountries: (quantity: number) => void;
  // scoreCountries: number[];
  // setScoreCountries: (scoreCountries: number[]) => void;
  // // World
  // quantityWorld: string;
  // setquantityWorld: (quantity: string) => void;
  //Country/World/Africa/Asia/Europe/NAmerica/SAmerica/Oceania
  // countryMenu: Menu;
  // setCountryMenu: (key: string, value: any) => void;
  // worldMenu: Menu;
  // setWorldMenu: (key: string, value: any) => void;
  // asiaMenu: Menu;
  // setAsiaMenu: (key: string, value: any) => void;
  // africaMenu: Menu;
  // setAfricaMenu: (key: string, value: any) => void;
  // europeMenu: Menu;
  // setEuropeMenu: (key: string, value: any) => void;
  // nAmericaMenu: Menu;
  // setNAmericaMenu: (key: string, value: any) => void;
  // sAmericaMenu: Menu;
  // setSAmericaMenu: (key: string, value: any) => void;
  // oceaniaMenu: Menu;
  // setOceaniaMenu: (key: string, value: any) => void;
}

const useWorldStore = create<WorldState>()(
  persist(
    (set, get) => ({
      languageState: 'VI',
      setLanguageState: (languageState: string) => set({languageState}),

      menuQuestion: {
        // country
        quantityCountry: 10,
        scoreCountry: [0, 0, 0, 0, 0, 0, 0, 0, 0],

        //world
        quantityWorld: 10,
        scoreWorld: [0, 0, 0, 0, 0, 0, 0, 0, 0],

        //africa
        quantityAfrica: 10,
        scoreAfrica: [0, 0, 0, 0, 0, 0, 0, 0, 0],

        //asia
        quantityAsia: 10,
        scoreAsia: [0, 0, 0, 0, 0, 0, 0, 0, 0],

        //eu
        quantityEu: 10,
        scoreEu: [0, 0, 0, 0, 0, 0, 0, 0, 0],

        //namerica
        quantityNAmerica: 10,
        scoreNAmerica: [0, 0, 0, 0, 0, 0, 0, 0, 0],

        //samerica
        quantitySAmerica: 10,
        scoreSAmerica: [0, 0, 0, 0, 0, 0, 0, 0, 0],

        //oceania
        quantityOceania: 10,
        scoreOceania: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      setMenuQuestion: (key: string, value: any) =>
        set({
          menuQuestion: {
            ...get().menuQuestion,
            [key]: value,
          },
        }),
      getQuantity: (key: string) => {
        return get().menuQuestion[key];
      },
      getScore: (key: string) => {
        return get().menuQuestion[key];
      },
      // // Countries
      // quantityCountries: 10,
      // setquantityCountries: (quantityCountries: number) =>
      //   set({quantityCountries}),
      // scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // setScoreCountries: (scoreCountries: number[]) => set({scoreCountries}),
      // // World
      // quantityWorld: '10',
      // setquantityWorld: (quantityWorld: string) =>
      //   set({quantityWorld}),
      // countryMenu: {
      //   quantityCountries: 10,
      //   scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // },
      // setCountryMenu: (key: string, value: string) =>
      //   set({
      //     countryMenu: {
      //       ...get().countryMenu,
      //       [key]: value,
      //     },
      //   }),
      // worldMenu: {
      //   quantityCountries: 10,
      //   scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // },
      // setWorldMenu: (key: string, value: string) =>
      //   set({
      //     worldMenu: {
      //       ...get().worldMenu,
      //       [key]: value,
      //     },
      //   }),
      // asiaMenu: {
      //   quantityCountries: 10,
      //   scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // },
      // setAsiaMenu: (key: string, value: string) =>
      //   set({
      //     asiaMenu: {
      //       ...get().asiaMenu,
      //       [key]: value,
      //     },
      //   }),
      // africaMenu: {
      //   quantityCountries: 10,
      //   scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // },
      // setAfricaMenu: (key: string, value: string) =>
      //   set({
      //     africaMenu: {
      //       ...get().africaMenu,
      //       [key]: value,
      //     },
      //   }),
      // europeMenu: {
      //   quantityCountries: 10,
      //   scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // },
      // setEuropeMenu: (key: string, value: string) =>
      //   set({
      //     europeMenu: {
      //       ...get().europeMenu,
      //       [key]: value,
      //     },
      //   }),
      // nAmericaMenu: {
      //   quantityCountries: 10,
      //   scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // },
      // setNAmericaMenu: (key: string, value: string) =>
      //   set({
      //     nAmericaMenu: {
      //       ...get().nAmericaMenu,
      //       [key]: value,
      //     },
      //   }),
      // sAmericaMenu: {
      //   quantityCountries: 10,
      //   scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // },
      // setSAmericaMenu: (key: string, value: string) =>
      //   set({
      //     sAmericaMenu: {
      //       ...get().sAmericaMenu,
      //       [key]: value,
      //     },
      //   }),
      // oceaniaMenu: {
      //   quantityCountries: 10,
      //   scoreCountries: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      // },
      // setOceaniaMenu: (key: string, value: string) =>
      //   set({
      //     oceaniaMenu: {
      //       ...get().oceaniaMenu,
      //       [key]: value,
      //     },
      //   }),
    }),
    {
      name: 'world',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useWorldStore;
