import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen({navigation}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = () => {
    const kondisi = '12345678';

    if (password == kondisi) {
      console.log(user);
      navigation.navigate('Home', {user});
    } else {
      Alert.alert('OOPS!', 'Wrong Password', [
        {text: 'understood', onPress: () => console.log('alert closed')},
        ,
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>Code Challenge</Text>
        <Text style={styles.subTitleText}>Glints x Binar</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Icon name="account-circle" color="blue" size={40} />
          <View>
            <Text style={styles.labelText}>Username/Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan Nama User/Email"
              onChangeText={(e) => setUser(e)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" color="blue" size={40} />
          <View>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Masukkan Password"
              onChangeText={(e) => setPassword(e)}
              secureTextEntry={true}
            />
          </View>
        </View>
        {/* <Text
          style={
            this.state.isError ? styles.errorText : styles.hiddenErrorText
          }>
          Password Salah
        </Text> */}
        {/* Kode di sini */}
        <Button title="Login" onPress={handleClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'purple',
    alignSelf: 'flex-end',
    marginBottom: 16,
  },
  formContainer: {
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  labelText: {
    fontWeight: 'bold',
  },
  textInput: {
    width: 300,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  hiddenErrorText: {
    color: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
});
