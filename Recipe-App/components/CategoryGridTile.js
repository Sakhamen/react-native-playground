import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View
} from 'react-native';

const CategoryGridTile = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridContainer}>
      <TouchableCmp
        style={styles.gridItem}
        onPress={props.onSelect}
      >
        <View style={{...styles.container, ...{backgroundColor: props.color} }}>
          <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: (Platform.OS === 'android' && Platform.Version >= 21) ? 'hidden' : 'visible',
    elevation: 5
  },
  gridItem: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    textAlign: 'right'
  }
});

export default CategoryGridTile;
