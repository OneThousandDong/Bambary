import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Svgs from '../constants/Svgs';

const HomeScreen = ({route, navigation}) => {
  const OverlappingSquares = () => {
    return (
      <View style={styles.container}>
        <View className="absolute bg-emerald-200 h-96 w-full z-10 p-4 rounded-b-3xl">
          <Text>QuangNNNNqfdsgdfgsdgsdg</Text>
        </View>
        <View className="absolute flex flex-row top-12">
          <View className="bg-amber-200 mr-2 h-40 w-36 z-20 top-12 rounded-xl">
            <Text>Thế giới</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BoardWorldScreen');
              }}>
              <View>
                <Svgs.DinosaurSVG
                  style={{transform: [{rotateY: '180deg'}]}}
                  height={80}
                  width={80}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="bg-indigo-500 ml-2 h-40 w-36 z-20 top-12 rounded-xl">
            <Text>Quốc gia</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BoardCountries');
              }}>
              <View>
                <Svgs.HorseSVG height={80} width={80} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ScrollView className="top-60">
        <View className="ml-3">
          <Text className="text-lg font-bold">Choose Categories</Text>
        </View>
        <View className="flex flex-row justify-center mb-14">
          <View className="bg-indigo-500 mr-6 w-36 h-28 rounded-xl">
            {/*<Svgs.IslandSVG*/}
            {/*  height={150}*/}
            {/*  width={150}*/}
            {/*  style={{transform: [{rotateY: '180deg'}]}}*/}
            {/*/>*/}
          </View>
          <View className="bg-amber-200 mt-6 w-36 h-28 rounded-xl">
          </View>
        </View>
        <View className="flex flex-row justify-center mb-14">
          <View className="bg-indigo-500 mr-6 w-36 h-28 rounded-xl">
            {/*<Svgs.IslandSVG*/}
            {/*  height={150}*/}
            {/*  width={150}*/}
            {/*  style={{transform: [{rotateY: '180deg'}]}}*/}
            {/*/>*/}
          </View>
          <View className="bg-amber-200 mt-6 w-36 h-28 rounded-xl">
          </View>
        </View>
      </ScrollView>
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
