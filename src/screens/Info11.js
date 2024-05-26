import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import React from 'react';


export default Home = function ({navigation}){
    const navToPrevious = () => {
        navigation.navigate('Information');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Binary Conversions</Text>

            <Text style={styles.subtitle}>1. Binary Representation:</Text>
            <Text style={styles.paragraph}>
                - Binary is a base-2 number system, unlike our familiar base-10 system (decimal). In binary, there are only two digits: 0 and 1.
            </Text>
            <Text style={styles.paragraph}>
                - Each digit's position in a binary number represents a power of 2. The rightmost digit is \(2^0\), the next digit to the left is \(2^1\), then \(2^2\), and so on.
            </Text>
            <Text style={styles.paragraph}>
                - To represent a number in binary, you add up the values of the positions where there is a 1.
            </Text>

            <Text style={styles.subtitle}>2. Converting Binary to Decimal:</Text>
            <Text style={styles.paragraph}>
                - To convert a binary number to decimal, you multiply each binary digit by the corresponding power of 2 and add up the results.
            </Text>
            <Text style={styles.paragraph}>
                - For example, if you have the binary number \(1101\), you calculate: \(1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 13\).
            </Text>

            <Text style={styles.subtitle}>3. Converting Decimal to Binary:</Text>
            <Text style={styles.paragraph}>
                - To convert a decimal number to binary, you divide the decimal number by 2 and record the remainder. Then, you continue dividing the quotient by 2 until the quotient is 0.
            </Text>
            <Text style={styles.paragraph}>
                - The remainders, read from bottom to top, give you the binary representation of the decimal number.
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
});