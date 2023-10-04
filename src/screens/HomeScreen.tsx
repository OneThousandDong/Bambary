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
  const renderHome = () => {
    return (
      <View className="bg-indigo-500" style={{ width: '100%', height: 190 }}>
        <View style={{ position: 'absolute', bottom: '-40%' }}>
          <View className="flex flex-row">
            <View className="bg-amber-200 mr-2 h-40 w-36 z-20 rounded-xl">
              <Text>Thế giới</Text>
            </View>
            <View className="bg-lime-600 ml-2 h-40 w-36 rounded-xl">
              <Text>Quốc gia</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <>
    <ScrollView>
      <View style={{flex: 1}}>
      <View className="bg-indigo-500 z-0" style={{ width: '100%', height: 190 }}>
        <View className='absolute top-14'>
          <View className="flex flex-row">
            <View className="bg-amber-200 mr-2 h-40 w-36 z-10 rounded-xl">
              <Text>Thế giới</Text>
            </View>
            <View className="bg-lime-600 ml-2 h-40 w-36 rounded-xl">
              <Text>Quốc gia</Text>
            </View>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
    </>
    // <SafeAreaView>
    //   <View style={styles.container}>
    //     <OverlappingSquares />
    //   </View>
    //   <ScrollView className='top-60'>
    //   <View className="top-20 ml-3">
    //     <Text className="text-lg font-bold">Choose Categories</Text>
    //   </View>

    //   <View>
    //     <View className="top-1/3 flex flex-row justify-center mb-14">
    //       <View className="bg-indigo-500 mr-2 w-36 h-28 border-2 rounded-xl">
    //         <Text>Thế giới</Text>
    //       </View>
    //       <View className="bg-amber-200 ml-2 mt-6 w-36 h-28 border-2 rounded-xl">
    //         <Text>Khoa học</Text>
    //       </View>
    //     </View>

    //     <View className="top-1/3 flex flex-row justify-center mb-10">
    //       <View className="bg-indigo-500 mr-2 w-36 h-28 border-2 rounded-xl">
    //         <Text>Khám phá</Text>
    //       </View>
    //       <View className="bg-amber-200 ml-2 mt-6 w-36 h-28 border-2 rounded-xl">
    //         <Text>Thế thao</Text>
    //       </View>
    //     </View>

    //     <View className="absolute flex flex-row">
    //       <View className="top-10 p-10">
    //         <Svgs.PlanetSVG height={170} width={170} />
    //         <View className="left-2 justify-center">
    //           <Svgs.IslandSVG
    //             height={150}
    //             width={150}
    //             style={{transform: [{rotateY: '180deg'}]}}
    //           />
    //         </View>
    //       </View>
    //       <View className="top-36">
    //         <Svgs.RocketShipSVG height={80} width={80} />
    //         <View className="mt-24 right-4">
    //           <Svgs.SportSVG
    //             height={110}
    //             width={110}
    //             style={{transform: [{rotateY: '180deg'}]}}
    //           />
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    //   </ScrollView>
    // </SafeAreaView>
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
