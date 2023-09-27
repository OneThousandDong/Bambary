import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import RocketShip from '../assets/svg/ic_rocketship.svg';
import Planet from '../assets/svg/ic_planet.svg';
import Sport from '../assets/svg/ic_sport.svg';
import ICBack from '../assets/svg/ic_back.svg';
import Dinosaur from '../assets/svg/ic_dinosaur.svg';

const ListeningSkillsScreen = ({route, navigation}) => {
  return (
    <SafeAreaView>
      <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
           <ICBack height={40} width={40} />
         </TouchableOpacity>
       <View className="bg-emerald-200 relative box-content m-4 h-40 border-2 rounded-3xl">
         {/* <Text>Bambary - English For Primary</Text> */}
         
       </View>
      </View>

      <View className="ml-3">
       <Text className="text-lg font-bold">Choose Categories</Text>
      </View>

      <View>
        <View className="top-1/3 flex flex-row justify-center mb-8">
          <View className="bg-indigo-500 mr-2 basis-2/5 box-content h-28 p-4 border-2 rounded-xl">
            <Text>Thế giới</Text>
          </View>
          <View className="bg-amber-200 ml-2 mt-6 basis-2/5 box-content h-28 p-4 border-2 rounded-xl">
            <Text>Khoa học</Text>
          </View>
        </View>
        
        <View className="absolute flex flex-row">
          <View className="top-8 h-28 p-4">
            <Planet height={180} width={180} />
          </View>
          <View className="top-1/3 p-4">
            <RocketShip height={90} width={90} />
            {/* <Sport height={180} width={180} /> */}
          </View>
        </View>
      </View>
      <View>
        <Dinosaur height={120} width={120} />
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
