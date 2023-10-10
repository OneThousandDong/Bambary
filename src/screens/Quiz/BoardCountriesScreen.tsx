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
  Easing,
} from 'react-native';
import React, {useMemo, useRef, useState, useCallback, useEffect} from 'react';
import Svgs from '../../constants/Svgs';
import Svg, {G, Circle} from 'react-native-svg';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const BoardCountriesScreen = ({route, navigation}) => {
  return (
    <SafeAreaView>
      <View className="bg-emerald-200 m-4 h-3/5 rounded-3xl">
        <TouchableOpacity className="m-2" onPress={() => navigation.goBack()}>
          <Svgs.BackSVG height={40} width={40} />
        </TouchableOpacity>
        <View className="bg-emerald-200 h-3/4 rounded-3xl justify-center items-center">
          {/*<Text className="m-8 font-bold text-xl">Điểm cao nhất</Text>*/}
          <View className="justify-center items-center">
            <AnimatedCircularProgress
              size={200}
              width={20}
              fill={20}
              lineCap={'round'}
              rotation={0}
              tintColor="#00e0ff"
              renderCap={({center}) => (
                <Circle cx={center.x} cy={center.y} r="10" fill="#00e0ff" />
              )}
              backgroundColor="#3d5875">
              {fill => <Text>{fill}/195</Text>}
            </AnimatedCircularProgress>
            <View className={'absolute'}>
              {/*<Text className="m-8 font-bold text-xl">20/195</Text>*/}
            </View>
          </View>
          <View className="items-center justify-center m-6">
            {/*<Text className="text-sm">*/}
            {/*  Bao gồm 195 quốc gia thuộc Liên Hiệp Quốc, bao gồm 193 quốc gia và*/}
            {/*  2 quan sát viên là Thành Vatican và Palestine.*/}
            {/*</Text>*/}
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
