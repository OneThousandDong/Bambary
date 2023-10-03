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
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'VIET NAM',
    uri: <Svgs.CherrySVG height={180} width={widthDimensions} />,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'HOA KY',
    uri: <Svgs.ZW height={180} width={widthDimensions} />,
  },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //   name: 'THAI LAN',
  //   uri: <Svgs.DinosaurSVG height={180} width={widthDimensions} />,
  // },
];
