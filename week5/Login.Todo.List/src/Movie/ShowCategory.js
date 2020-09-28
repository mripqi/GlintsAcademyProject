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
  const [viewp, setViewp] = useState(false);

  const getPopular = async (val) => {
    const search = val;
    try {
      const result = await axios(
        `https://api.themoviedb.org/3/movie/${search}?api_key=a5560efa6ad4fd8537b91dcd4763ee78`,
      );
      console.log(result.data.results);
      setData(result.data.results);
      console.log('data ', data);
      setViewp(true);
      popularView();
    } catch (error) {
      setView(false);
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
                  <Text>Synopsis</Text>

                  <Text>{item.overview}</Text>
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
        <TouchableOpacity
          style={styles.Button}
          onPress={() => getPopular('top_rated')}>
          <Text style={styles.textButton}> Top Rated </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => getPopular('popular')}>
          <Text style={styles.textButton}> Popular </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => getPopular('now_playing')}>
          <Text style={styles.textButton}> Now Playing </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => getPopular('upcoming')}>
          <Text style={styles.textButton}> Upcoming </Text>
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
