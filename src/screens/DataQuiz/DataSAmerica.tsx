export type country = {
  id: string;
  name: string;
  uri: any;
  answer: string[];
  correct: number;
  index: number;
};
export const DATASAMERICA: country[] = [
  {
    id: 'AR',
    name: 'Argentina',
    uri: "require('../../assets/flagpng/AR.png)",
    answer: ['Argentina', 'Venezuela', 'Guyana', 'Argentina'],
    correct: 3,
    index: 9,
  },
  {
    id: 'BO',
    name: 'Bolivia',
    uri: "require('../../assets/flagpng/BO.png)",
    answer: ['Ecuador', 'Bolivia', 'Venezuela', 'Guyane thuộc Pháp'],
    correct: 1,
    index: 28,
  },
  {
    id: 'BR',
    name: 'Brazil',
    uri: "require('../../assets/flagpng/BR.png)",
    answer: ['Uruguay', 'Colombia', 'Venezuela', 'Brazil'],
    correct: 3,
    index: 29,
  },
  {
    id: 'CL',
    name: 'Chile',
    uri: "require('../../assets/flagpng/CL.png)",
    answer: ['Chile', 'Uruguay', 'Venezuela', 'Brazil'],
    correct: 0,
    index: 44,
  },
  {
    id: 'CO',
    name: 'Colombia',
    uri: "require('../../assets/flagpng/CO.png)",
    answer: ['Colombia', 'Venezuela', 'Guyane thuộc Pháp', 'Argentina'],
    correct: 0,
    index: 47,
  },
  {
    id: 'EC',
    name: 'Ecuador',
    uri: "require('../../assets/flagpng/EC.png)",
    answer: ['Colombia', 'Venezuela', 'Guyane thuộc Pháp', 'Ecuador'],
    correct: 3,
    index: 61,
  },
  {
    id: 'FK',
    name: 'Quần đảo Falkland',
    uri: "require('../../assets/flagpng/FK.png)",
    answer: [
      'Venezuela',
      'Quần đảo Falkland',
      'Argentina',
      'Quần đảo Falkland',
    ],
    correct: 3,
    index: 71,
  },
  {
    id: 'GF',
    name: 'Guyane thuộc Pháp',
    uri: "require('../../assets/flagpng/GF.png)",
    answer: ['Uruguay', 'Venezuela', 'Guyane thuộc Pháp', 'Ecuador'],
    correct: 2,
    index: 83,
  },
  {
    id: 'GY',
    name: 'Guyana',
    uri: "require('../../assets/flagpng/GY.png)",
    answer: ['Chile', 'Peru', 'Venezuela', 'Guyana'],
    correct: 3,
    index: 97,
  },
  {
    id: 'PE',
    name: 'Peru',
    uri: "require('../../assets/flagpng/PE.png)",
    answer: ['Peru', 'Venezuela', 'Brazil', 'Uruguay'],
    correct: 0,
    index: 177,
  },
  {
    id: 'PY',
    name: 'Paraguay',
    uri: "require('../../assets/flagpng/PY.png)",
    answer: ['Paraguay', 'Bolivia', 'Guyane thuộc Pháp', 'Venezuela'],
    correct: 0,
    index: 189,
  },
  {
    id: 'SR',
    name: 'Suriname',
    uri: "require('../../assets/flagpng/SR.png)",
    answer: ['Venezuela', 'Suriname', 'Ecuador', 'Peru'],
    correct: 1,
    index: 210,
  },
  {
    id: 'UY',
    name: 'Uruguay',
    uri: "require('../../assets/flagpng/UY.png)",
    answer: ['Uruguay', 'Chile', 'Venezuela', 'Paraguay'],
    correct: 0,
    index: 236,
  },
  {
    id: 'VE',
    name: 'Venezuela',
    uri: "require('../../assets/flagpng/VE.png)",
    answer: ['Paraguay', 'Venezuela', 'Venezuela', 'Chile'],
    correct: 1,
    index: 240,
  },
];
