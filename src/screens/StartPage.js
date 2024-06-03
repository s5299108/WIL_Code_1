// src/screens/StartPage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StartPage = ({ navigation }) => {
  const navToMain = () => navigation.navigate('MainTabs');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Cryptography Puzzles</Text>
      <TouchableOpacity style={styles.startButton} onPress={navToMain}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cec',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue',
  },
  startButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default StartPage;
