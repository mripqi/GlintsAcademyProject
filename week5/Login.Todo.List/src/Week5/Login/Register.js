import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import BackImage from '../../Img/pngtree-beautiful-fresh-forest-sunrise-silhouette-scenery-image_268635.jpg';
import Logo from '../../Img/arctic_fox_PNG41386.png';
import axios from 'axios';

export default function Register({navigation}) {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Profile, setProfile] = useState([]);

  const takeInput = async () => {
    try {
      console.log(Email, ' ', Password, ' ', Name);

      const apiLogin = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'https://be-kickin.herokuapp.com/api/v1/user/register',
        data: JSON.stringify({
          email: Email,
          password: Password,
          name: Name,
        }),
      });
      console.log('berhasil register = ', apiLogin.data.data);

      if (apiLogin.data.data.token) {
        await AsyncStorage.setItem('@token', apiLogin.data.data.token);
        navigation.navigate('Profile', {
          name: Name,
          email: Email,
          password: Password,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismiss keyboard');
      }}>
      <View style={styles.container}>
        <ImageBackground source={BackImage} style={styles.image}>
          <Image style={styles.tinyLogo} source={Logo} />
          <Text style={styles.judul}>GA 7 Aplication</Text>
          <Text style={styles.text}>
            create a form to login and navigate later
          </Text>
          <TextInput
            name="nama"
            style={styles.input}
            placeholder="Nama Lengkap"
            placeholderTextColor={'white'}
            onChangeText={(e) => setName(e)}
          />
          <TextInput
            name="email"
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'white'}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            name="pass"
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'white'}
            onChangeText={(e) => setPassword(e)}
          />
          <TouchableOpacity style={styles.Button} onPress={takeInput}>
            <Text style={styles.textButton}>Daftar</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: 'white'}}>
            Sudah punya akun?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              Login disini
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

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
  },

  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 50,
  },

  input: {
    borderColor: 'white',
    borderWidth: 3,
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
