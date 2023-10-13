import React, { useEffect } from "react";
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import QuizCountriesScreen from './src/screens/Quiz/QuizCountriesScreen';
import BoardCountriesScreen from './src/screens/Quiz/BoardCountriesScreen';
import MapScreen from './src/screens/MapScreen';
import QuizContinentScreen from './src/screens/Quiz/QuizContinentScreen';
import BoardContinentsScreen from './src/screens/Quiz/BoardContinentScreen';
import { DATA, DATAVI } from "./src/screens/DataQuiz/Data";
import { DATAAFRICA, DATAAFRICAVI } from "./src/screens/DataQuiz/DataAfrica";
import { DATAASIA, DATAASIAVI } from "./src/screens/DataQuiz/DataAsia";
import { DATAEU, DATAEUVI } from "./src/screens/DataQuiz/DataEu";
import { DATANAMERICA, DATANAMERICAVI } from "./src/screens/DataQuiz/DataNAmerica";
import { DATAOCEANIA } from "./src/screens/DataQuiz/DataOceania";
import { DATASAMERICA, DATASAMERICAVI } from "./src/screens/DataQuiz/DataSAmerica";
import { DATAVI195 } from "./src/screens/DataQuiz/DataVI195";
import BoardContinentScreen from "./src/screens/Quiz/BoardContinentScreen";
import WorldMap from "./src/screens/MapScreen";

const App = (): React.ReactElement => {
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
