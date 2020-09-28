import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function List() {
  // const getData = async () => {
  //   try {
  //     let response = await fetch('https://reactnative.dev/movies.json');
  //     let json = await response.json();
  //     return json.movies;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const [item, setItem] = useState([
    {
      name: 'react',
      text: 'React Native',
      tipe: 'Framework/library',
      skill: '50%',
      id: 1,
    },
    {
      name: 'laravel',
      text: 'Laravel',
      tipe: 'Framework/library',
      skill: '100%',
      id: 2,
    },
    {
      name: 'language-javascript',
      text: 'Javascript',
      tipe: 'Bahasa Pemrograman',
      skill: '30%',
      id: 3,
    },
    {
      name: 'git',
      text: 'Git',
      tipe: 'Teknologi',
      skill: '70%',
      id: 4,
    },
    {
      name: 'gitlab',
      text: 'Gitlab',
      tipe: 'Teknologi',
      skill: '60%',
      id: 5,
    },
  ]);

  return (
    <View style={styles.list}>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        // numColumns={2}
        keyExtractor={(item) => item.id}
        data={item}
        renderItem={({item}) => {
          return (
            <View style={styles.itemlistView}>
              <View style={styles.item1View}>
                <Icon name={item.name} size={60} />
              </View>
              <View style={styles.item2View}>
                <Text style={styles.itemSkillText}>{item.text}</Text>
                <Text style={styles.itemCategoryText}>{item.tipe}</Text>
                <Text style={styles.itemTextPercentage}>{item.skill}</Text>
              </View>
              <View style={styles.item3View}>
                <Icon name="arrow-right" size={60} />
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemlistView: {
    backgroundColor: '#B4E9FF',
    marginVertical: 4,
    flexDirection: 'row',
    alignContent: 'stretch',
    padding: 10,
    borderRadius: 10,
    elevation: 6,
    borderBottomWidth: 4,
    borderBottomColor: '#EFEFEF',
  },
  itemSkillText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
  },
  itemCategoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3EC6FF',
  },
  itemTextPercentage: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
  },
  item1View: {
    flex: 1,
    justifyContent: 'center',
  },
  item2View: {
    flex: 3,
  },
  item3View: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    backgroundColor: 'yellow',
    flex: 1,
    marginBottom: 100,
  },
});
