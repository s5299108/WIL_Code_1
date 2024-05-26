import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const topics = [
  { id: '1', title: 'What is Cryptography ?' },
  { id: '2', title: 'Why Cryptography is needed ?' },
  { id: '3', title: 'What is Encryption and Decryption ?' },
  { id: '4', title: 'What are the Types of Cryptography ?' },
  { id: '5', title: 'What are puzzles and how can it be fun to solve puzzles using cryptography?' },
  { id: '6', title: 'Plaintext cipher' },
  { id: '7', title: 'Caesar cipher' },
  { id: '8', title: 'Transposition cipher' },
  { id: '9', title: 'Atbash cipher' },
  { id: '10', title: 'Playfair cipher' },
];

export default function Home({ navigation }) {
  const handlePress = (id) => {
    navigation.navigate(`Info${id}`);
   //navigation.navigate(`Information_2`);I
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.card}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3, // Adds shadow for Android
    shadowColor: '#000', // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  item: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});
