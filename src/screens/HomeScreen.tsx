import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Modal,
  Button, Animated, KeyboardAvoidingView
} from "react-native";
import React, { useEffect, useState } from "react";
import Svgs from '../constants/Svgs';
import MapScreen from "./MapScreen";

const CategoryData = [
  {
    name: 'Asisa',
    uri: <Svgs.Asia height={100} width={150} />
  },
  {
    name: 'Europe',
    uri: <Svgs.Europe height={100} width={100} />
  },
  {
    name: 'North America',
    uri: <Svgs.North_America height={100} width={150} />
  },
  {
    name: 'South America',
    uri: <Svgs.South_America height={100} width={150} />
  },
  {
    name: 'Africa',
    uri: <Svgs.Africa height={100} width={150} />
  },
  {
    name: 'Oceania',
    uri: <Svgs.Oceania height={100} width={120} />
  },
]

const HomeScreen = ({ route, navigation }) => {
  const [show, setShow] = useState(false);
  const OverlappingSquares = () => {
    return (
      <View style={styles.container} className="items-center">
        <View className="absolute bg-emerald-200 h-full w-full z-10 p-4 rounded-b-3xl">
          <View className="absolute left-10 top-10">
            <Svgs.MenuSVG height={20} width={20} />
          </View>
        </View>
        <View className="absolute flex flex-row top-16">
          <View className="bg-amber-200 mr-2 h-32 w-36 z-20 top-12 rounded-xl">
            <Text>Thế giới</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BoardWorldScreen');
              }}>
              <View>
                <Svgs.DinosaurSVG
                  style={{ transform: [{ rotateY: '180deg' }] }}
                  height={80}
                  width={80}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="bg-indigo-500 ml-2 h-32 w-36 z-20 top-12 rounded-xl">
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


  const [modalVisible, setModalVisible] = useState(false);

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
        setTimeout(() => setShowModal(false), 200)
        Animated.timing(scaleVal, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }
    return (
      <Modal
        transparent={true}
        visible={showModal}>
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.modal, { transform: [{ scale: scaleVal }] }]} >
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
        <View className="bg-emerald-200 h-1/5 w-full z-10 p-4 rounded-b-3xl">
          <View className="m-4">
            <Svgs.MenuSVG height={20} width={20} />
          </View>
        </View>

        <View className="flex flex-row absolute top-20">
          <View className="bg-amber-200 mr-2 h-32 w-36 z-20 rounded-xl">
            <View className="items-center justify-center">
              <Text>Thế giới</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BoardWorldScreen');
              }}>
              <View>
                <Svgs.DinosaurSVG
                  style={{ transform: [{ rotateY: '180deg' }] }}
                  height={80}
                  width={80}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View className="bg-indigo-500 ml-2 h-32 w-36 z-20  rounded-xl">           
            <View className="items-center justify-center">
            <Text>Quốc gia</Text>
            </View>
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

        <View className="flex-1 top-14">
          <Text className="text-lg font-bold m-2">Choose Categories</Text>
          <FlatList
            contentContainerStyle={{ justifyContent: 'center', alignItems: "center" }}
            data={CategoryData}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item, index }) => (
              <View className="mx-2 items-center" style={{ margin: index % 2 !== 0 ? 20 : 0 }}>
                <View style={{ justifyContent: 'center', alignItems: "center" }}
                  className="bg-indigo-500 w-36 h-32 rounded-xl">
                  {item?.uri}
                  <Text>
                    {item?.name}
                  </Text>
                </View>
                
              </View>
            )}
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
