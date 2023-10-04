import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Svgs from '../../constants/Svgs';
import {DATA} from './Data';
import { DATAVI } from "./DataVi";

const QuizScreen = ({route, navigation}) => {
  const [progress, setProgress] = useState(45);
  const [selected, setSelected] = useState([0, 0, 0, 0]);
  const [question, setQuestion] = useState(DATAVI[0]);
  const [indexQue, setIndexQues] = useState(1);
  const progressAnim = useRef(new Animated.Value(0)).current;

  const animateProgress = () => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    animateProgress();
    return () => {};
  }, [progress]);
  return (
    <SafeAreaView>
      <View className="bg-emerald-200 h-2/4 rounded-3xl m-4">
        <View className="flex flex-row justify-center items-center m-6">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Svgs.CloseSvg height={40} width={40} />
          </TouchableOpacity>
          <View style={styles.progressBG}>
            <Animated.View
              style={[
                styles.progress,
                {
                  width: progressAnim.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>
        </View>
        <View className="justify-center items-center text-center">
          {question.uri}
        </View>
      </View>
      <View className="items-center">
        <View className="flex flex-row">
          <Animated.View className="box-content h-28 w-1/2 rounded-full item justify-center">
            <TouchableOpacity
              onPress={() => setSelected([1, 0, 0, 0])}
              style={{
                backgroundColor: selected[0]
                  ? 'rgb(167 243 208)'
                  : 'rgb(236 253 245)',
              }}
              className="ml-10 mr-4 mt-2 h-16 rounded-xl items-center justify-center">
              <Text className="text-center">{question.answer[0]}</Text>
            </TouchableOpacity>
          </Animated.View>

          <View className="box-content h-28 w-1/2 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => setSelected([0, 1, 0, 0])}
              style={{
                backgroundColor: selected[1]
                  ? 'rgb(167 243 208)'
                  : 'rgb(236 253 245)',
              }}
              className="mr-10 ml-4 mt-2 h-16 rounded-xl items-center justify-center">
              <Text className="text-center">{question.answer[1]}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row">
          <View className="box-content h-28 w-1/2 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => setSelected([0, 0, 1, 0])}
              style={{
                backgroundColor: selected[2]
                  ? 'rgb(167 243 208)'
                  : 'rgb(236 253 245)',
              }}
              className="ml-10 mr-4 h-16 rounded-xl items-center justify-center">
              <Text className="text-center">{question.answer[2]}</Text>
            </TouchableOpacity>
          </View>

          <View className="box-content h-28 w-1/2 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => setSelected([0, 0, 0, 1])}
              style={{
                backgroundColor: selected[3]
                  ? 'rgb(167 243 208)'
                  : 'rgb(236 253 245)',
              }}
              className="mr-10 ml-4 h-16 rounded-xl items-center justify-center">
              <Text className="text-center">{question.answer[3]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          setIndexQues(indexQue + 1);
          setQuestion(DATAVI[indexQue]);
          // setProgress(Math.round((20 / 195) * 100))
          setProgress(25 + indexQue);
        }}
        className="bg-emerald-200 mx-10 mt-2 h-14 rounded-xl items-center justify-center">
        <Text>Tiếp theo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuizScreen;

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
  dot: {
    height: 8,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  button: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  progressBG: {
    width: '90%',
    height: 15,
    backgroundColor: '#C4CDD5',
    marginHorizontal: 10,
    borderRadius: 10,
  },

  progress: {
    width: '50%',
    height: 15,
    backgroundColor: '#00AB55',
    borderRadius: 10,
  },
});
