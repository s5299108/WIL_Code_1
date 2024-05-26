// Home.js
import { View,Text,StyleSheet, TextInput, Button } from "react-native";
import React, {useState} from 'react';
import FlatButton from "./button";
export default Home = function ({navigation}) {
    const [value, setvalue] = useState (
        ''
    );
    const [showHint, setShowHint] = useState(false);
    const toggleHint = () => {
        setShowHint(!showHint);
      };
    
    const navToCorrect = () => {
        if (value === 'The quick slick fox jumped over the brown lazy dog') {
            navigation.navigate('Correct_12');
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
          <Text> Uif rvjdl tmjdl gpy kvnqfe pwfs uif cspxo mbaz eph </Text>
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
          Check Module Caesar cipher, to know more.
         Each letter is directly correlated with a different letter
        eg. If the first 'a' is equal to 'f', then every 'a' is equal to 'f', etc.
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

