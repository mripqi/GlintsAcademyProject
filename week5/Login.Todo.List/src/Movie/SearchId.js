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
  const [view, setView] = useState(false);
  const [fullsynopsis, setFullsynopsis] = useState(false);

  const get = async () => {
    try {
      const search = movie;
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${search}?api_key=a5560efa6ad4fd8537b91dcd4763ee78`,
      );

      setData(result.data);
      setView(true);
      showView();
    } catch (error) {
      setView(false);
    }
  };

  const handleSynopsis = () => {
    if (fullsynopsis) {
      setFullsynopsis(false);
    } else {
      setFullsynopsis(true);
    }
  };

  const showView = () => {
    if (view) {
      const imgpath = `https://image.tmdb.org/t/p/original${data.poster_path}`;
      const overview = data.overview;
      return (
        <View>
          <Image source={{uri: imgpath}} style={styles.itemImage} />
          <Text>{data.title}</Text>
          <Text>Synopsis</Text>
          <TouchableOpacity onPress={() => handleSynopsis()}>
            <Text>{fullsynopsis ? overview : overview.slice(0, 50)}...</Text>
          </TouchableOpacity>
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
        <TouchableOpacity style={styles.Button} onPress={() => get()}>
          <Text style={styles.textButton}> Search </Text>
        </TouchableOpacity>

        {showView()}
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
