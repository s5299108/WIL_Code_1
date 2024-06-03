import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


export default Home = function ({ navigation }) {
    const [value, setValue] = useState('');
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
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, color: 'blue' }}>Solve the following code:</Text>
            <Text> Posted below is a Playfair grid. The ciphertext and plaintext is mirrored, </Text>
            <Text> meaning that 'I' is replaced with 'H' and vice-versa. 'B' is also replaced </Text>
            <Text> with 'M' and vice versa.</Text>
            <Text> </Text>
            <Image source={require('../../assets/images/Playfair.png')} style={styles.image} />
            <Text> </Text>
            <Text> Given the rule illustrated above, which letter would be the plaintext version</Text>
            <Text> of the letter 'N'? (Must be in caps)</Text>
            <Text> </Text>
            <TextInput style={styles.input} value={value} onChangeText={setValue} />
            <Text> </Text>
            <Text> </Text>
          <Button title='Submit' onPress={navToCorrect}>Submit</Button>
          <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <Text> </Text>
            <TouchableOpacity style={styles.hintButton} onPress={toggleHint}>
                <Icon name="lightbulb-o" size={20} color="#fff" />
                <Text style={styles.buttonText}> Hint</Text>
            </TouchableOpacity>
            {showHint && (
                <Text style={styles.hint}>
                    Look at the position of 'N' in the grid. It is in the fourth row, second column.
                    Find the letter in the same row but mirrored in the same column.
                </Text>
            )}
            <View style={styles.bottomRightContainer}>
                <Icon name="hand-o-down" size={20} color="black" />
                <Text style={styles.bottomRightText}> Check out the "Information" tab to learn more.</Text>
            </View>
        </View>
    );
};

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
        textAlign: 'center',
        width: '80%',
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
    smallButton: {
        backgroundColor: '#00796b',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
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
});
