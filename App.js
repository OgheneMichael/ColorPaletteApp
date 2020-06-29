import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.textIntro}>
          Here are some boxes of different colours
        </Text>
      </View>
      <View style={[styles.container, styles.cyan]}>
        <Text style={styles.text}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.container, styles.blue]}>
        <Text style={styles.text}>Blue #268bd2</Text>
      </View>
      <View style={[styles.container, styles.magenta]}>
        <Text style={styles.text}>Magenta #d33682</Text>
      </View>
      <View style={[styles.container, styles.orange]}>
        <Text style={styles.text}>Orange #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  container: {
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 2,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
  },
  textIntro: {
    fontWeight: '700',
    fontSize: 18,
  },
  safeArea: {
    flex: 2,
  },
});

export default App;
