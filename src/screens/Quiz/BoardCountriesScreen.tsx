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
  ImageBackground,
} from 'react-native';
import React, {useMemo, useRef, useState, useCallback, useEffect} from 'react';
import Svgs from '../../constants/Svgs';
import Svg, {G, Circle} from 'react-native-svg';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import useWorldStore from '../../store/useWorldStore';
import {QuantityQuestionData} from '../DataQuiz/QuantityQuestionData';
import { DATAVI } from "../DataQuiz/DataVi";

const {width, height} = Dimensions.get('window');
const BoardCountriesScreen = ({route, navigation}) => {
  const {
    quantityQuestionCountries,
    setQuantityQuestionCountries,
    scoreCountries,
  } = useWorldStore();
  const [preFill, setPrefill] = useState(100);

  useEffect(() => {
    const dataQuestion = QuantityQuestionData.find(
      i => i.name == quantityQuestionCountries,
    );
    if (dataQuestion && dataQuestion?.index < 8) {
      if (
        scoreCountries &&
        scoreCountries[dataQuestion?.index] <=
          parseInt(dataQuestion?.name, 10) / 2
      ) {
        setPrefill(100);
      } else {
        setPrefill(0);
      }
    } else if (dataQuestion && dataQuestion?.index == 8) {
      if (
        scoreCountries &&
        scoreCountries[dataQuestion?.index] <= DATAVI.length / 2
      ) {
        setPrefill(100);
      } else {
        setPrefill(0);
      }
    }
  }, []);
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
              fill={
                scoreCountries[
                  QuantityQuestionData.find(
                    i => i.name == quantityQuestionCountries,
                  )?.index || 0
                ]
              }
              lineCap={'round'}
              rotation={0}
              tintColor="#00e0ff"
              renderCap={({center}) => (
                <Circle cx={center.x} cy={center.y} r="10" fill="#00e0ff" />
              )}
              backgroundColor="#3d5875">
              {fill => (
                <Text>{`${
                  scoreCountries[
                    QuantityQuestionData.find(
                      i => i.name == quantityQuestionCountries,
                    )?.index || 0
                  ]
                }/${quantityQuestionCountries}`}</Text>
              )}
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
      <View className="items-center m-4">
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

          {/*<View className="mx-2 box-content h-28 w-28 rounded-full justify-center">*/}
          {/*  <TouchableOpacity*/}
          {/*    onPress={() => {*/}
          {/*      navigation.navigate('QuizCountries');*/}
          {/*    }}>*/}
          {/*    <View className="items-center">*/}
          {/*      <Svgs.ReturnSVG height={130} width={130} />*/}
          {/*    </View>*/}
          {/*  </TouchableOpacity>*/}
          {/*</View>*/}
        </View>
      </View>
      <View className="flex-1">
        <FlatList
          nestedScrollEnabled
          data={QuantityQuestionData}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: 'center',
          }}
          initialNumToRender={QuantityQuestionData.length}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setQuantityQuestionCountries(item.name)}>
              <View className="m-2">
                <View className="rounded-xl">
                  <ImageBackground
                    style={{
                      height: 50,
                      width: width / 4,
                      justifyContent: 'center',
                    }}
                    imageStyle={{borderRadius: 12}}
                    source={
                      quantityQuestionCountries === item.name
                        ? require('../../assets/image/gradient.png')
                        : require('../../assets/image/gradient1.png')
                    }>
                    <View className="rounded-xl flex flex-row justify-center">
                      <Text className="text-base font-bold items-center">
                        {item?.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListHeaderComponent={
            <Text className="text-lg font-bold m-2 ml-10">
              Chọn số lượng câu hỏi
            </Text>
          }
          // ListFooterComponent={
          //   <View
          //     style={{
          //       height: Dimensions.get('window').height / 3,
          //       width: Dimensions.get('window').width,
          //       marginBottom: 10,
          //     }}
          //   />
          // }
          onEndReachedThreshold={0.2}
        />
      </View>
    </ScrollView>
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
