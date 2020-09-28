import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';
export default function Index() {
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState('');
  const [viewp, setViewp] = useState(false);

  const getMovieName = async () => {
    try {
      const search = movie;
      const result = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=a5560efa6ad4fd8537b91dcd4763ee78&query=${search}`,
      );
      console.log('asdasdsad', result.data.results);
      setData(result.data.results);
      console.log('data', data);
      setViewp(true);
      popularView();
    } catch (error) {
      setViewp(false);
    }
  };

  const popularView = () => {
    if (viewp) {
      return (
        <View>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                    }}
                    style={styles.itemImage}
                  />
                  <Text>{item.title}</Text>
                </View>
              );
            }}
          />
        </View>
      );
    } else {
      return <Text>No Movie</Text>;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'white'}
          onChangeText={(e) => setMovie(e)}
        />
        <TouchableOpacity style={styles.Button} onPress={() => getMovieName()}>
          <Text style={styles.textButton}> Popular </Text>
        </TouchableOpacity>
        {popularView()}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    borderColor: 'black',
    borderWidth: 3,
  },
  itemImage: {
    height: 200,
    width: 100,
  },
});
