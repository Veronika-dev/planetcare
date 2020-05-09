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
  StatusBar, StyleSheet, View,
} from 'react-native';
import { Icon } from 'native-base';

import { navIconColor, textColor, appColor } from './src/constants';

import MapScreen from './src/screens/MapScreen';
import MeetingsScreen from './src/screens/Meetings';
import MeetingCreateScreen from './src/screens/MeetingCreate';
import MeetingViewScreen from './src/screens/MeetingView';
import NewsScreen from './src/screens/News';
import NewsViewScreen from './src/screens/NewsView';
import DialogsScreen from './src/screens/Dialogs';
import DialogScreen from './src/screens/Dialog';
import FriendsScreen from './src/screens/Friends';
import InstructionsScreen from './src/screens/Instructions';
import InstructionsViewScreen from './src/screens/InstructionsView';
import RatingScreen from './src/screens/Rating';
import SettingsScreen from './src/screens/Settings';
import AuthorizationScreen from './src/screens/Authorization';

import Sidebar from './src/components/Sidebar';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator initialRouteName="News" drawerContent={props => <Sidebar {...props} /> }
                      drawerType="slide" overlayColor="rgba(51, 51, 51, 0.3)"
                      drawerContentOptions={{
                        activeBackgroundColor: 'rgba(0, 0, 0, 0)',
                        activeTintColor: appColor,
                        inactiveTintColor: textColor,
                        itemStyle: { marginVertical: 0 },
                        labelStyle: { marginHorizontal: 0 },
                      }}>
      <Drawer.Screen name="Map" component={MapScreen} options={{ title: 'Карта',
        drawerIcon: ({ focused }) => <View style={styles.iconContainer}><Icon name="md-map" style={{ ...styles.icon, color: focused ? appColor : navIconColor }} /></View> }} />
      <Drawer.Screen name="Meetings" component={MeetingsScreen} options={{ title: 'События',
        drawerIcon: ({ focused }) => <View style={styles.iconContainer}><Icon name="people" style={{ ...styles.icon, color: focused ? appColor : navIconColor }} /></View> }} />
      <Drawer.Screen name="News" component={NewsScreen} options={{ title: 'Новости',
        drawerIcon: ({ focused }) => <View style={styles.iconContainer}><Icon name="paper" style={{ ...styles.icon, color: focused ? appColor : navIconColor }} /></View> }} />
      <Drawer.Screen name="Dialogs" component={DialogsScreen} options={{ title: 'Сообщения',
        drawerIcon: ({ focused }) => <View style={styles.iconContainer}><Icon name="chatbubbles" style={{ ...styles.icon, color: focused ? appColor : navIconColor }} /></View> }} />
      <Drawer.Screen name="Friends" component={FriendsScreen} options={{ title: 'Друзья',
        drawerIcon: ({ focused }) => <View style={styles.iconContainer}><Icon name="person" style={{ ...styles.icon, color: focused ? appColor : navIconColor }} /></View> }} />
      <Drawer.Screen name="Instructions" component={InstructionsScreen} options={{ title: 'Полезная информация',
        drawerIcon: ({ focused }) => <View style={styles.iconContainer}><Icon name="md-list-box" style={{ ...styles.icon, color: focused ? appColor : navIconColor }} /></View> }} />
      <Drawer.Screen name="Rating" component={RatingScreen} options={{ title: 'Рейтинг',
        drawerIcon: ({ focused }) => <View style={styles.iconContainer}><Icon name="ribbon" style={{ ...styles.icon, color: focused ? appColor : navIconColor }} /></View> }} />
      <Drawer.Screen name="Settings" component={SettingsScreen} options={{ title: 'Настройки и приватность' }} />
    </Drawer.Navigator>
  );
}
// drawerIcon: ({ focused }) => <View style={styles.iconContainer}><Icon name="settings" style={{ ...styles.icon, color: focused ? appColor : navIconColor }} /></View>
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator mode="modal" headerMode="none" initialRouteName="Main">
          <Stack.Screen name="Main" component={DrawerStack} />
          <Stack.Screen name="Dialog" component={DialogScreen} />
          <Stack.Screen name="MeetingCreate" component={MeetingCreateScreen} />
          <Stack.Screen name="MeetingView" component={MeetingViewScreen} />
          <Stack.Screen name="NewsView" component={NewsViewScreen} />
          <Stack.Screen name="InstructionsView" component={InstructionsViewScreen} />
          <Stack.Screen name="Authorization" component={AuthorizationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  icon: {
    fontSize: 22,
  },
  iconContainer: {
    width: 18,
    textAlign: 'center',
  },
});
