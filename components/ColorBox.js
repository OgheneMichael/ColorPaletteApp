import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ColorBox({colorName, hexCode}) {
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>{`${colorName} ${hexCode}`} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  boxText: {
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
});

export default ColorBox;
