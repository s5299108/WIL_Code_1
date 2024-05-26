// Home.js
import { View, Text, StyleSheet, Button, Image, ScrollView } from "react-native";
import React from 'react';
import CryptographyImage from '../../assets/images/cryptography.png';

export default Home = function ({navigation}) {
    const navToPrevious = () => {
        navigation.navigate('Information');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>What is Cryptography?</Text>
            <Text style={styles.paragraph}>
                Cryptography is a technique of securing information and communications through 
                the use of codes so that only those persons for whom the information is intended
                can understand and process it. Thus preventing unauthorized access to information. 
                The prefix “crypt” means “hidden” and the suffix “graphy” means “writing”.
            </Text>
            <Image 
                source={CryptographyImage} 
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


