import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Dimensions,
  useWindowDimensions,
  Animated,
  Text,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Svgs from '../../constants/Svgs';
import {DATA} from './Data';
import FastImage from "react-native-fast-image";
const widthDimensions = Dimensions.get('window').width;

const QuizScreen = ({route, navigation}) => {
  const [currentIndex, setCurrentIndex] = useState('0');
  const {width} = useWindowDimensions();
  const scrollX = useRef(new Animated.Value(1)).current;
  const ref = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems && viewableItems?.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 105});
  // const heartIcon = require('../../assets/svg/flag/zw.png');
  const Item = React.memo(({item}) => {
    return <>{item?.item.uri}</>;
    // console.log(width);
    // return (
    //   <View style={{width: width, alignItems: 'center'}}>
    //     <FastImage
    //       style={{width: 250, height: 167}}
    //       source={heartIcon}
    //       resizeMode={FastImage.resizeMode.contain}
    //     />
    //   </View>
    // )
  });

  const dotWidths = [];
  const opacities = [];
  DATA.forEach((item, index) => {
    const inputRange = [
      (index - 1) * width,
      index * width,
      (index + 1) * width,
    ];

    dotWidths[index] = scrollX.interpolate({
      inputRange,
      outputRange: [10, 25, 10],
      extrapolate: 'clamp',
    });

    opacities[index] = scrollX.interpolate({
      inputRange,
      outputRange: [0.4, 1, 0.4],
      extrapolate: 'clamp',
    });
  });

  return (
    <SafeAreaView>
      <View className="bg-emerald-200 m-4 h-3/5 rounded-3xl ">
        <TouchableOpacity className="m-2" onPress={() => navigation.goBack()}>
          <Svgs.BackSVG height={40} width={40} />
        </TouchableOpacity>
        <View className="bg-emerald-200 rounded-3xl justify-center items-center">
          {/*<Text className="m-8 font-bold text-xl">What fruit is this?</Text>*/}
          <View className="flex flex-row m-4 items-center">
            {DATA.map((item, index) => (
              <Animated.View
                key={index.toString()}
                style={[
                  styles.dot,
                  {width: dotWidths[index], opacity: opacities[index]},
                ]}
              />
            ))}
          </View>
          <FlatList
            ref={ref}
            horizontal
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            decelerationRate={'fast'}
            pagingEnabled
            data={DATA}
            renderItem={item => <Item item={item} />}
            keyExtractor={item => item.id}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfigRef.current}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: false,
              },
            )}
            scrollEventThrottle={1}
          />
        </View>
      </View>
      {/*<View className="items-center">*/}
      {/*  <View className="flex flex-row">*/}
      {/*    <Animated.View className="box-content h-28 w-1/2 rounded-full justify-center">*/}
      {/*      <TouchableOpacity*/}
      {/*        onPress={() => setSelected([1, 0, 0, 0])}*/}
      {/*        style={{*/}
      {/*          backgroundColor: selected[0]*/}
      {/*            ? 'rgb(167 243 208)'*/}
      {/*            : 'rgb(236 253 245)',*/}
      {/*        }}*/}
      {/*        className="ml-12 mr-4 mt-2 h-16 rounded-xl items-center justify-center">*/}
      {/*        <Text>A</Text>*/}
      {/*      </TouchableOpacity>*/}
      {/*    </Animated.View>*/}

      {/*    <View className="mx-2 box-content h-28 w-1/2 rounded-full justify-center">*/}
      {/*      <TouchableOpacity*/}
      {/*        onPress={() => setSelected([0, 1, 0, 0])}*/}
      {/*        style={{*/}
      {/*          backgroundColor: selected[1]*/}
      {/*            ? 'rgb(167 243 208)'*/}
      {/*            : 'rgb(236 253 245)',*/}
      {/*        }}*/}
      {/*        className="mr-12 ml-4 mt-2 h-16 rounded-xl items-center justify-center">*/}
      {/*        <Text>B</Text>*/}
      {/*      </TouchableOpacity>*/}
      {/*    </View>*/}
      {/*  </View>*/}

      {/*  <View className="flex flex-row">*/}
      {/*    <View className="box-content h-30 w-1/2 rounded-full justify-center">*/}
      {/*      <TouchableOpacity*/}
      {/*        onPress={() => setSelected([0, 0, 1, 0])}*/}
      {/*        style={{*/}
      {/*          backgroundColor: selected[2]*/}
      {/*            ? 'rgb(167 243 208)'*/}
      {/*            : 'rgb(236 253 245)',*/}
      {/*        }}*/}
      {/*        className="ml-12 mr-4 mt-2 h-16 rounded-xl items-center justify-center">*/}
      {/*        <Text>C</Text>*/}
      {/*      </TouchableOpacity>*/}
      {/*    </View>*/}

      {/*    <View className="mx-2 box-content h-28 w-1/2 rounded-full justify-center">*/}
      {/*      <TouchableOpacity*/}
      {/*        onPress={() => setSelected([0, 0, 0, 1])}*/}
      {/*        style={{*/}
      {/*          backgroundColor: selected[3]*/}
      {/*            ? 'rgb(167 243 208)'*/}
      {/*            : 'rgb(236 253 245)',*/}
      {/*        }}*/}
      {/*        className="mr-12 ml-4 mt-2 h-16 rounded-xl items-center justify-center">*/}
      {/*        <Text>D</Text>*/}
      {/*      </TouchableOpacity>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*</View>*/}

      <TouchableOpacity
        onPress={() => {
          if (parseInt(currentIndex, 10) < DATA.length - 1) {
            setCurrentIndex((parseInt(currentIndex) + 1).toString());
            ref.current?.scrollToIndex({
              index: parseInt(currentIndex, 10) + 1,
            });
          }
        }}
        className="bg-emerald-200 mx-10 mt-2 h-14 rounded-xl items-center justify-center">
        <Text>Tiếp theo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuizScreen;

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
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
