import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import QuizCountriesScreen from './src/screens/Quiz/QuizCountriesScreen';
import BoardCountriesScreen from './src/screens/Quiz/BoardCountriesScreen';
import MapScreen from './src/screens/MapScreen';
import QuizContinentScreen from './src/screens/Quiz/QuizContinentScreen';
import BoardContinentsScreen from './src/screens/Quiz/BoardContinentScreen';
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

const App = (): React.ReactElement => {
  console.log(DATAASIAVI.length); //53
  console.log(DATAASIA.length); //46
  console.log(DATAAFRICAVI.length); //58
  console.log(DATAASIA.length); //46
  console.log(DATAEUVI.length); //52
  console.log(DATAEU.length); //43
  console.log(DATANAMERICAVI.length); //40
  console.log(DATANAMERICA.length); //23
  console.log(DATAOCEANIAVI.length); //26
  console.log(DATAOCEANIA.length); //15
  console.log(DATASAMERICAVI.length); //14
  console.log(DATASAMERICA.length); //12
  for (var i = 0; i < DATASAMERICA.length; i++) {
    for (var k = 0; i < DATASAMERICAVI.length; k++) {
      if (DATASAMERICA[i]?.id == DATASAMERICAVI[k]?.id) {
        break;
      }
      if (k == DATASAMERICAVI.length - 1) {
        console.log(DATASAMERICAVI[i]);
      }
    }
  }
  console.log('Hii');
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
          <Stack.Screen name="Map" component={WorldMap} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
