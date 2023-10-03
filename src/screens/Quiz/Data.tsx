import {Dimensions} from 'react-native';
import Svgs from '../../constants/Svgs';
const widthDimensions = Dimensions.get('window').width;
export type country = {
  id: string;
  name: string;
  uri: any;
};
export const DATA: country[] = [
  {
    id: 'VN',
    name: 'VIET NAM',
    uri: <Svgs.CherrySVG height={180} width={widthDimensions} />,
  },
  {
    id: 'USA',
    name: 'HOA KY',
    uri: <Svgs.AD height={200} width={widthDimensions} />,
  }
];
