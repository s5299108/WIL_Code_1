// Home.js
import { View,Text,StyleSheet, TextInput, Button, Image } from "react-native";
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
        if (value === 'W') {
            navigation.navigate('Correct');
        } else {
            navigation.navigate('Incorrect');
        }
    }
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Solve the following code:</Text>
          <Text> </Text>
          <Text> </Text>
          <Text> Posted below is a Playfair grid. The cyphertext and plaintext is mirrored, </Text>
          <Text> meaning that 'I' is replaced with 'H' and vice-versa. 'B' is also replaced </Text>
          <Text> with 'M' and vice versa.</Text>
          <Text> </Text>
          <Text> </Text>
          <Image source={require('../../assets/images/Playfair.png')} style = {{height: 100, width: 100, objectFit: 'contain'}}></Image>
          <Text> </Text>
          <Text> </Text>
          <Text> Given the rule illustrated above, which letter would be the plaintext version</Text>
          <Text> of the letter 'N'? (Must be in caps)</Text> 
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <TextInput style={styles.input} value = {value} onChangeText={setvalue} />
          <Text> </Text>
          <Text> </Text>
          <Button title='Submit' onPress={navToCorrect}>Submit</Button>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text style={{ fontSize: 20 }} onPress={toggleHint}>
            Hint
          </Text>
         {showHint && (
        <Text style={styles.hint}>
         Look at the position of 'N' in the grid. It is in the fourth row, second column.
        Find the letter in the same row but mirrored in the same column.
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