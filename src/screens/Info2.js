// Home.js
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React from 'react';


export default Home = function ({navigation}){
    const navToPrevious = () => {
        navigation.navigate('Information');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Why Cryptography is needed?</Text>
            <Text style={styles.paragraph}>
                Cryptography is like a secret code that helps keep information safe from people who shouldn't see it. It's really important for protecting personal information and making sure bad guys can't steal important stuff from companies. Here are some ways we use cryptography:
            </Text>
            <Text style={styles.subtitle}>Features of Cryptography:</Text>
            <View style={styles.bulletContainer}>
                <Text style={styles.bulletPoint}>• <Text style={styles.bold}>Confidentiality:</Text> Only the person who is supposed to see the information can access it. No one else can see it.</Text>
                <Text style={styles.bulletPoint}>• <Text style={styles.bold}>Integrity:</Text> The information cannot be changed while it is being stored or sent without someone noticing that it has been tampered with.</Text>
                <Text style={styles.bulletPoint}>• <Text style={styles.bold}>Non-repudiation:</Text> The person who created or sent the information cannot later say that they didn’t send it.</Text>
                <Text style={styles.bulletPoint}>• <Text style={styles.bold}>Authentication:</Text> Cryptography makes sure that the sender and receiver are who they say they are, and confirms where the information came from and where it's going.</Text>
                <Text style={styles.bulletPoint}>• <Text style={styles.bold}>Interoperability:</Text> Cryptography allows different systems and devices to securely communicate with each other.</Text>
                <Text style={styles.bulletPoint}>• <Text style={styles.bold}>Adaptability:</Text> Cryptography keeps getting better and stronger to protect against new security threats and technological changes.</Text>
            </View>
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
        textAlign: 'center',
        lineHeight: 22,
        color: '#004d40',
    },
    subtitle: {
        fontSize: 20,
        color: '#00796b',
        marginBottom: 10,
        textAlign: 'center',
    },
    bulletContainer: {
        alignItems: 'flex-start',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    bulletPoint: {
        fontSize: 16,
        marginBottom: 10,
        color: '#004d40',
    },
    bold: {
        fontWeight: 'bold',
    },
});


