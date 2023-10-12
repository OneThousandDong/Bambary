import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import {zustandStorage} from './mmkv';

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
  getScore: (key: string) => number[];
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
    }),
    {
      name: 'world',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useWorldStore;
