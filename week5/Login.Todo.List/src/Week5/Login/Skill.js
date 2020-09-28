import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import List from './List';

export default function Skill({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userhaiText}>Hai,</Text>
        <Text style={styles.usernameText}>Muhammad Ripqi</Text>
      </View>

      <Text style={styles.title}>Skill</Text>

      <View style={styles.categoryView}>
        <List />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // marginTop: Constants.statusBarHeight,
    flex: 1,
    paddingHorizontal: 15,
  },
  logoView: {
    flexDirection: 'row-reverse',
  },
  logo: {
    width: 189,
    height: 50,
  },
  userView: {
    flexDirection: 'row',
  },
  iconUserView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetailView: {
    marginHorizontal: 10,
  },
  userhaiText: {
    fontSize: 12,
  },
  usernameText: {
    fontSize: 16,
    color: '#003366',
  },
  title: {
    fontSize: 36,
    marginTop: 16,
    color: '#003366',
    textAlign: 'center',
  },
  categoryView: {
    borderTopWidth: 4,
    borderTopColor: '#3EC6FF',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryDetailView: {
    backgroundColor: '#B4E9FF',
    marginVertical: 10,
    padding: 7,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
  },
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
