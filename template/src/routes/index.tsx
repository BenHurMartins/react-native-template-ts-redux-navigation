import Detail from '../screens/Detail';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="SettingsScreen" component={Settings} />
    </Stack.Navigator>
  );
};

const routeIcons = {
  Home: 'home',
  Settings: 'settings',
};

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarIcon: ({size, color}) => {
          return (
            <Icon
              name={routeIcons[route.name as keyof typeof routeIcons] || ''}
              size={size}
              color={color}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
};

export default AppNavigator;
