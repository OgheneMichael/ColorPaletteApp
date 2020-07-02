import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';

const PalettePreview = ({ handlePress, colorPalette }) => {
  const { paletteName, colors } = colorPalette;

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{paletteName}</Text>

      <FlatList
        style={styles.list}
        data={colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View style={[styles.box, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    marginBottom: 20,
    flexDirection: 'row',
  },

  text: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    padding: 20,
    borderRadius: 3,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default PalettePreview;
