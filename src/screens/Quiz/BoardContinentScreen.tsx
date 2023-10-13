import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Svgs from '../../constants/Svgs';
import {Circle} from 'react-native-svg';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import useWorldStore from '../../store/useWorldStore';
import useMenuStore from '../../store/useMenuStore';

const BoardContinentScreen = ({route, navigation}) => {
  const {getScoreContinents} = useWorldStore();
  const {setArrayQuestion, typeCategory, getQuantityContinent} = useMenuStore();
  const [preFill, setPrefill] = useState(100);
  const quantityQuestion = getQuantityContinent(`quantity${typeCategory}`);
  const scoreQuestion = getScoreContinents(`score${typeCategory}`);

  useEffect(() => {
    if (scoreQuestion && scoreQuestion <= quantityQuestion / 2) {
      setPrefill(100);
    } else {
      setPrefill(0);
    }
  }, []);

  const shuffleArray = () => {
    let array: any = [];
    for (let i = 0; i < quantityQuestion; i++) {
      array.push(i);
    }
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View className="bg-emerald-200 mx-4 mt-4 h-2/5 rounded-3xl">
        <TouchableOpacity className="m-2" onPress={() => navigation.goBack()}>
          <Svgs.BackSVG height={40} width={40} />
        </TouchableOpacity>
        <View className="bg-emerald-200 h-3/4 rounded-3xl justify-center items-center">
          {/*<Text className="m-8 font-bold text-xl">Điểm cao nhất</Text>*/}
          <View className="justify-center items-center">
            <AnimatedCircularProgress
              prefill={preFill}
              delay={400}
              duration={700}
              size={200}
              width={20}
              fill={Math.round((scoreQuestion / quantityQuestion) * 100)}
              lineCap={'round'}
              rotation={0}
              tintColor="#00e0ff"
              renderCap={({center}) => (
                <Circle cx={center.x} cy={center.y} r="10" fill="#00e0ff" />
              )}
              backgroundColor="#3d5875">
              {fill => (
                <Text className="text-xl font-bold">{`${scoreQuestion}/${quantityQuestion}`}</Text>
              )}
            </AnimatedCircularProgress>
          </View>
          <View className="items-center justify-center m-6">
            {/*<Text className="text-sm">*/}
            {/*  Bao gồm 195 quốc gia thuộc Liên Hiệp Quốc, bao gồm 193 quốc gia và*/}
            {/*  2 quan sát viên là Thành Vatican và Palestine.*/}
            {/*</Text>*/}
          </View>
        </View>
      </View>
      <View className="items-center m-4">
        <View className="flex flex-row">
          <View className="mx-2 box-content h-28 w-28 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => {
                setArrayQuestion(shuffleArray());
                navigation.navigate('QuizContinent');
              }}>
              <View className="items-center">
                <Svgs.PlaySVG height={120} width={120} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BoardContinentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerBox: {
    backgroundColor: 'blue',
    margin: 10,
  },
  dot: {
    height: 8,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
