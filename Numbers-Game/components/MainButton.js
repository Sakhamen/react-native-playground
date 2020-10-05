import React from 'react';
import {
  Text, StyleSheet, View, Platform,
  TouchableOpacity, TouchableNativeFeedback
} from 'react-native';

import Colors from '../constants/colors';

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden'
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'open-sans',
    fontSize: 18
  }
});

export default MainButton;
