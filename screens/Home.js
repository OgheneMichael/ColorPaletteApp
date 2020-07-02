import React, { useCallback, useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState();

  const handleFetchColorPlattes = useCallback(async () => {
    const res = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (res.ok) {
      const palettes = await res.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchColorPlattes();
  }, []);

  return (
    <FlatList
      data={colorPalettes}
      style={styles.list}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Home;
