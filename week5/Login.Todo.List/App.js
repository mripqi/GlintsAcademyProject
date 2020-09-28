import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/Week5/Login/HomeScreen';
import Register from './src/Week5/Login/Register';
import Login from './src/Week5/Login/Login';
import Profile from './src/Week5/Login/Profile';
import Skill from './src/Week5/Login/Skill';
import Page from './src/Week5/Login/Page';
import Project from './src/Week5/Login/Project';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  const createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={createBottomTab} />
      <Drawer.Screen name="Project" component={Project} />
      <Drawer.Screen name="Skill" component={Skill} />
    </Drawer.Navigator>
  );

  const createBottomTab = () => (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Skill"
        component={Skill}
        options={{
          tabBarLabel: 'Skill',
          tabBarIcon: ({color}) => <Icon name="info" color={color} size={26} />,
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />

      <BottomTabs.Screen
        name="Project"
        component={Project}
        options={{
          tabBarLabel: 'Project',
          tabBarIcon: ({color}) => (
            <Icon name="login" color={color} size={26} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Page" component={Page} />
        <Stack.Screen name="Project" component={Project} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Drawer" component={createDrawer} />
        <Stack.Screen name="Tab" component={createBottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
