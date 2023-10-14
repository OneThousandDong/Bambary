import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    FlatList,
    Modal,
    Animated
} from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import Svgs from '../../constants/Svgs';
import { DATA, DATAVI } from '../DataQuiz/Data';
import FastImage from 'react-native-fast-image';
import useWorldStore from '../../store/useWorldStore';
import WorldMap from '../MapScreen';
import { DATA195, DATAVI195 } from '../DataQuiz/DataVI195';
import { Country } from '../../model/Country';
import { DATAASIA, DATAASIAVI } from '../DataQuiz/DataAsia';
import { DATAOCEANIA, DATAOCEANIAVI } from '../DataQuiz/DataOceania';
import { DATAAFRICA, DATAAFRICAVI } from '../DataQuiz/DataAfrica';
import { DATASAMERICA, DATASAMERICAVI } from '../DataQuiz/DataSAmerica';
import { DATANAMERICA, DATANAMERICAVI } from '../DataQuiz/DataNAmerica';
import { DATAEU, DATAEUVI } from '../DataQuiz/DataEu';

const FlagsScreen = ({ route, navigation }) => {
    const { languageState } = useWorldStore();
    const [modalVisible, setModalVisible] = useState(false);
    const [country, setCountry] = useState('VN');
    const [colorBG, setColorBg] = useState('');
    const [dataCountry, setDataCountry] = useState<Country[]>([]);

    useEffect(() => {
        if (colorBG == dataVI[0]) {
            setDataCountry(DATAASIAVI);
        } else if (colorBG == dataVI[1]) {
            setDataCountry(DATAEUVI);
        } else if (colorBG == dataVI[2]) {
            setDataCountry(DATANAMERICAVI);
        } else if (colorBG == dataVI[3]) {
            setDataCountry(DATASAMERICAVI);
        } else if (colorBG == dataVI[4]) {
            setDataCountry(DATAAFRICAVI);
        } else if (colorBG == dataVI[5]) {
            setDataCountry(DATAOCEANIAVI);
        } else if (colorBG == data[0]) {
            setDataCountry(DATAASIA);
        } else if (colorBG == data[1]) {
            setDataCountry(DATAEU);
        } else if (colorBG == data[2]) {
            setDataCountry(DATANAMERICA);
        } else if (colorBG == data[3]) {
            setDataCountry(DATASAMERICA);
        } else if (colorBG == data[4]) {
            setDataCountry(DATAAFRICA);
        } else if (colorBG == data[5]) {
            setDataCountry(DATAOCEANIA);
        } else if (languageState == 'VI') {
            setDataCountry(DATAVI);
        } else {
            setDataCountry(DATA);
        }
    }, [colorBG]);

    const ModalPopup = ({ visible }) => {
        const scaleVal = React.useRef(new Animated.Value(1)).current;
        const [showModal, setShowModal] = useState(visible);
        useEffect(() => {
            toggleModal();
        }, [visible]);

        const toggleModal = () => {
            if (visible) {
                setShowModal(true);
                Animated.spring(scaleVal, {
                    toValue: 1,
                    delay: 300,
                    useNativeDriver: true,
                }).start();
            } else {
                setTimeout(() => setShowModal(false), 200);
                Animated.timing(scaleVal, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }).start();
            }
        };

        return (
            <Modal transparent={true} visible={showModal}>
                <View className='rounded-md' style={styles.modalContainer}>
                    <Animated.View
                        style={[styles.modal, { transform: [{ scale: scaleVal }] }]}>
                        <View className='flex flex-row'>
                            <TouchableOpacity onPress={() => setModalVisible(false)}>
                                <Svgs.CloseSvg height={40} width={40} />
                            </TouchableOpacity>
                            <View className='justify-center'>
                                <Text className='font-bold text-xs text-white'>{languageState == 'VI' ? 'Bản đồ thế giới (Với các quốc gia có diên tích nhỏ có thể sẽ không hiển thị)' : 'Flag(Countries with small areas may not be displayed)'}</Text>
                            </View>
                        </View>
                        <WorldMap countries={[country]} />
                    </Animated.View>
                </View>
            </Modal>
        );
    };

    const Cell = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                    setCountry(item.id)
                }}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#AEACA1', borderRadius: 10, margin: 8 }}>
                <FastImage
                    style={{ width: 100, height: 100 }}
                    source={item?.uri}
                    resizeMode={FastImage.resizeMode.contain}
                />
                <Text className='font-bold'>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const dataVI = ['Châu Á', 'Châu Âu', 'Bắc Mĩ', 'Nam Mĩ', 'Châu Phi', 'Châu Đại Dương'];
    const data = ['Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => setColorBg(item)} style={{ width: 110, height: 40, backgroundColor: colorBG == item ? '#36C8B2' : '#AEBBB9', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 4 }}>
            <Text style={{ color: 'white', fontSize: 16 }}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View className='bg-gray-200'>
            <View className='flex flex-row'>
                <TouchableOpacity className="m-2 w-2/5" onPress={() => navigation.goBack()}>
                    <Svgs.BackSVG height={40} width={40} />
                </TouchableOpacity>
                <View className='justify-center'>
                    <Text className='font-bold text-xl'>{languageState == 'VI' ? 'Tất cả lá cờ' : 'Flag'}</Text>
                </View>
            </View>
            <FlatList
                horizontal
                data={languageState == 'VI' ? dataVI :data}
                renderItem={renderItem}
                keyExtractor={(item) => item.toString()}
            />
            <FlatList
                data={dataCountry}
                numColumns={2}
                renderItem={({ item }) => <Cell item={item} />}
                keyExtractor={item => item.id}
            />
            <ModalPopup visible={modalVisible} />
        </View>
    );
};

export default FlagsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modal: {
        width: Dimensions.get('window').width,
        height: '75%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20
    },
});
