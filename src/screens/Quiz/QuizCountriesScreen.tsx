import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Text,
  Dimensions,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Svgs from '../../constants/Svgs';
import {DATAVI} from '../DataQuiz/DataVi';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
import useWorldStore from '../../store/useWorldStore';
import {QuantityQuestionData} from '../DataQuiz/QuantityQuestionData';
const TOTAL_FLAG = 1;

const QuizCountriesScreen = ({route, navigation}) => {
  const [progress, setProgress] = useState(0);
  const [selected, setSelected] = useState([0, 0, 0, 0]);
  const [buttonColor, setButtonnColor] = useState('#ebebe0');
  const [question, setQuestion] = useState(DATAVI[0]);
  const [indexQue, setIndexQues] = useState(1);
  const [correctAnwser, setCorrectAnswer] = useState(false);
  const progressAnim = useRef(new Animated.Value(0)).current;
  const animationRef = useRef<LottieView>(null);
  const animationRefWrong = useRef<LottieView>(null);
  const animatedScaleCompleted = useRef<LottieView>(null);
  const animatedScale1 = useRef(new Animated.Value(0)).current;
  const animatedScale2 = useRef(new Animated.Value(0)).current;
  const animatedScale3 = useRef(new Animated.Value(0)).current;
  const animatedScale4 = useRef(new Animated.Value(0)).current;
  const animatedScaleButton = useRef(new Animated.Value(0)).current;
  const [incorrect, setIncorrect] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const {quantityQuestionCountries, scoreCountries, setScoreCountries} =
    useWorldStore();
  const [scoreNow, setScoreNow] = useState(0);
  const [indexQuestion, setIndexQuestion] = useState(0);
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

  useEffect(() => {
    if (selected.filter(i => i == 1).length > 0) {
      setButtonnColor('#00cc00');
      setIncorrect(false);
    }
  }, [selected]);

  useEffect(() => {
    animationRefWrong.current?.play();
  }, [incorrect]);

  useEffect(() => {
    animatedScale1.setValue(1);
    animatedScale2.setValue(1);
    animatedScale3.setValue(1);
    animatedScale4.setValue(1);
    animatedScaleButton.setValue(1);
    let index = QuantityQuestionData.find(
      i => i.name === quantityQuestionCountries,
    )?.index;
    if (index) {
      setIndexQuestion(index);
      setScoreNow(scoreCountries[index]);
    }
  }, []);

  const handleButton = async () => {
    animatedScaleButton.setValue(0.8);
    Animated.spring(animatedScaleButton, {
      toValue: 1,
      bounciness: 24,
      speed: 4,
      useNativeDriver: true,
    }).start();
  };

  const handleButton1 = () => {
    animatedScale1.setValue(0.8);
    Animated.spring(animatedScale1, {
      toValue: 1,
      bounciness: 24,
      speed: 4,
      useNativeDriver: true,
    }).start();
  };
  const handleButton2 = () => {
    animatedScale2.setValue(0.8);
    Animated.spring(animatedScale2, {
      toValue: 1,
      bounciness: 24,
      speed: 4,
      useNativeDriver: true,
    }).start();
  };
  const handleButton3 = () => {
    animatedScale3.setValue(0.8);
    Animated.spring(animatedScale3, {
      toValue: 1,
      bounciness: 24,
      speed: 4,
      useNativeDriver: true,
    }).start();
  };
  const handleButton4 = () => {
    animatedScale4.setValue(0.8);
    Animated.spring(animatedScale4, {
      toValue: 1,
      bounciness: 24,
      speed: 4,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView>
      <View className="bg-cyan-200 h-2/4 rounded-3xl m-4">
        <View className="flex flex-row justify-center items-center m-6">
          <TouchableOpacity
            className="z-50"
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
          {incorrect ? (
            <LottieView
              style={{
                width: Dimensions.get('window').width / 1.5,
                height: Dimensions.get('window').height / 1.5,
                position: 'absolute',
                top: 0,
                bottom: 0,
                zIndex: 2,
              }}
              loop={false}
              ref={animationRefWrong}
              source={require('../../assets/lottie/wrong.json')}
            />
          ) : null}
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
        <LottieView
          style={{
            width: 400,
            height: 400,
            position: 'absolute',
            top: 0,
            bottom: 0,
            zIndex: showCompleted ? 1 : 0,
          }}
          loop={false}
          ref={animatedScaleCompleted}
          onAnimationFinish={() => setTimeout(() => navigation.goBack(), 1000)}
          source={require('../../assets/lottie/completed.json')}
        />
        <View className="flex flex-row">
          <Animated.View
            style={{transform: [{scale: animatedScale1}]}}
            className="box-content h-28 w-1/2 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => {
                handleButton1();
                !correctAnwser && setSelected([1, 0, 0, 0]);
              }}
              style={{
                backgroundColor: selected[0] ? '#00bfff' : 'rgb(236 253 245)',
              }}
              className="ml-10 mr-4 mt-2 h-16 rounded-xl items-center justify-center">
              <Text className="text-center">{question.answer[0]}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{transform: [{scale: animatedScale2}]}}
            className="box-content h-28 w-1/2 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => {
                handleButton2();
                !correctAnwser && setSelected([0, 1, 0, 0]);
              }}
              style={{
                backgroundColor: selected[1] ? '#00bfff' : 'rgb(236 253 245)',
              }}
              className="mr-10 ml-4 mt-2 h-16 rounded-xl items-center justify-center">
              <Text className="text-center">{question.answer[1]}</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <View className="flex flex-row">
          <Animated.View
            style={{transform: [{scale: animatedScale3}]}}
            className="box-content h-28 w-1/2 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => {
                handleButton3();
                !correctAnwser && setSelected([0, 0, 1, 0]);
              }}
              style={{
                backgroundColor: selected[2] ? '#00bfff' : 'rgb(236 253 245)',
              }}
              className="ml-10 mr-4 h-16 rounded-xl items-center justify-center">
              <Text className="text-center">{question.answer[2]}</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{transform: [{scale: animatedScale4}]}}
            className="box-content h-28 w-1/2 rounded-full justify-center">
            <TouchableOpacity
              onPress={() => {
                handleButton4();
                !correctAnwser && setSelected([0, 0, 0, 1]);
              }}
              style={{
                backgroundColor: selected[3] ? '#00bfff' : 'rgb(236 253 245)',
              }}
              className="mr-10 ml-4 h-16 rounded-xl items-center justify-center">
              <Text className="text-center">{question.answer[3]}</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
      {correctAnwser ? (
        <TouchableOpacity
          onPress={() => {
            if (indexQue > TOTAL_FLAG) {
              setShowCompleted(true);
              animatedScaleCompleted.current?.play();
            } else {
              setIndexQues(indexQue + 1);
              setQuestion(DATAVI[indexQue]);
              setProgress(Math.round((indexQue / 195) * 100));
              setCorrectAnswer(false);
              setSelected([0, 0, 0, 0]);
              setButtonnColor('#ebebe0');
              animatedScaleButton.setValue(1);
              if (indexQue + 1 > scoreNow) {
                let scoreArr = scoreCountries;
                scoreArr[indexQuestion] = indexQue + 1;
                setScoreCountries(scoreArr);
              }
            }
          }}
          style={{backgroundColor: buttonColor}}
          className="mx-10 mt-2 h-14 rounded-xl items-center justify-center">
          <Text className="text-lg font-bold text-white">Tiếp theo</Text>
        </TouchableOpacity>
      ) : (
        <Animated.View style={{transform: [{scale: animatedScaleButton}]}}>
          <TouchableOpacity
            onPress={() => {
              handleButton();
              if (selected[question?.correct] == 1) {
                setCorrectAnswer(true);
              } else {
                setSelected([0, 0, 0, 0]);
                setButtonnColor('#ff4d4d');
                setIncorrect(true);
              }
              setTimeout(() => {
                if (selected[question?.correct] == 1) {
                  animationRef.current?.play();
                } else {
                  animationRefWrong.current?.play();
                }
              }, 100);
            }}
            style={{backgroundColor: buttonColor}}
            className=" mx-10 mt-2 h-14 rounded-xl items-center justify-center">
            <Text className="text-lg font-bold text-white">Kiểm tra</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </SafeAreaView>
  );
};

export default QuizCountriesScreen;

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
