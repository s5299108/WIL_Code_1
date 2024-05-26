import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const topics = [
  { id: '1', title: 'Topic 1' },
  { id: '2', title: 'Topic 2' },
  { id: '3', title: 'Topic 3' },
  { id: '4', title: 'Topic 4' },
  { id: '5', title: 'Topic 5' },
  { id: '6', title: 'Topic 6' },
  { id: '7', title: 'Topic 7' },
  { id: '8', title: 'Topic 8' },
  { id: '9', title: 'Topic 9' },
  { id: '10', title: 'Topic 10' },
];

export default function Home({ navigation }) {
  const handlePress = (id) => {
   // navigation.navigate(`Info${id}`);
   navigation.navigate(`nformation_2`);I
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
