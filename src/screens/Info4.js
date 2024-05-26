// Home.js
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React from 'react';


export default Home = function ({navigation}){
    const navToPrevious = () => {
        navigation.navigate('Information');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>What are the Types of Cryptography?</Text>
            
            <Text style={styles.subtitle}>Symmetric Key Cryptography:</Text>
            <Text style={styles.paragraph}>
                Symmetric Key Cryptography is a way to keep messages secret by using the same key to lock and unlock the message. Both the sender and the receiver need to have the same key to read the message. This method is fast and easy, but there's a challenge: the sender and receiver must find a safe way to share the key without anyone else getting it. The most well-known examples of this type of cryptography are Data Encryption Systems (DES) and Advanced Encryption Systems (AES).
            </Text>
            
            <Text style={styles.subtitle}>Hash Functions:</Text>
            <Text style={styles.paragraph}>
                Hash functions are a way to keep information safe without using any keys. Instead of locking and unlocking messages, a hash function turns the message into a unique code called a hash value. This hash value has a fixed length and cannot be turned back into the original message. Because of this, it's impossible to figure out what the original message was just from the hash value. Many computer systems use hash functions to keep passwords secure by turning them into hash values that are hard for anyone to crack.
            </Text>
            
            <Text style={styles.subtitle}>Asymmetric Key Cryptography:</Text>
            <Text style={styles.paragraph}>
                Asymmetric Key Cryptography uses two keys to keep information safe: a public key and a private key. Here’s how it works:
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold}>Encryption:</Text> When someone wants to send a secret message, they use the receiver's public key to lock the message. This public key can be known by everyone.
            </Text>
            <Text style={styles.paragraph}>
                <Text style={styles.bold}>Decryption:</Text> Only the receiver has the private key, which is different from the public key, to unlock and read the message.
            </Text>
            <Text style={styles.paragraph}>
                Even if everyone knows the public key, only the person with the private key can decode the message. One of the most popular methods of this type of cryptography is called the RSA algorithm.
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
    subtitle: {
        fontSize: 20,
        color: '#00796b',
        marginBottom: 10,
        textAlign: 'left',
        width: '100%',
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