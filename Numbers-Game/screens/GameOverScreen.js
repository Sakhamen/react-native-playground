import React from 'react';
import {
  Button, Text,
  Image, StyleSheet,
  View, Dimensions,
  ScrollView
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

import Colors from '../constants/colors';


const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/success.png')}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed
            <Text style={styles.highlight}> {props.totalRounds}</Text> rounds to guess the number
            <Text style={styles.highlight}> {props.userNumber}</Text>.
          </BodyText>
        </View>

        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    borderWidth: 3,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderColor: 'black',
    width: Dimensions.get('window').width * 0.7, //  0.7 = 70%
    height: Dimensions.get('window').width * 0.7,
    marginVertical: Dimensions.get('window').height / 30, // 20 = 5%
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginVertical: Dimensions.get('window').height / 60, // 2.5%
    marginHorizontal: Dimensions.get('window').height / 20
  },
  resultText: {
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    textAlign: 'center'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
});

export default GameOverScreen;
