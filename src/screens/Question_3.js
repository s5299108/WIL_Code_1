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
    const navToCorrect = () => {
        if (value === 'The new store sells a variety of fresh tasty foods') {
            navigation.navigate('Correct_3');
        } else {
            navigation.navigate('Incorrect');
        }
    }
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Solve the following code:</Text>
          <Text> </Text>
          <Text> </Text>
          <Text>Well done with those first couple of questions! Try out the next few questions, </Text>
          <Text>once again remembering some of the rules highlighted in the previous slide.</Text>
          <Text>Good luck!</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> Eaq lqk detwq dqrrd p jpwvqez tu uwqda epdez uttsd </Text>
          <TextInput style={styles.input} value = {value} onChangeText={setvalue} />
          <Text> </Text>
          <Text> </Text>
          <Button title='Submit' onPress={navToCorrect}>Submit</Button>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text> 
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{fontSize:20}} onPress={navToHint}>
           Hint
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