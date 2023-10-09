import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
  Animated,
} from 'react-native';
import React, {useMemo, useRef, useState, useCallback} from 'react';
import Svgs from '../../constants/Svgs';
import Svg, {G, Circle} from 'react-native-svg';

const BoardCountriesScreen = ({route, navigation}) => {
  const size = 168;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const cirumference = 2 * Math.PI * radius;
  const {width} = useWindowDimensions();

  return (
    <SafeAreaView>
      <View className="bg-emerald-200 m-4 h-3/5 rounded-3xl">
        <TouchableOpacity className="m-2" onPress={() => navigation.goBack()}>
          <Svgs.BackSVG height={40} width={40} />
        </TouchableOpacity>
        <View className="bg-emerald-200 h-3/4 rounded-3xl justify-center items-center">
          {/*<Text className="m-8 font-bold text-xl">What fruit is this?</Text>*/}
          {/*<Svgs.CherrySVG height={180} width={width} />*/}
          <View className="justify-center items-center">
            <Svg width={size} height={size}>
              <G rotation="-90" origin={center}>
                <Circle
                  stroke="#E6E7E8"
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                />
                <Circle
                  stroke="#F4338f"
                  cx={center}
                  cy={center}
                  r={radius}
                  strokeWidth={strokeWidth}
                  strokeDasharray={cirumference}
                  strokeDashoffset={
                    cirumference -
                    (cirumference * Math.round((20 / 195) * 100)) / 100
                  }
                  fill="rgb(167 243 208);"
                />
              </G>
            </Svg>
            <View className={'absolute'}>
              <Text>20/195</Text>
            </View>
          </View>
          <View className="items-center justify-center">
            <Text>
              Bao gồm 195 quốc gia thuộc Liên Hiệp Quốc, bao gồm 193 quốc gia và 2 quan sát viên là Thành Vatican và Palestine.
            </Text>
            {/* <View className="flex flex-row">
              <View className="box-content rounded-full justify-center">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ListeningSkills');
                  }}>
                  <View className="items-center justify-center">
                    <Svgs.OrangeSVG height={50} width={50} />
                    <Text>Total time</Text>
                    <Text>15 : 30</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View className="mx-2 box-content rounded-full justify-center">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ChooseTypeQuiz');
                  }}>
                  <View className="items-center justify-center">
                    <Svgs.CherrySVG height={50} width={50} />
                    <Text>Câu trả lời đúng</Text>
                    <Text>20</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View> */}
          </View>
        </View>
      </View>
      <View className="items-center m-8">
        <View className="flex flex-row">
          <View className="mx-2 box-content h-28 w-28 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('QuizCountries');
              }}>
              <View className="items-center">
                <Svgs.PlaySVG height={120} width={120} />
              </View>
            </TouchableOpacity>
          </View>

          <View className="mx-2 box-content h-28 w-28 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('QuizCountries');
              }}>
              <View className="items-center">
                <Svgs.ReturnSVG height={130} width={130} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BoardCountriesScreen;

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
});
