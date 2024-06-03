import { View, Text, StyleSheet, Button, ScrollView, Image } from "react-native";
import React from 'react';
import image1 from '../../assets/images/railfence1.png';
import image2 from '../../assets/images/railfence2.png';
export default Home = function ({ navigation }) {
    const navToPrevious = () => {
        navigation.navigate('Information');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Rail Fence Cipher</Text>

            <Text style={styles.paragraph}>
                The rail fence cipher (also called a zigzag cipher) is a form of transposition cipher. It derives its name from the way in which it is encoded.
            </Text>
            <Text style={styles.subtitle}>Encryption</Text>
            <Text style={styles.paragraph}>
                In a transposition cipher, the order of the alphabets is re-arranged to obtain the cipher-text.
                In the rail fence cipher, the plain-text is written downwards and diagonally on successive rails of an imaginary fence.
                When we reach the bottom rail, we traverse upwards moving diagonally, after reaching the top rail, the direction is changed again. Thus the alphabets of the message are written in a zig-zag manner.
                After each alphabet has been written, the individual rows are combined to obtain the cipher-text.
            </Text>
            <Image 
                source={image1} 
                style={styles.image} 
                resizeMode="contain"
            />
            <Text style={styles.paragraph}>
                For example, if the message is “GeeksforGeeks” and the number of rails = 3 then cipher is prepared as shown in the image.
            </Text>

            <Text style={styles.subtitle}>Decryption</Text>
            <Text style={styles.paragraph}>
                As we’ve seen earlier, the number of columns in rail fence cipher remains equal to the length of plain-text message. And the key corresponds to the number of rails.
                Hence, rail matrix can be constructed accordingly. Once we’ve got the matrix we can figure-out the spots where texts should be placed (using the same way of moving diagonally up and down alternatively).
                Then, we fill the cipher-text row-wise. After filling it, we traverse the matrix in zig-zag manner to obtain the original text.
            </Text>
            <Image 
                source={image2} 
                style={styles.image} 
                resizeMode="contain"
            />
            <Text style={styles.paragraph}>
                Implementation: Let cipher-text = “GsGsekfrek eoe”, and Key = 3
                Number of columns in matrix = len(cipher-text) = 13
                Number of rows = key = 3
                Hence original matrix will be of 3x13.
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
    image: {
        width: 300,
        height: 100,
        marginBottom: 20,
    },
});
