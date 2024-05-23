// Home.js
import { View,Text,StyleSheet, TextInput, Button } from "react-native";
import React, {useState} from 'react';
import FlatButton from "./button";
export default Home = function ({navigation}) {
    const [value, setvalue] = useState (
        ''
    )
    function myfunction() {
        return ("Hello");
    }
    const navToHint = () => navigation.navigate('Hint')
    const navToHome = () => navigation.navigate('Home')
    const navToQuestion = () => navigation.navigate('Question_2')
    const navToCorrect = () => {
        if (value === 'The quick slick fox jumped over the brown lazy dog') {
            navigation.navigate('Correct');
        } else {
            navigation.navigate('Incorrect');
        }
    }
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>The Caesar Cipher Technique</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> In the last puzzle, the letters were shifted by just one place in the alphabet.</Text>
          <Text> However, sometimes it won't be obvious how the letters are being shifted around.</Text>
          <Text> Sometimes, the letters may not be shifted at all and instead they will be jumbled </Text>
          <Text> around. There are, however, certain English language rules that be used in order to </Text>
          <Text> deduce which letters are being substituted. For example, certain letters of the alphabet </Text>
          <Text> occur more frequently than others. Some of the most commonly used letters in the  </Text>
          <Text> English alphabet include E,T,A,O,N,I and S. If a certain letter in a Caesar Cypher</Text>
          <Text> puzzle occurs quite frequently, it's likely that it can be substituted with one of</Text>
          <Text> those letters. </Text>
          <Text> </Text>
          <Text> There are some other rules that can be used to quickly decipher various letters. For</Text>
          <Text> example, some words in an encrypted puzzle will be just one letter in length. When</Text>
          <Text> this occurs, it is almost certain that the letter corresponding to the encrypted </Text>
          <Text> letter is either 'a' or 'i', as these are full words and rarely will you ever see </Text>
          <Text> another letter by itself. </Text>
          <Text> </Text>
          <Text> Other similar language rules can be utilized, like how the word 'the' is the most</Text>
          <Text> commonly used word in English. Looking out for this word may help the user a lot.</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Button title='Question 2' onPress={navToQuestion}>Question 2</Button>
          <Text> </Text>
          <Text style={{fontSize:20}} onPress={navToQuestion}>
           Question 2
          </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#cec',
        justifyContent:'center',
        alignItems:'center',
        margin:20
    },
    input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
      }
})