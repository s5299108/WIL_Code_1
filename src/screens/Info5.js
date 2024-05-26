// Home.js
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React from 'react';


export default Home = function ({navigation}){
    const navToPrevious = () => {
        navigation.navigate('Information');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Puzzles in Cryptography</Text>
            
            <Text style={styles.paragraph}>
                Puzzles are essentially challenges that require you to use your brain in creative and logical ways. They can come in many forms, such as word puzzles, number puzzles, or visual puzzles. When we talk about puzzles in the context of cryptography, we're delving into a world where messages are hidden behind secret codes.
            </Text>
            
            <Text style={styles.paragraph}>
                Imagine you're on a thrilling adventure as a detective, and your mission is to decode hidden messages to uncover important information. These messages might hold clues to solve a mystery, reveal a secret, or even save the day! Cryptography puzzles add an element of mystery and excitement because you're not just solving any puzzle; you're unraveling secrets and discovering hidden truths.
            </Text>
            
            <Text style={styles.paragraph}>
                As you dive into cryptography puzzles, you'll find yourself using a variety of skills. You'll need to pay attention to patterns, think logically, and sometimes even use your knowledge of language or math to crack the code. It's like being a secret agent or a spy, where every clue and every solved puzzle brings you closer to unraveling the mystery.
            </Text>
            
            <Text style={styles.paragraph}>
                What makes it even more fun is the satisfaction of finally decrypting a message and seeing what it reveals. It's like solving a puzzle within a puzzle, and the "aha!" moment when everything clicks into place is incredibly rewarding. Plus, there's a sense of accomplishment in knowing that you've outsmarted the code and unlocked the hidden message.
            </Text>
            
            <Text style={styles.paragraph}>
                So, puzzles in cryptography aren't just about testing your brainpower; they're about embarking on an exciting journey of discovery and adventure, where every puzzle solved brings you closer to solving the ultimate mystery!
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
    bold: {
        fontWeight: 'bold',
    },
});