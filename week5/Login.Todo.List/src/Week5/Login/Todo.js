import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './component/Header';
import TodoItem from './component/TodoItem';
import AddTodo from './component/AddTodo';

export default function todolist() {
  const [todos, setTodos] = useState([
    {text: 'Friends#1', key: '1'},
    {text: 'Friends#2', key: '2'},
    {text: 'Friends#3', key: '3'},
    {text: 'Friends#4', key: '4'},
    {text: 'Friends#5', key: '5'},
    {text: 'Friends#6', key: '6'},
    {text: 'Friends#7', key: '7'},
    {text: 'Friends#8', key: '8'},
    {text: 'Friends#9', key: '9'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        {text: 'understood', onPress: () => console.log('alert closed')},
        ,
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log('dismiss keyboard');
      }}>
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
    backgroundColor: 'pink',
    flex: 1,
  },

  list: {
    marginTop: 20,
    backgroundColor: 'grey',
    flex: 1,
  },
});
