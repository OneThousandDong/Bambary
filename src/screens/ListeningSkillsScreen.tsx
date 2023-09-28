import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import ICBack from '../assets/svg/ic_back.svg';

const ListeningSkillsScreen = ({route, navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ICBack height={40} width={40} />
        </TouchableOpacity>
        <View className="bg-emerald-200 relative box-content m-4 h-40 border-2 rounded-3xl">
          {/* <Text>Bambary - English For Primary</Text> */}
        </View>
      </View>
      <View className="ml-3">
        <Text className="text-lg font-bold">Choose Categories</Text>
      </View>
    </SafeAreaView>
  );
};

export default ListeningSkillsScreen;

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
