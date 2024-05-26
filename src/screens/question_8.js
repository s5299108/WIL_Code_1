// Home.js
import { View,Text,StyleSheet, TextInput, Button } from "react-native";
import React, {useState} from 'react';
import FlatButton from "./button";
export default Home = function ({navigation}) {
    const [value, setvalue] = useState (
        ''
    );
    const [showHint, setShowHint] = useState(false);
    
    const navToHint = () => navigation.navigate('Hint')
    const navToCorrect = () => {
        if (value === '11001') {
            navigation.navigate('correct_8');
        } else {
            navigation.navigate('Incorrect');
        }
    }
     const toggleHint = () => {
    setShowHint(!showHint);
  };
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
          <Text>⁠Convert the decimal number 25 to binary?</Text>
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
          <Text style={{ fontSize: 20 }} onPress={toggleHint}>
        Hint
      </Text>
      {showHint && (
        <Text style={styles.hint}>
         Check information for  Binary Conversions to know more. 
          Start by finding the largest power of 2 that is less than or equal to 25, and then proceed by subtracting powers of 2 to find the binary representation.
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