import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import QuizWorldScreen from './src/screens/Quiz/QuizWorldScreen';
import BoardWorldScreen from './src/screens/Quiz/BoardWorldScreen';
import QuizCountriesScreen from './src/screens/Quiz/QuizCountriesScreen';
import BoardCountriesScreen from './src/screens/Quiz/BoardCountriesScreen';
import MapScreen from './src/screens/MapScreen';

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
          <Stack.Screen name="Map" component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
