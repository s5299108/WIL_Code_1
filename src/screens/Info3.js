// Home.js
import { View, Text, StyleSheet, Button, Image, ScrollView } from "react-native";
import React from 'react';
import image_ from '../../assets/images/encrypt_decrypt.png';

export default Home = function ({navigation}) {
    const navToPrevious = () => {
        navigation.navigate('Information');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>What is Encryption and Decryption ?</Text>
            <Text style={styles.paragraph}>
            Encryption is the process of converting normal message (plaintext)
             into meaningless message (Ciphertext). Whereas Decryption is the 
             process of converting meaningless message (Ciphertext) into its
             original form (Plaintext).
            </Text>
            <Image 
                source={image_} 
                style={styles.image} 
                resizeMode="contain"
            />
            <Button title="Go Back" onPress={navToPrevious} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#cec',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        color: 'blue',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: 'center',
        lineHeight: 22,
    },
    image: {
        width: '100%',
        height: 300,
        marginVertical: 20,
    },
});


