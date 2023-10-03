import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import ListeningSkillsScreen from './src/screens/CategoryScreen';
import StudyScreen from './src/screens/Quiz/StudyScreen';
import ChooseTypeQuiz from './src/screens/Quiz/ChooseTypeQuiz';
import QuizScreen from './src/screens/Quiz/QuizScreen';
import LearnBoardScreen from "./src/screens/Quiz/LearnBoardScreen";

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
          <Stack.Screen
            name="ListeningSkills"
            component={ListeningSkillsScreen}
          />
          <Stack.Screen name="StudyQuiz" component={StudyScreen} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="ChooseTypeQuiz" component={ChooseTypeQuiz} />
          <Stack.Screen name="LearnBoard" component={LearnBoardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
