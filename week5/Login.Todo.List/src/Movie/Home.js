import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Id')}>
        <Text style={styles.textButton}>Search by Id</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Name')}>
        <Text style={styles.textButton}>Search by Name</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Category')}>
        <Text style={styles.textButton}>Search by Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  Button: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: 'lightblue',
    margin: 10,
  },
});
