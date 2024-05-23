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
          <Text> A Caesar Cipher is an encryption technique in which a letter of the alphabet is</Text>
          <Text> replaced with another letter by shifting the letters a certain number of spots</Text>
          <Text> down the alphabet. As an example, the letters may be shifted 5 spots up the</Text>
          <Text> alphabet. In this case, the letter A would be replaced with the letter F, the</Text>
          <Text> letter B would be replaced by the letter G, etc. An example of this method is </Text>
          <Text> illustrated below: </Text>
          <Text> </Text>
          <Text> "Nrflnsfynts nx rtwj nrutwynsy ymns pstbqjilj" </Text>
          <Text> </Text>
          <Text> This is an example of an encoded message which must be decoded. If we apply</Text>
          <Text> the above rule of shifting the letters 5 spots in the alphabet, but this</Text>
          <Text> time shifting them backwards, this means that the first letter "N" will</Text>
          <Text> become "I", since the letter I is 5 spots below the letter N in the </Text>
          <Text> alphabet. If we continue this pattern, the next letter "r" will become "m", </Text>
          <Text> the third letter "f" will become "a", and so on. Continuing this pattern</Text>
          <Text> throughout the entire code, we get the message:</Text>
          <Text> </Text>
          <Text> "Imagination is more important than knowledge"</Text>
          <Text> </Text>
          <Text> Click the button below to try out a Caesar Cipher puzzle example.</Text>
          <Text> </Text>
          <Text> </Text>
          <Button title='Question 1' onPress={navToHome}>Question 1</Button>
          <Text> </Text>
          <Text style={{fontSize:20}} onPress={navToHome}>
           Question 1
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