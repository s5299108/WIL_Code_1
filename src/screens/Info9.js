import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React from 'react';


export default Home = function ({navigation}){
    const navToPrevious = () => {
        navigation.navigate('Information');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>What is an Atbash Cipher?</Text>
            <Text style={styles.paragraph}>
                The Atbash cipher is a simple substitution cipher where each letter in the alphabet is replaced with its corresponding letter from the opposite end of the alphabet. In other words, 'A' becomes 'Z', 'B' becomes 'Y', 'C' becomes 'X', and so on, until 'Z' becomes 'A'. This creates a reversal or mirror image of the alphabet.
            </Text>
            <Text style={styles.paragraph}>
                For example, if we have the word 'HELLO' and we apply the Atbash cipher, 'H' becomes 'S', 'E' becomes 'V', 'L' becomes 'O', and 'O' becomes 'L'. So, the encrypted message becomes 'SVVOL'.
            </Text>
            <Text style={styles.title}>How Can You Solve Atbash Cipher Puzzles?</Text>
            <Text style={styles.paragraph}>
                To solve Atbash cipher puzzles, you simply reverse the letters in the message according to this pattern. It's like flipping the alphabet upside down or mirroring it. With a little practice, you can easily decode messages encrypted with the Atbash cipher by applying this reversal pattern to each letter.
            </Text>
            <Text style={styles.paragraph}>
                The beauty of the Atbash cipher lies in its simplicity and ease of decoding. Unlike more complex ciphers, the Atbash cipher follows a straightforward pattern that makes it accessible for beginners and enjoyable to solve. It's a great way to introduce the concept of substitution ciphers to cryptography enthusiasts of all ages.
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
