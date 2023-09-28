import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import RocketShipSVG from '../assets/svg/ic_rocketship.svg';
import PlanetSVG from '../assets/svg/ic_planet.svg';
import SportSVG from '../assets/svg/ic_sport.svg';
import IslandSVG from '../assets/svg/ic_island.svg';
import DinosaurSVG from '../assets/svg/ic_dinosaur.svg';
import HorseSVG from '../assets/svg/ic_horse.svg';
import MenuSVG from '../assets/svg/ic_menu.svg';

const HomeScreen = ({route, navigation}) => {
  return (
    <SafeAreaView>
      {/*<ScrollView>*/}
      <View>
        <View className="bg-emerald-200 relative box-content h-48 p-4 border-r-2 border-b-2 border-l-2 rounded-b-3xl">
          <View className="bg-indigo-500 w-8 h-8 rounded-lg shadow-inner justify-center items-center">
            <MenuSVG height={20} width={20} />
          </View>
          <Text>Bambary - English For Primary</Text>
        </View>
        <View className="absolute top-32 flex flex-row justify-around">
          <View className="basis-1/12" />
          <View className="bg-indigo-500 mr-2 basis-2/5 box-content h-36 p-4 border-2 rounded-xl">
            <Text>Kỹ năng</Text>
            <Text>Nghe</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View>
                <DinosaurSVG
                  style={{transform: [{rotateY: '180deg'}]}}
                  height={80}
                  width={80}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View className="bg-amber-200 ml-2 basis-2/5 box-content h-36 p-4 border-2 rounded-xl">
            <Text>Kỹ năng</Text>
            <Text>Đọc</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View>
                <HorseSVG
                  height={80}
                  width={80}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="basis-1/12" />
        </View>
      </View>
      <View className="top-24 ml-3">
        <Text className="text-lg font-bold">Choose Categories</Text>
      </View>

      {/*<View>*/}
      {/*  <View className="top-1/3 flex flex-row justify-center mb-14">*/}
      {/*    <View className="bg-indigo-500 mr-2 w-36 h-28 border-2 rounded-xl">*/}
      {/*      <Text>Thế giới</Text>*/}
      {/*    </View>*/}
      {/*    <View className="bg-amber-200 ml-2 mt-6 w-36 h-28 border-2 rounded-xl">*/}
      {/*      <Text>Khoa học</Text>*/}
      {/*    </View>*/}
      {/*  </View>*/}

      {/*  <View className="top-1/3 flex flex-row justify-center mb-10">*/}
      {/*    <View className="bg-indigo-500 mr-2 w-36 h-28 border-2 rounded-xl">*/}
      {/*      <Text>Khám phá</Text>*/}
      {/*    </View>*/}
      {/*    <View className="bg-amber-200 ml-2 mt-6 w-36 h-28 border-2 rounded-xl">*/}
      {/*      <Text>Thế thao</Text>*/}
      {/*    </View>*/}
      {/*  </View>*/}

      {/*  <View className="absolute flex flex-row">*/}
      {/*    <View className="top-10 p-10">*/}
      {/*      <PlanetSVG height={170} width={170} />*/}
      {/*      <View className="left-2 justify-center">*/}
      {/*        <IslandSVG*/}
      {/*          height={150}*/}
      {/*          width={150}*/}
      {/*          style={{transform: [{rotateY: '180deg'}]}}*/}
      {/*        />*/}
      {/*      </View>*/}
      {/*    </View>*/}
      {/*    <View className="top-36">*/}
      {/*      <RocketShipSVG height={80} width={80} />*/}
      {/*      <View className="mt-24 right-4">*/}
      {/*        <SportSVG*/}
      {/*          height={110}*/}
      {/*          width={110}*/}
      {/*          style={{transform: [{rotateY: '180deg'}]}}*/}
      {/*        />*/}
      {/*      </View>*/}
      {/*    </View>*/}
      {/*  </View>*/}
      {/*</View>*/}
      {/*</ScrollView>*/}
    </SafeAreaView>
  );
};

export default HomeScreen;

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
});
