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
const StudyScreen = ({ route, navigation }) => {
    const [currentIndex, setCurrentIndex] = useState('0');
    const { width } = useWindowDimensions();
    const scrollX = useRef(new Animated.Value(1)).current;
    const ref = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems && viewableItems?.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 105 })

    const Item = React.memo(({ title }) => {
        return (
            <>
                <Svgs.CherrySVG height={180} width={width} />
            </>
        );
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
                    <Text className="m-8 font-bold text-xl">What fruit is this?</Text>
                    <View className="flex flex-row m-4 items-center">
                        {DATA.map((item, index) => (
                            <Animated.View
                                key={index.toString()}
                                style={[styles.dot, { width: dotWidths[index], opacity: opacities[index] }]}
                            />
                        ))}
                    </View>
                    <FlatList
                        ref={ref}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment="center"
                        decelerationRate={'fast'}
                        pagingEnabled
                        data={DATA}
                        renderItem={({ item }) => <Item title={item.title} />}
                        keyExtractor={item => item.id}
                        onViewableItemsChanged={viewableItemsChanged}
                        viewabilityConfig={viewConfigRef.current}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            {
                                useNativeDriver: false,
                            },
                        )}
                        scrollEventThrottle={1}
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
                                <Svgs.PlaySVG height={100} width={100} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

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

export default StudyScreen;

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
