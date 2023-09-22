import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import RocketShip from '../assets/svg/ic_rocketship.svg';

const HomeScreen = ({route, navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <View className="bg-emerald-200 relative box-content h-48 p-4 border-r-2 border-b-2 border-l-2 rounded-b-3xl">
          <Text>Bambary - English For Primary</Text>
        </View>
        <View className="absolute top-32 flex flex-row justify-around">
          <View className="basis-1/12" />
          <View className="bg-indigo-500 mr-2 basis-2/5 box-content h-36 p-4 border-2 rounded-xl">
            <Text>Create Quiz</Text>
          </View>
          <View className="bg-amber-200 ml-2 basis-2/5 box-content h-36 p-4 border-2 rounded-xl">
            <Text>Join Quiz</Text>
          </View>
          <View className="basis-1/12" />
        </View>
      </View>
      <View className="top-28 ml-3">
        <Text className="text-lg font-bold">Choose Categories</Text>
      </View>
      <View>
        <View className="top-1/3 flex flex-row justify-center mb-8">
          <View className="bg-indigo-500 mr-2 basis-2/5 box-content h-28 p-4 border-2 rounded-xl">
            <Text>Create Quiz1</Text>
            <RocketShip height={50} width={50} />
          </View>
          <View className="bg-amber-200 ml-2 mt-6 basis-2/5 box-content h-28 p-4 border-2 rounded-xl">
            <Text>Join Quiz1</Text>
          </View>
        </View>

        <View className="top-1/3 flex flex-row justify-center mb-8">
          <View className="bg-indigo-500 mr-2 basis-2/5 box-content h-28 p-4 border-2 rounded-xl">
            <Text>Create Quiz1</Text>
          </View>
          <View className="bg-amber-200 ml-2 mt-6 basis-2/5 box-content h-28 p-4 border-2 rounded-xl">
            <Text>Join Quiz1</Text>
          </View>
        </View>
      </View>
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
