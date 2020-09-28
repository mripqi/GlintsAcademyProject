import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import BackImage from '../../Img/pngtree-beautiful-fresh-forest-sunrise-silhouette-scenery-image_268635.jpg';
import Logo from '../../Img/arctic_fox_PNG41386.png';

const App = ({navigation}) => (
  <View style={styles.container}>
    <ImageBackground source={BackImage} style={styles.image}>
      <Image style={styles.tinyLogo} source={Logo} />
      <Text style={styles.judul}>GA 7 Aplication</Text>
      <Text style={styles.text}>create a form to login and navigate later</Text>

      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Register')}>
        <Text style={styles.textButton}>Daftar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'grey',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'contain',
  },

  judul: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  text: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 100,
  },

  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 50,
  },
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

export default App;
