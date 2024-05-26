import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import React from 'react';

export default function Correct({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: 'blue' }}></Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      Try again
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text> </Text>
      <Text style={{ fontSize: 20, color: 'green' }} onPress={() => navigation.goBack()}>
      </Text>
      <Text style={{ fontSize: 20, color: 'red' }} onPress={() => navigation.goBack()} multiline={true}>
        Go Back
      </Text>
    </View>
  );
}

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eec',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
