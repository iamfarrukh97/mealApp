import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.gridItem}>
      <View style={{...styles.container, ...{backgroundColor: props.color}}}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 3,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 50},
    shadowRadius: 20,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  title: {
    fontSize: 20,
  },
});

export default CategoryGridTile;
