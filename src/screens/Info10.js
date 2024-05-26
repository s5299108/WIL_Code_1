import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React from 'react';


export default Home = function ({navigation}){
    const navToPrevious = () => {
        navigation.navigate('Information');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>What is a Playfair Cipher?</Text>
            <Text style={styles.paragraph}>
                The Playfair cipher is a type of digraph substitution cipher invented by Charles Wheatstone in 1854, but named after Lord Playfair who promoted its use. In this cipher, letters are paired and encrypted using a 5x5 grid of letters constructed from a keyword.
            </Text>
            <Text style={styles.paragraph}>
                To create the grid, write out the keyword, removing duplicate letters, and then fill in the rest of the grid with the remaining letters of the alphabet (combining 'I' and 'J' into one space). For example, using the keyword "KEYWORD":
            </Text>
            <Text style={styles.code}>
                K E Y W O{'\n'}
                R D A B C{'\n'}
                F G H I/J L{'\n'}
                M N P Q S{'\n'}
                T U V X Z
            </Text>
            <Text style={styles.paragraph}>
                To encrypt a message, you break it into digraphs (pairs of letters), and for each pair, locate the letters in the grid:
            </Text>
            <Text style={styles.paragraph}>
                - If the letters are in the same row, replace them with the letters immediately to their right (wrapping around to the start of the row if necessary).
                - If the letters are in the same column, replace them with the letters immediately below them (wrapping around to the top of the column if necessary).
                - If the letters form a rectangle, replace them with the letters on the same row but at the opposite corners of the rectangle.
            </Text>
            <Text style={styles.paragraph}>
                For example, to encrypt the digraph "HI" with the above grid, 'H' and 'I' form a rectangle, so they are replaced by 'G' and 'J' respectively. Thus, "HELLO" would be encrypted as "GCFLMO".
            </Text>
            <Text style={styles.title}>How Can You Solve Playfair Cipher Puzzles?</Text>
            <Text style={styles.paragraph}>
                To solve Playfair cipher puzzles, you need to reverse the encryption process:
            </Text>
            <Text style={styles.paragraph}>
                - For digraphs in the same row, replace them with the letters immediately to their left (wrapping around to the end of the row if necessary).
                - For digraphs in the same column, replace them with the letters immediately above them (wrapping around to the bottom of the column if necessary).
                - For digraphs forming a rectangle, replace them with the letters on the same row but at the opposite corners of the rectangle.
            </Text>
            <Text style={styles.paragraph}>
                By carefully applying these rules and looking for common patterns in the text, you can decrypt messages encoded with the Playfair cipher. It’s a bit more complex than some other ciphers, but with practice, it becomes a fun and rewarding challenge.
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
    code: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'left',
        lineHeight: 22,
        color: '#004d40',
        width: '100%',
        fontFamily: 'monospace',
    },
});
