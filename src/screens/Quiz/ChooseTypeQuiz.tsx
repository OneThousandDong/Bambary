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
} from 'react-native';
import React, { useMemo, useRef, useState, useCallback } from 'react';
import Svgs from '../../constants/Svgs';

const ChooseTypeQuiz = ({ route, navigation }) => {
    const { width } = useWindowDimensions();
    return (
        <SafeAreaView>
            <View className="bg-emerald-200 m-4 h-3/5 rounded-3xl ">
                <TouchableOpacity className="m-2" onPress={() => navigation.goBack()}>
                    <Svgs.BackSVG height={40} width={40} />
                </TouchableOpacity>
                <View className="bg-emerald-200 rounded-3xl justify-center items-center">
                    <Text className="m-8 font-bold text-xl">What fruit is this?</Text>
                    <Svgs.CherrySVG height={180} width={width} />
                </View>
            </View>
            {/* <View className="items-center m-4">
                <View className="flex flex-row">
                    <View className="mx-2 box-content h-28 w-28 rounded-full justify-center">
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Quiz');
                            }}>
                            <View className="items-center">
                                <Svgs.PlaySVG height={100} width={100} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}

            <View className="items-center">
        <View className="flex flex-row">
          <View className="m-4 box-content h-28 w-28 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('StudyQuiz');
              }}>
              <View className="items-center">
                <Svgs.OrangeSVG
                  height={90}
                  width={90}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View className="m-4 box-content h-28 w-28 rounded-full justify-center">
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
        </View>

        <View className="flex flex-row">
          <View className="h-10 w-28 mx-4">
            <Text className="text-center">Từ vựng</Text>
          </View>

          <View className="h-10 w-28 mx-4">
            <Text className="text-center">Luyện tập</Text>
          </View>
        </View>

        </View>

        </SafeAreaView>
    );
};

export default ChooseTypeQuiz;

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
