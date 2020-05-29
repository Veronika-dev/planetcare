/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import MeetingCreateScreen from './src/screens/MeetingCreate';
import MeetingViewScreen from './src/screens/MeetingView';
import NewsViewScreen from './src/screens/NewsView';
import DialogScreen from './src/screens/Dialog';
import InstructionsViewScreen from './src/screens/InstructionsView';
import AuthorizationScreen from './src/screens/Authorization';
import ProfileViewScreen from './src/screens/ProfileView';
import ProfileEditScreen from './src/screens/ProfileEdit';
import AdminEditScreen from './src/screens/AdminEdit';
import DrawerStack from './src/DrawerStack';

import { store } from './src/redux/store';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
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
          <Stack.Screen name="ProfileView" component={ProfileViewScreen} />
          <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
          <Stack.Screen name="AdminEdit" component={AdminEditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
