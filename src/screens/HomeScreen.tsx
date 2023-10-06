import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
  Animated,
  KeyboardAvoidingView,
  Dimensions,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Svgs from '../constants/Svgs';
import MapScreen from './MapScreen';
import LottieView from 'lottie-react-native';

const CategoryData = [
  {
    name: 'Asisa',
    uri: <Svgs.Asia height={100} width={150} />,
  },
  {
    name: 'Europe',
    uri: <Svgs.Europe height={100} width={150} />,
  },
  {
    name: 'North America',
    uri: <Svgs.North_America height={100} width={160} />,
  },
  {
    name: 'South America',
    uri: <Svgs.South_America height={100} width={150} />,
  },
  {
    name: 'Africa',
    uri: <Svgs.Africa height={100} width={150} />,
  },
  {
    name: 'Oceania',
    uri: <Svgs.Oceania height={100} width={150} />,
  },
  {
    name: 'World',
    uri: <Svgs.World height={100} width={120} />,
  },
];

const ExtensionData = [
  {
    name: 'Tất cả lá cờ',
    uri: <Svgs.Asia height={100} width={150} />,
  },
  {
    name: 'Europe',
    uri: <Svgs.Europe height={100} width={100} />,
  },
];

const HomeScreen = ({route, navigation}) => {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    // animationRef.current?.play();

    // Or set a specific startFrame and endFrame with:
    animationRef.current?.play();
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
      <View style={styles.container}>
        <View className="bg-sky-200 h-1/5 w-full z-10 p-4 rounded-b-3xl">
          <View className="m-4">
            <Svgs.MenuSVG height={20} width={20} />
          </View>
          <LottieView
            ref={animationRef}
            source={require('../assets/lottie/worldaround.json')}
          />
        </View>

        <View className="flex flex-row absolute top-20">
          <View className=" mr-2 h-32 w-36 z-20 rounded-xl">
            <ImageBackground  style={{height: 128, width: 144}} imageStyle={{ borderRadius: 12}} source={{uri: 'https://img.freepik.com/free-vector/gradient-background-vector-spring-light-pink-green_53876-105763.jpg'}}>
              <View className="items-center justify-center">
                <Text className="m-2">Quốc gia</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('BoardCountries');
                }}>
                <View className="flex flex-row">
                  <Svgs.HorseSVG height={80} width={80} />
                  <View className="justify-center">
                    <Text>195</Text>
                    <Text>Sovereign</Text>
                    <Text>states</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </ImageBackground>

          </View>
          <View className=" ml-2 h-32 w-36 z-10 rounded-xl">
          <ImageBackground  style={{height: 128, width: 144}} imageStyle={{ borderRadius: 12}} source={{uri: 'https://img.freepik.com/free-vector/background-gradient-green-tones_23-2148382072.jpg'}}>
          <View className="items-center justify-center">
              <Text className="m-2">Thế giới</Text>
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
                  <Text>249</Text>
                  <Text>Countries</Text>
                  <Text>ISO 3166</Text>
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
              // justifyContent: 'center',
              // alignItems: 'center',
            }}
            data={CategoryData}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'center',
            }}
            initialNumToRender={CategoryData.length}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({item, index}) => (
              <View 
                className="mx-2 items-center"
                style={{margin: index % 2 !== 0 ? 15 : 0}}>
                {item.name == 'World' ? (
                  <View
                    style={{
                      width: 320,
                      height: 100,
                    }}
                    className="bg-indigo-500 rounded-xl">
                    {item?.uri}
                    <Text>{item?.name}</Text>
                  </View>
                ) : (
                  <View className="bg-sky-100 h-36 w-36 rounded-xl items-center">
                    <View className='pt-1'>
                    {item?.uri}
                      </View>
                    <Text className="text-base font-bold m-2">{item?.name}</Text>
                  </View>
                )}
              </View>
            )}
            ListHeaderComponent={<Text className="text-lg font-bold m-2">Choose Categories</Text>}
            ListFooterComponent={
              <View>
                <Svgs.World
                  height={Dimensions.get('window').height / 3}
                  width={Dimensions.get('window').width}
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
