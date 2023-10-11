import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Svgs from '../constants/Svgs';
import MapScreen from './MapScreen';
import LottieView from 'lottie-react-native';
import {useMMKV} from 'react-native-mmkv';
import useWorldStore from '../store/useWorldStore';
import {storage} from '../store/mmkv';
import useMenuStore from '../store/useMenuStore';

const CategoryData = [
  {
    name: 'Asia',
    uri: <Svgs.Asia height={100} width={150} />,
    id: 'Asia',
  },
  {
    name: 'Europe',
    uri: <Svgs.Europe height={100} width={150} />,id: 'Europe',
  },
  {
    name: 'North America',
    uri: <Svgs.North_America height={100} width={130} />,id: 'NAmerica',
  },
  {
    name: 'South America',
    uri: <Svgs.South_America height={100} width={140} />,id: 'SAmerica',
  },
  {
    name: 'Africa',
    uri: <Svgs.Africa height={100} width={140} />,id: 'Africa',
  },
  {
    name: 'Oceania',
    uri: <Svgs.Oceania height={100} width={150} />,id: 'Oceania',
  },
  {
    name: 'Flags',
    uri: <Svgs.World height={100} width={120} />,id: 'Flags',
  },
];

const CategoryDataVi = [
  {
    name: 'Châu Á',
    uri: <Svgs.Asia height={100} width={150} />,id: 'Asia',
  },
  {
    name: 'Châu Âu',
    uri: <Svgs.Europe height={100} width={150} />,id: 'Europe',
  },
  {
    name: 'Bắc Mĩ',
    uri: <Svgs.North_America height={100} width={130} />,id: 'NAmerica',
  },
  {
    name: 'Nam Mĩ',
    uri: <Svgs.South_America height={100} width={140} />,id: 'SAmerica',
  },
  {
    name: 'Châu Phi',
    uri: <Svgs.Africa height={100} width={140} />,id: 'Africa',
  },
  {
    name: 'Châu Đại Dương',
    uri: <Svgs.Oceania height={100} width={150} />,id: 'Oceania',
  },
  {
    name: 'Tất cả lá cờ',
    uri: <Svgs.World height={100} width={150} />,id: 'Flags',
  },
];

const HomeScreen = ({route, navigation}) => {
  const {languageState, setLanguageState} = useWorldStore();
  const {setTypeCategory} = useMenuStore();
  const animationRef = useRef<LottieView>(null);
  const animationRef1 = useRef<LottieView>(null);
  useEffect(() => {
    animationRef.current?.play();
    animationRef1.current?.play();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const ModalPopup = ({visible}) => {
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
        <View style={styles.modalContainer}>
          <Animated.View
            style={[styles.modal, {transform: [{scale: scaleVal}]}]}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Svgs.CloseSvg height={40} width={40} />
            </TouchableOpacity>
            <MapScreen countries={['VN']} />
          </Animated.View>
        </View>
      </Modal>
    );
  };

  return (
    <>
      <View className="bg-white" style={styles.container}>
        <ImageBackground
          imageStyle={{
            height: Dimensions.get('window').height / 5,
            width: Dimensions.get('window').width,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
          source={require('../assets/image/gradient1.png')}
          className=" h-1/5 w-full z-10 p-4 rounded-b-3xl">
          <View className="m-4">
            <Svgs.MenuSVG height={20} width={20} />
          </View>
          <LottieView
            ref={animationRef}
            source={require('../assets/lottie/worldaround.json')}
          />
          <View style={{position: 'absolute', right: 0, margin: 20}}>
            <TouchableOpacity
              onPress={() => {
                if (languageState == 'ENG') {
                  setLanguageState('VI');
                } else {
                  setLanguageState('ENG');
                }
              }}>
              <Svgs.LanguageSVG height={30} width={30} />
              <View className="items-center justify-center">
                {languageState == 'ENG' ? (
                  <Text className="text-xs">ENG</Text>
                ) : (
                  <Text className="text-xs">VI</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View className="flex flex-row absolute top-24">
          <View className=" mr-2 z-20 rounded-xl">
            <ImageBackground
              style={{height: 120, width: 144}}
              imageStyle={{borderRadius: 12}}
              source={require('../assets/image/gradient1.png')}>
              <View className="items-center justify-center">
                {languageState == 'VI' ? (
                  <Text className="text-lg font-bold m-2 text-white">
                    Quốc gia
                  </Text>
                ) : (
                  <Text className="text-lg font-bold m-2 text-white">
                    Countries
                  </Text>
                )}
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BoardCountries');
                }}>
                <View className="flex flex-row">
                  <Svgs.HorseSVG height={80} width={80} />
                  <View className="justify-center">
                    <Text className="text-xl font-bold">195</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View className=" ml-2 z-10 rounded-xl">
            <ImageBackground
              style={{height: 120, width: 144}}
              imageStyle={{borderRadius: 12}}
              source={require('../assets/image/gradient2.png')}>
              <View className="items-center justify-center">
                {languageState == 'VI' ? (
                  <Text className="text-lg font-bold m-2 text-white">
                    Thế giới
                  </Text>
                ) : (
                  <Text className="text-lg font-bold m-2 text-white">
                    World
                  </Text>
                )}
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BoardWorldScreen');
                }}>
                <View className="flex flex-row">
                  <Svgs.DinosaurSVG
                    style={{transform: [{rotateY: '180deg'}]}}
                    height={80}
                    width={80}
                  />
                  <View className="justify-center">
                    <Text className="text-lg font-bold">249</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>

        <View className="flex-1 top-14">
          <FlatList
            contentContainerStyle={{
              marginTop: 4,
            }}
            data={languageState == 'VI' ? CategoryDataVi : CategoryData}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'center',
            }}
            initialNumToRender={CategoryData.length}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={() => setTypeCategory(item.id)}>
              <View
                className="mx-2 items-center"
                style={{margin: index % 2 !== 0 ? 15 : 0}}>
                {item.name == 'World' ? (
                  <View className="rounded-xl items-center">
                    <ImageBackground
                      style={{height: 100, width: 300}}
                      imageStyle={{borderRadius: 12}}
                      source={require('../assets/image/gradient.png')}>
                      <View className="rounded-xl items-center flex flex-row">
                        {item?.uri}
                        <Text className="text-base font-bold">
                          {item?.name}
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                ) : (
                  <View className="rounded-xl items-center">
                    <ImageBackground
                      style={{height: 144, width: 144}}
                      imageStyle={{borderRadius: 12}}
                      source={require('../assets/image/gradient.png')}>
                      <View className="pt-1">{item?.uri}</View>
                      <View className="items-center">
                        <Text className="text-base font-bold m-2">
                          {item?.name}
                        </Text>
                      </View>
                    </ImageBackground>
                  </View>
                )}
              </View>
              </TouchableOpacity>
            )}
            ListHeaderComponent={
              <Text className="text-lg font-bold m-2 ml-10">
                {languageState == 'VI' ? 'Chọn thể loại' : 'Choose Categories'}
              </Text>
            }
            ListFooterComponent={
              <View
                style={{
                  height: Dimensions.get('window').height / 4,
                  width: Dimensions.get('window').width,
                  marginBottom: 10,
                }}>
                <LottieView
                  ref={animationRef1}
                  source={require('../assets/lottie/world.json')}
                />
              </View>
            }
            onEndReachedThreshold={0.2}
          />
        </View>
      </View>
    </>
    // <View>
    //   <ModalPopup visible={modalVisible} />
    //   <Button title="CLick" onPress={() => setModalVisible(true)} />
    // </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  headerBox: {
    backgroundColor: 'blue',
    margin: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2e6ff',
  },
  modal: {
    width: '90%',
    height: '30%',
    backgroundColor: '#b3ffb3',
  },
});
