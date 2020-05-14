import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { navIconColor, textColor, appColor } from './constants';

import MapScreen from './screens/MapScreen';
import MeetingsScreen from './screens/Meetings';
import NewsScreen from './screens/News';
import DialogsScreen from './screens/Dialogs';
import FriendsScreen from './screens/Friends';
import InstructionsScreen from './screens/Instructions';
import RatingScreen from './screens/Rating';
import SettingsScreen from './screens/Settings';

import Sidebar from './components/Sidebar';

import { setToken } from './redux/actions/authActions';

const Drawer = createDrawerNavigator();

class DrawerStack extends React.Component {
  componentDidMount = async () => {
    this.props.setToken();
  }
  render() {
    const { userData } = this.props;
    return (
      <Drawer.Navigator initialRouteName="News" drawerContent={props => <Sidebar {...props} userData={userData} /> }
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
}
const styles = StyleSheet.create({
  icon: {
    fontSize: 22,
  },
  iconContainer: {
    width: 18,
    textAlign: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    userData: state.userReducer.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: () => dispatch(setToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerStack);
// drawerIcon: ({ focused }) => <View style={styles.iconContainer}><Icon name="settings" style={{ ...styles.icon, color: focused ? appColor : navIconColor }} /></View>
