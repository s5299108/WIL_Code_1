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
    const navToCorrect = () => {
        if (value === 'LWLZXOZXZOGF') {
            navigation.navigate('Correct_5');
        } else {
            navigation.navigate('Incorrect');
        }
    }
    return (
        <View style={styles.container}>
           <Text style={{fontSize: 20, color: 'blue'}}>Solve the following code:</Text>
          <Text> In a simple substitution cipher, each letter in the plaintext is replaced by a unique letter. If the mapping is:</Text>
          <Text> </Text>
          <Text> </Text>
          <Text>A -> Q, B -> W, C -> E, D -> R, E -> T, F -> Y, G -> U, H -> I, I -> O, J -> P,</Text>
          <Text> K -> A, L -> S, M -> D, N -> F, O -> G, P -> H, Q -> J, R -> K, S -> L, T -> Z,</Text>
          <Text> U -> X, V -> C, W -> V, X -> B, Y -> N, Z -> M</Text>
          <Text> </Text>
         
          <Text> What is the ciphertext for the plaintext "SUBSTITUTION"? </Text>
          <Text> </Text>
          <Text> </Text>
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
         Each letter is directly correlated with a different letter
        eg. If the first 'a' is equal to 'f', then every 'a' is equal to 'f', etc.
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