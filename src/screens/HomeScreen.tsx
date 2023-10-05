import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button, Animated
} from "react-native";
import React, { useEffect, useState } from "react";
import Svgs from '../constants/Svgs';
import MapScreen from "./MapScreen";

const HomeScreen = ({route, navigation}) => {
  const [show, setShow] = useState(false);
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

  const scaleVal = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [modalVisible]);

  const toggleModal = () => {
    if (modalVisible) {
      Animated.spring(scaleVal, {
        toValue: 1,
        delay: 300,
        useNativeDriver: true
      })
    } else {

    }
  }
  const ModalPopup = ({visible, children}) => {
    return (
      <Modal
        // animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalContainer}
          onPress={() => setModalVisible(false)}>
          <TouchableOpacity style={styles.modal} activeOpacity={1}>
            <MapScreen countries={['VN']} />
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    );
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // <SafeAreaView>
    //   <ScrollView className="top-60">
    //     <View className="ml-3">
    //       <Text className="text-lg font-bold">Choose Categories</Text>
    //     </View>
    //     <View className="flex flex-row justify-center mb-14">
    //       <View className="bg-indigo-500 mr-6 w-36 h-28 rounded-xl">
    //         {/*<Svgs.Asia*/}
    //         {/*  height={150}*/}
    //         {/*  width={150}*/}
    //         {/*/>*/}
    //       </View>
    //       <View className="bg-amber-200 mt-6 w-36 h-28 rounded-xl">
    //       </View>
    //     </View>
    //     <View className="flex flex-row justify-center mb-14">
    //       <View className="bg-indigo-500 mr-6 w-36 h-28 rounded-xl">
    //         {/*<Svgs.IslandSVG*/}
    //         {/*  height={150}*/}
    //         {/*  width={150}*/}
    //         {/*  style={{transform: [{rotateY: '180deg'}]}}*/}
    //         {/*/>*/}
    //       </View>
    //       <View className="bg-amber-200 mt-6 w-36 h-28 rounded-xl">
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <View>
      <ModalPopup visible={modalVisible} />
      <Button title="CLick" onPress={() => setModalVisible(true)} />
    </View>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2e6ff',
  },
  modal: {
    width: 155,
    height: 300,
    backgroundColor: '#b3ffb3',
  },
});
