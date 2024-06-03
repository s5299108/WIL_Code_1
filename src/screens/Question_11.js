import { View, Text, StyleSheet, TextInput, Button ,TouchableOpacity} from "react-native";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Home({ navigation }) {
  const [value, setValue] = useState('');
  const [showHint, setShowHint] = useState(false);

  const navToCorrect = () => {
    if (value === 'Wkh ilyh eralqj zlcdugv mxps txlfnob') {
      navigation.navigate('correct_11');
    } else {
      navigation.navigate('Incorrect');
    }
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: 'blue' }}>Solve the following code:</Text>
      <Text> </Text>
      <Text>Aside from decryption, being able to encrypt a code into ciphertext is another useful skill to have. Written below is a normal statement written in plaintext.</Text>
      <Text>See if you can encrypt the statement by shifting the letters three spots up in the alphabet.</Text>
      <Text> </Text>
      <Text>The five boxing wizards jump quickly</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
      <Text> </Text>
      <Button title='Submit' onPress={navToCorrect} />
      <Text> </Text>
      <TouchableOpacity style={styles.hintButton} onPress={toggleHint}>
                <Icon name="lightbulb-o" size={20} color="#fff" />
                <Text style={styles.buttonText}> Hint</Text>
            </TouchableOpacity>
      {showHint && (
        <Text style={styles.hint}>
          REMEMBER... Case Sensitive!!!
          Shift each letter three spots up the alphabet: A ↔ D, B ↔ E, C ↔ F, etc.
        </Text>
      )}
       <View style={styles.bottomRightContainer}>
                <Icon name="hand-o-down" size={20} color="black" />
                <Text style={styles.bottomRightText}> Check out the "Information" tab to learn more.</Text>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cec',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  hint: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
  bottomRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
},
bottomRightText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 5,
},
hintButton: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#00796b',
  padding: 10,
  borderRadius: 5,
  marginTop: 20,
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},

buttonText: {
  color: '#fff',
  fontSize: 16,
},
});