// Home.js
import { View,Text,StyleSheet, TextInput, Button ,TouchableOpacity} from "react-native";
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default Home = function ({navigation}) {
    const [value, setvalue] = useState (
        ''
    )
    const [showHint, setShowHint] = useState(false);
    const toggleHint = () => {
        setShowHint(!showHint);
      };
    const navToHint = () => navigation.navigate('Hint')
    const navToCorrect = () => {
        if (value === '13') {
            navigation.navigate('correct_7');
        } else {
            navigation.navigate('Incorrect');
        }
    }
    return (
        <View style={styles.container}>
          <Text style={{fontSize: 20, color: 'blue'}}>Solve the following code:</Text>
          <Text> </Text>
          
          <Text>⁠Convert the binary number (1101) to its decimal equivalent </Text>
          <TextInput style={styles.input} value = {value} onChangeText={setvalue} />
          <Text> </Text>
          
          <Button title='Submit' onPress={navToCorrect}>Submit</Button>
          <Text> </Text>
         
          <TouchableOpacity style={styles.hintButton} onPress={toggleHint}>
                <Icon name="lightbulb-o" size={20} color="#fff" />
                <Text style={styles.buttonText}> Hint</Text>
            </TouchableOpacity>
         {showHint && (
        <Text style={styles.hint}>
         Check information for  Binary Conversions to know more. 
         In binary representation, each digit represents a power of 2. Calculate the decimal equivalent by adding the corresponding powers of 2 for each 1 digit in the binary number.
        </Text>
      )}
      <View style={styles.bottomRightContainer}>
                <Icon name="hand-o-down" size={20} color="black" />
                <Text style={styles.bottomRightText}> Check out the "Information" tab to learn more.</Text>
            </View>
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
})