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
import {DATAVI} from '../DataQuiz/DataVi';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';

const QuizWorldScreen = ({route, navigation}) => {
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState([0, 0, 0, 0]);
  const [question, setQuestion] = useState(DATAVI[0]);
  const [indexQue, setIndexQues] = useState(1);
  const [correctAnwser, setCorrectAnswer] = useState(false);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<LottieView>(null);

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
          <TouchableOpacity
            className="z-10"
            onPress={() => navigation.goBack()}>
            <Svgs.CloseSvg height={40} width={40} />
          </TouchableOpacity>
          <View style={styles.progressBG}>
            <Animated.View
              style={[
                styles.progress,
                {
                  height: indexQue < 8 ? 10 : 15,
                  width: progressAnim.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>
          <LottieView
            style={{
              width: 400,
              height: 400,
              position: 'absolute',
              top: 0,
              bottom: 0,
              zIndex: 1,
            }}
            loop={false}
            ref={animationRef}
            source={require('../../assets/lottie/congratulations.json')}
          />
        </View>
        <View className="justify-center items-center text-center">
          <FastImage
            style={{width: 250, height: 250}}
            source={question.uri}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </View>
      <View className="items-center">
        <View className="flex flex-row">
          <Animated.View className="box-content h-28 w-1/2 rounded-full item justify-center">
            <TouchableOpacity
              onPress={() => !correctAnwser && setSelected([1, 0, 0, 0])}
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
              onPress={() => !correctAnwser && setSelected([0, 1, 0, 0])}
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
              onPress={() => !correctAnwser && setSelected([0, 0, 1, 0])}
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
              onPress={() => !correctAnwser && setSelected([0, 0, 0, 1])}
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

      {correctAnwser ? (
        <TouchableOpacity
          onPress={() => {
            if (indexQue > 253) {
            } else {
              setIndexQues(indexQue + 1);
              setQuestion(DATAVI[indexQue]);
              setProgress(Math.round((indexQue / 253) * 100));
              setCorrectAnswer(false);
              setSelected([0, 0, 0, 0]);
            }
          }}
          className="bg-emerald-200 mx-10 mt-2 h-14 rounded-xl items-center justify-center">
          <Text>Tiếp theo</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            if (selected[question?.correct] == 1) {
              setCorrectAnswer(true);
              animationRef.current.play();
            }
          }}
          className="bg-emerald-200 mx-10 mt-2 h-14 rounded-xl items-center justify-center">
          <Text>Kiểm tra</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
};

export default QuizWorldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBG: {
    width: '90%',
    height: 15,
    backgroundColor: '#C4CDD5',
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },

  progress: {
    width: '50%',
    backgroundColor: '#00AB55',
    borderRadius: 10,
  },
});
