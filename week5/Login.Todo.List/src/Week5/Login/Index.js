import React, {useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Skill from './Skill';
import Project from './Project';
import Todo from './Todo';
import {AuthContext} from './context/context';
import {set} from 'react-native-reanimated';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTabs = createBottomTabNavigator();

export default function App() {
  const createDrawer = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={createBottomTab} />
      <Drawer.Screen name="Project" component={Project} />
      <Drawer.Screen name="Skill" component={Skill} />
      <Drawer.Screen name="SignOut" component={HomeScreen} />
    </Drawer.Navigator>
  );

  const createBottomTab = () => (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={26} />,
        }}
      />

      <BottomTabs.Screen
        name="Skill"
        component={Skill}
        options={{
          tabBarLabel: 'Skill',
          tabBarIcon: ({color}) => <Icon name="info" color={color} size={26} />,
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
      <BottomTabs.Screen
        name="Todo"
        component={Todo}
        options={{
          tabBarLabel: 'ToDo',
          tabBarIcon: ({color}) => (
            <Icon name="login" color={color} size={26} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );

  //set loading and interval
  const [user, setUser] = useState('');
  const [token, setToken] = useState(null);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const [isLoading, setIsLoading] = React.useState(true);
  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={{token, setToken}}>
      <NavigationContainer>
        {token ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Project" component={Project} />
            <Stack.Screen name="Drawer" component={createDrawer} />
            <Stack.Screen name="Tab" component={createBottomTab} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
