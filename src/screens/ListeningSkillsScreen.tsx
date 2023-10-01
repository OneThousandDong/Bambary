import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ICBack from '../assets/svg/ic_back.svg';
import DinosaurSVG from '../assets/svg/ic_dinosaur.svg';
import HorseSVG from '../assets/svg/ic_horse.svg';
import Svgs from '../constants/Svgs';

const ListeningSkillsScreen = ({route, navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ICBack height={40} width={40} />
        </TouchableOpacity>
        <View className="bg-emerald-200 relative box-content m-4 h-40 border-2 rounded-3xl">
        </View>
      </View>
      <View className="ml-3">
        <Text className="text-lg font-bold">Choose Categories</Text>
      </View>

      <View className="items-center">
        <View className="flex flex-row">
          <View className="bg-indigo-500 box-content h-28 w-28 rounded-full justify-center">
            {/* <Text className="text-center">Kỹ năng</Text> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View className="items-center">
                <Svgs.OrangeSVG
                  height={90}
                  width={90}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View className="mx-2 box-content h-28 w-28 rounded-full justify-center">
            {/* <Text className="text-center">Kỹ năng</Text> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Quiz');
              }}>
              <View className="items-center">
                <Svgs.CherrySVG
                  height={90}
                  width={90}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View className="bg-amber-200 box-content h-28 w-28 border-2 rounded-full justify-center">
            <Text className="text-center">Kỹ năng</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View>{/*<HorseSVG height={80} width={80} />*/}</View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row">
          <View className="h-10 w-28">
            <Text className="text-center">Kỹ năng doc</Text>
          </View>

          <View className="h-10 w-28 mx-2">
            <Text className="text-center">Cherry</Text>
          </View>

          <View className="h-10 w-28">
            <Text className="text-center">Kỹ năng</Text>
          </View>
        </View>

        <View className="flex flex-row">
          <View className="bg-indigo-500 box-content h-28 w-28 border-2 rounded-full justify-center">
            <Text className="text-center">Kỹ năng</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View>
                {/*<DinosaurSVG*/}
                {/*  style={{transform: [{rotateY: '180deg'}]}}*/}
                {/*  height={80}*/}
                {/*  width={80}*/}
                {/*/>*/}
              </View>
            </TouchableOpacity>
          </View>

          <View className="bg-amber-200 mx-2 box-content h-28 w-28 border-2 rounded-full justify-center">
            <Text className="text-center">Kỹ năng</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View>{/*<HorseSVG height={80} width={80} />*/}</View>
            </TouchableOpacity>
          </View>

          <View className="bg-amber-200 box-content h-28 w-28 border-2 rounded-full justify-center">
            <Text className="text-center">Kỹ năng</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View>{/*<HorseSVG height={80} width={80} />*/}</View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row">
          <View className="h-10 w-28">
            <Text className="text-center">Kỹ năng doc</Text>
          </View>

          <View className="h-10 w-28 mx-2">
            <Text className="text-center">Kỹ năng</Text>
          </View>

          <View className="h-10 w-28">
            <Text className="text-center">Kỹ năng</Text>
          </View>
        </View>

        <View className="flex flex-row">
          <View className="bg-indigo-500 box-content h-28 w-28 border-2 rounded-full justify-center">
            <Text className="text-center">Kỹ năng</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View>
                {/*<DinosaurSVG*/}
                {/*  style={{transform: [{rotateY: '180deg'}]}}*/}
                {/*  height={80}*/}
                {/*  width={80}*/}
                {/*/>*/}
              </View>
            </TouchableOpacity>
          </View>

          <View className="bg-amber-200 mx-2 box-content h-28 w-28 border-2 rounded-full justify-center">
            <Text className="text-center">Kỹ năng</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View>{/*<HorseSVG height={80} width={80} />*/}</View>
            </TouchableOpacity>
          </View>

          <View className="bg-amber-200 box-content h-28 w-28 border-2 rounded-full justify-center">
            <Text className="text-center">Kỹ năng</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ListeningSkills');
              }}>
              <View>{/*<HorseSVG height={80} width={80} />*/}</View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row">
          <View className="h-10 w-28">
            <Text className="text-center">Kỹ năng doc</Text>
          </View>

          <View className="h-10 w-28 mx-2">
            <Text className="text-center">Kỹ năng</Text>
          </View>

          <View className="h-10 w-28">
            <Text className="text-center">Kỹ năng</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ListeningSkillsScreen;

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
