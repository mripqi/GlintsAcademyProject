import React, {useEffect, useState, useContext} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Logo from '../../Img/59-596262_wolf-png-logo-for-free-download-on-wolf.png';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from './context/context';

// export default function Profile({route, navigation}) {
export default function Profile({navigation}) {
  // if using component in navigation not children
  // const {Data} = route.params;
  // console.log('profile', Data);
  const {token, setToken} = useContext(AuthContext);

  // const [token, setToken] = useState('');

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      setToken(value);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Image style={styles.icon} source={Logo} />
      <Text style={styles.name}>{global.UsernameLoginData}</Text>
      {/* <Text style={styles.name}>{user}</Text> */}
      <Text style={styles.work}>React Native Developers</Text>

      <View style={styles.box}>
        <Text style={styles.portfoliotext}>Portofolio</Text>
        <View style={styles.boxinner}>
          <Icon name="github" size={26} />
          <Icon name="gitlab" size={26} />
        </View>
        <View style={styles.textinner}>
          <Text>@mripqi</Text>
          <Text>@mripqi</Text>
        </View>

        <View style={styles.boxinnered}>
          <Text style={styles.portfoliotext}>Hubungi Saya</Text>
          <View style={styles.boxinnering}>
            <Icon name="facebook-square" size={26} />
            <Text>@ripqisani</Text>
          </View>
          <View style={styles.boxinnering}>
            <Icon name="twitter" size={26} />
            <Text>@ripqisani</Text>
          </View>
          <View style={styles.boxinnering}>
            <Icon name="instagram" size={26} />
            <Text>@ripqisani</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate('Tab')}>
        <Text style={styles.textButton}>Go to Skill</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 20,
  },
  icon: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginTop: 20,
  },
  work: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3EC6FF',
    textAlign: 'center',
    marginBottom: 7,
  },
  box: {
    borderRadius: 10,
    borderColor: 'blue',
    borderBottomColor: '#000',
    backgroundColor: '#EFEFEF',
    margin: 20,
    padding: 20,
    alignContent: 'center',
    width: 400,
  },
  portfoliotext: {
    fontSize: 18,
    color: '#003366',
  },
  boxinner: {
    borderTopWidth: 2,
    borderTopColor: '#003366',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textinner: {
    flexDirection: 'row',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  boxinnered: {
    borderTopWidth: 2,
    borderTopColor: '#003366',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  boxinnering: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 2,
  },
});
