import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Home from './Home';
import Category from './ShowCategory';
import Id from './SearchId';
import Name from './SearchName';
const Stack = createStackNavigator();

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Id" component={Id} />
        <Stack.Screen name="Name" component={Name} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
