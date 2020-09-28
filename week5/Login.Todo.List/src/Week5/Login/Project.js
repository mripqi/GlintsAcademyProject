import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default function Project({navigation}) {
  const [input, Setinput] = useState('');

  // const clickHandler = () => {
  //   navigation.navigate('Home');
  // };

  return (
    <>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Drawer')}>
        <Text style={styles.textButton}>Daftar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.textButton}>Toogle</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  Button: {
    borderRadius: 50,
    padding: 10,
    backgroundColor: 'lightblue',
    margin: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
