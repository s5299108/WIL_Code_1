import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React from 'react';


export default Home = function ({navigation}){
    const navToPrevious = () => {
        navigation.navigate('Information');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>What is a Transposition Cipher?</Text>
            <Text style={styles.paragraph}>
                A transposition cipher is a type of secret code where the letters of a message are rearranged or shuffled. Unlike substitution ciphers like the Caesar cipher, where letters are replaced with different letters, transposition ciphers keep the same letters but rearrange their order.
            </Text>
            <Text style={styles.paragraph}>
                For example, let's take the word 'HELLO' as our message. In a transposition cipher, we might rearrange the letters to 'OLLEH'. Notice that all the letters are the same, but their order has changed. This rearrangement creates a new pattern that hides the original message.
            </Text>
            <Text style={styles.title}>How Can You Solve Transposition Cipher Puzzles?</Text>
            <Text style={styles.paragraph}>
                To solve transposition cipher puzzles, you need to figure out the pattern or order in which the letters were rearranged. This can be a bit trickier than substitution ciphers because the letters themselves don't change; only their positions do. You can try different ways of rearranging the letters until the message starts to make sense.
            </Text>
            <Text style={styles.paragraph}>
                It's like solving a word puzzle or playing a game of "unscramble the letters" to find the hidden message. Each rearrangement you try is like turning a piece of a puzzle until it fits into place. Sometimes, you might need to rearrange the letters multiple times or try different patterns before the message becomes clear.
            </Text>
            <Text style={styles.paragraph}>
                This adds an extra layer of fun and challenge to cryptography puzzles. It's not just about decoding individual letters but also about deciphering the order in which they were shuffled. It engages your problem-solving skills and requires you to think creatively to uncover the hidden message within the transposition cipher.
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