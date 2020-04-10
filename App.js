/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StatusBar,
} from 'react-native';

import MapScreen from './src/screens/Map';
import MeetingsScreen from './src/screens/Meetings';
import NewsScreen from './src/screens/News';
import DialogsScreen from './src/screens/Dialogs';
import DialogScreen from './src/screens/Dialog';
import FriendsScreen from './src/screens/Friends';
import InstructionsScreen from './src/screens/Instructions';
import RatingScreen from './src/screens/Rating';
import SettingsScreen from './src/screens/Settings';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName="Map">
      <Drawer.Screen name="Map" component={MapScreen} options={{ title: 'Главная' }} />
      <Drawer.Screen name="Meetings" component={MeetingsScreen} options={{ title: 'Встречи' }} />
      <Drawer.Screen name="News" component={NewsScreen} options={{ title: 'Новости' }} />
      <Drawer.Screen name="Dialogs" component={DialogsScreen} options={{ title: 'Диалоги' }} />
      <Drawer.Screen name="Friends" component={FriendsScreen} options={{ title: 'Друзья' }} />
      <Drawer.Screen name="Instructions" component={InstructionsScreen} options={{ title: 'Полезная информация' }} />
      <Drawer.Screen name="Rating" component={RatingScreen} options={{ title: 'Рейтинг' }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Настройки' }} />
    </Drawer.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator mode="modal" headerMode="none" initialRouteName="Main">
          <Stack.Screen name="Main" component={DrawerStack} />
          <Stack.Screen name="Dialog" component={DialogScreen} options={{ title: 'Диалог' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
