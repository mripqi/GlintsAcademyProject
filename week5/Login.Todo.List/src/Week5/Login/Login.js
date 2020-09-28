import React, {useContext, useState, useEffect} from 'react';
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

import BackImage from '../../Img/pngtree-beautiful-fresh-forest-sunrise-silhouette-scenery-image_268635.jpg';
import Logo from '../../Img/arctic_fox_PNG41386.png';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from './context/context';

export default function Login({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const {token, setToken} = useContext(AuthContext);

  useEffect(() => {
    setToken(null);
  }, []);

  const handleLogin = async () => {
    try {
      const apiLogin = await axios({
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'https://be-kickin.herokuapp.com/api/v1/user/login',
        data: JSON.stringify({
          email: user,
          password: password,
        }),
      });
      console.log(apiLogin.data.data);

      if (apiLogin.data.data.token) {
        await AsyncStorage.setItem('@token', apiLogin.data.data.token);
        setToken(apiLogin.data.data.token);
        global.UsernameLoginData = apiLogin.data.data.profile.name;
        navigation.navigate('Tab');
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
          <Text style={styles.text}>Please enter your email & password</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={'white'}
            onChangeText={(e) => setUser(e)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'white'}
            onChangeText={(e) => setPassword(e)}
          />
          <TouchableOpacity style={styles.Button} onPress={handleLogin}>
            <Text style={styles.textButton}>Masuk</Text>
          </TouchableOpacity>
          <Text style={{textAlign: 'center', color: 'white'}}>
            Belum punya akun?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              Daftar disini
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
    backgroundColor: 'transparent',
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
