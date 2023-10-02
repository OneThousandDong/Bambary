// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// import Svgs from '../constants/Svgs';
//
// const QuizScreen = ({route, navigation}) => {
//   return (
//     <SafeAreaView>
//       <View className="bg-emerald-200 m-4 h-3/5 rounded-3xl ">
//         <TouchableOpacity className="m-2" onPress={() => navigation.goBack()}>
//           <Svgs.BackSVG height={40} width={40} />
//         </TouchableOpacity>
//         <View className="bg-emerald-200 h-3/5 rounded-3xl justify-center items-center">
//           <Text className="m-8 font-bold text-xl">What fruit is this?</Text>
//           <Svgs.CherrySVG height={180} width={180} />
//         </View>
//       </View>
//       <View className="items-center m-4">
//         <View className="flex flex-row">
//           {/* <View className="bg-indigo-500 box-content h-28 w-28 rounded-full justify-center">
//                         <TouchableOpacity
//                             onPress={() => {
//                                 navigation.navigate('ListeningSkills');
//                             }}>
//                             <View className="items-center">
//                                 <Svgs.OrangeSVG
//                                     height={90}
//                                     width={90}
//                                 />
//                             </View>
//                         </TouchableOpacity>
//                     </View> */}
//
//           <View className="mx-2 box-content h-28 w-28 rounded-full justify-center">
//             <TouchableOpacity
//               onPress={() => {
//                 navigation.navigate('Quiz');
//               }}>
//               <View className="items-center">
//                 <Svgs.PlaySVG height={100} width={100} />
//               </View>
//             </TouchableOpacity>
//           </View>
//
//           {/* <View className="bg-amber-200 box-content h-28 w-28 border-2 rounded-full justify-center">
//                         <Text className="text-center">Kỹ năng</Text>
//                         <TouchableOpacity
//                             onPress={() => {
//                                 navigation.navigate('ListeningSkills');
//                             }}>
//                         </TouchableOpacity>
//                     </View> */}
//         </View>
//
//         <View className="flex flex-row">
//           {/* <View className="h-10 w-28">
//                         <Text className="text-center">Kỹ năng doc</Text>
//                     </View> */}
//
//           {/* <View className="h-10 w-28 mx-2">
//                         <Text className="text-center">Cherry</Text>
//                     </View> */}
//
//           {/* <View className="h-10 w-28">
//                         <Text className="text-center">Kỹ năng</Text>
//                     </View> */}
//         </View>
//       </View>
//
//       <TouchableOpacity className="bg-emerald-200 mx-10 mt-2 h-14 rounded-xl items-center justify-center">
//         <Text>Tiếp theo</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };
//
// export default QuizScreen;
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   headerBox: {
//     backgroundColor: 'blue',
//     margin: 10,
//   },
// });
