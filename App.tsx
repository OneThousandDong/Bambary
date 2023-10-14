import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import QuizCountriesScreen from './src/screens/Quiz/QuizCountriesScreen';
import BoardCountriesScreen from './src/screens/Quiz/BoardCountriesScreen';
import QuizContinentScreen from './src/screens/Quiz/QuizContinentScreen';
import {DATA, DATAVI} from './src/screens/DataQuiz/Data';
import {DATAAFRICA, DATAAFRICAVI} from './src/screens/DataQuiz/DataAfrica';
import {DATAASIA, DATAASIAVI} from './src/screens/DataQuiz/DataAsia';
import {DATAEU, DATAEUVI} from './src/screens/DataQuiz/DataEu';
import {
  DATANAMERICA,
  DATANAMERICAVI,
} from './src/screens/DataQuiz/DataNAmerica';
import {DATAOCEANIA, DATAOCEANIAVI} from './src/screens/DataQuiz/DataOceania';
import {
  DATASAMERICA,
  DATASAMERICAVI,
} from './src/screens/DataQuiz/DataSAmerica';
import {DATAVI195} from './src/screens/DataQuiz/DataVI195';
import BoardContinentScreen from './src/screens/Quiz/BoardContinentScreen';
import WorldMap from './src/screens/MapScreen';
import FlagsScreen from './src/screens/Quiz/FlagsScreen';

const App = (): React.ReactElement => {
  // console.log(DATAAFRICAVI.length); //54
  // console.log(DATAAFRICA.length); //56
  // console.log(DATAASIAVI.length); //58
  // console.log(DATAASIA.length); //48
  // console.log(DATAEUVI.length); //52
  // console.log(DATAEU.length); //43
  // console.log(DATANAMERICAVI.length); //40
  // console.log(DATANAMERICA.length); //23
  // console.log(DATAOCEANIAVI.length); //26
  // console.log(DATAOCEANIA.length); //14
  // console.log(DATASAMERICAVI.length); //14
  // console.log(DATASAMERICA.length); //12
  // for (var i = 0; i < DATAAFRICAVI.length; i++) {
  //   for (var k = 0; k < DATAAFRICA.length; k++) {
  //     if (DATAAFRICAVI[i].id == DATAAFRICA[k].id) {
  //       break;
  //     }
  //     if (k == DATAAFRICA.length - 1) {
  //       console.log(DATAAFRICAVI[i]);
  //     }
  //   }
  // }
  // let index = 0;
  // let data = DATASAMERICA;
  // for (var i = 0; i < data.length; i++) {
  //   for (var k = 0; k < data[i].answer.length; k++) {
  //     if (data[i].name == data[i].answer[k]) {
  //       index ++;
  //     }
  //     if (index == 2) {
  //       console.log(data[i])
  //     }
  //   }
  //   index = 0
  // }
  // console.log('Hii')
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="QuizCountries" component={QuizCountriesScreen} />
          <Stack.Screen
            name="BoardCountries"
            component={BoardCountriesScreen}
          />
          <Stack.Screen name="QuizContinent" component={QuizContinentScreen} />
          <Stack.Screen
            name="BoardContinent"
            component={BoardContinentScreen}
          />
          <Stack.Screen
            name="Flags"
            component={FlagsScreen}
          />
          {/* <Stack.Screen name="Map" component={WorldMap} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
