import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import Svgs from '../constants/Svgs';
const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];
const QuizScreen = ({ route, navigation }) => {
    const Item = ({ title }) => {
        return (
            <Svgs.CherrySVG
                height={180}
                width={180}
            />
        )
    }
    return (
        <SafeAreaView>

            <View className="bg-emerald-200 m-4 h-3/5 rounded-3xl ">
                <TouchableOpacity className='m-2' onPress={() => navigation.goBack()}>
                    <Svgs.BackSVG height={40} width={40} />
                </TouchableOpacity>
                <View className='bg-emerald-200 h-3/5 rounded-3xl justify-center items-center'>
                    <Text className='m-8 font-bold text-xl'>What fruit is this?</Text>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment='center'
                        decelerationRate={'fast'}
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                    />

                </View>
            </View>
            <View className="items-center m-4">
                <View className="flex flex-row">
                    <View className="mx-2 box-content h-28 w-28 rounded-full justify-center">
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Quiz');
                            }}>
                            <View className="items-center">
                                <Svgs.PlaySVG
                                    height={100}
                                    width={100}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableOpacity className="bg-emerald-200 mx-10 mt-2 h-14 rounded-xl items-center justify-center">
                <Text>
                    Tiếp theo
                </Text>
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
});
