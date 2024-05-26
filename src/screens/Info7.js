import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React from 'react';


export default Home = function ({navigation}){
    const navToPrevious = () => {
        navigation.navigate('Information');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>What is a Caesar Cipher?</Text>
            <Text style={styles.paragraph}>
                A Caesar cipher is a type of encryption where each letter in a message is shifted by the same number of places in the alphabet. This shift creates a new arrangement of letters, making the message look like a jumbled code. The cipher gets its name from Julius Caesar, who is believed to have used this method to send secret messages during his time.
            </Text>
            <Text style={styles.paragraph}>
                For example, if we have the message "HELLO" and we apply a Caesar cipher with a shift of 3, each letter will be shifted three places to the right in the alphabet. So, 'H' becomes 'K', 'E' becomes 'H', 'L' becomes 'O', and 'O' becomes 'R'. Therefore, the encrypted message becomes "KHORR".
            </Text>
            <Text style={styles.title}>How Can You Solve Caesar Cipher Puzzles?</Text>
            <Text style={styles.paragraph}>
                To solve Caesar cipher puzzles, you need to know the shift value that was used to encrypt the message. If you don't know the shift, you can try shifting the letters by different numbers until the message starts to make sense or until recognizable patterns emerge. For example, you might try shifting by 1, then by 2, then by 3, and so on, until you find the right shift that decodes the message into meaningful words.
            </Text>
            <Text style={styles.paragraph}>
                Another approach to solving Caesar cipher puzzles is by using frequency analysis. This involves looking at the frequency of letters in the encrypted message and comparing it to the frequency of letters in the English language. For instance, 'E' is the most common letter in English, so if you see a letter in the encrypted message that appears frequently, it's likely that it corresponds to 'E' in the plaintext.
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
