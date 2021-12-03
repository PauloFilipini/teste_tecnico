import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getPokemon } from './src/services/getPokemon';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello word</Text>
      <StatusBar style="auto" />
      <TouchableOpacity  onPress={getPokemon}><Text>Pokemon</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
