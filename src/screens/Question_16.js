// Home.js
import { View,Text,StyleSheet, TextInput, Button } from "react-native";
import React, {useState} from 'react';
import FlatButton from "./button";
export default Home = function ({navigation}) {
    const [value, setvalue] = useState (
        ''
    )
    const [showHint, setShowHint] = useState(false);
    const toggleHint = () => {
        setShowHint(!showHint);
      };
    const navToCorrect = () => {
        if (value === 'THIS IS A SECRET AND MESSAGE IS THE CODEBOOK') {
            navigation.navigate('Correct_16');
        } else {
            navigation.navigate('Incorrect');
        }
    }
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Solve the following code:</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text>Decrypt the sentence "GSRH RH Z HVXIVG ZMW NVHHZTV RH GSV XLFHGRLM" that was encrypted using the Atbash cipher. </Text>
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
          <Text style={{ fontSize: 20 }} onPress={toggleHint}>
            Hint
          </Text>
         {showHint && (
        <Text style={styles.hint}>
       Replace each letter with its opposite in the alphabet (A ↔ Z, B ↔ Y, etc.). Keep spaces as they are.
        </Text>
      )}
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
      },
      hint: {
        marginTop: 20,
        fontSize: 16,
        color: 'green',
      },
})