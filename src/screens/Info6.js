import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React from 'react';


export default Home = function ({navigation}){
    const navToPrevious = () => {
        navigation.navigate('Information');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>What is a Plaintext Cipher?</Text>
            <Text style={styles.paragraph}>
                A plaintext cipher is a method used to transform regular letters into secret codes. The idea behind it is to scramble the letters in a message in a specific way so that it appears as gibberish to anyone who doesn't know how to decipher it. One common type of plaintext cipher is the Caesar cipher, where each letter of the alphabet is shifted by a fixed number of positions.
            </Text>
            <Text style={styles.paragraph}>
                For instance, if we use a shift of 3 in a Caesar cipher, 'A' becomes 'D', 'B' becomes 'E', 'C' becomes 'F', and so on. This shift pattern continues throughout the alphabet. So, when you apply this cipher to a message, each letter is replaced by the letter that comes after it in the shifted alphabet.
            </Text>
            <Text style={styles.title}>How Can You Solve Plaintext Cipher Puzzles?</Text>
            <Text style={styles.paragraph}>
                To solve plaintext cipher puzzles, you start by knowing or guessing the shift value used in the encryption. If you know the shift, great! You can immediately apply it to decrypt the message. However, if you don't know the shift, you have to use trial and error by trying different shifts until the secret message starts to make sense.
            </Text>
            <Text style={styles.paragraph}>
                It's like solving a mystery where you have to piece together clues until the big picture becomes clear. You might start with a shift of 1 and see if the result makes sense. If not, you try a shift of 2, then 3, and so on, until you find the right shift that decodes the message into meaningful words.
            </Text>
            <Text style={styles.paragraph}>
                This process of trying different shifts and seeing which one reveals a coherent message is both challenging and rewarding. It's like cracking a secret code and unveiling hidden information. Each shift you try is a step closer to unlocking the mystery, and when you finally succeed, it's incredibly satisfying to see the hidden message emerge from the ciphered text.
            </Text>
            <Button title="Go Back" onPress={navToPrevious} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#e0f7fa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: '#00796b',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'left',
        lineHeight: 22,
        color: '#004d40',
        width: '100%',
    },
});