import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Text } from 'native-base';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { mainColor, descriptionColor } from '../constants';

export default class SideBar extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <DrawerContentScrollView {...this.props}>
            <TouchableOpacity onPress={() => {}} style={styles.profileContainer}>
              <View style={styles.profileContent}>
                <Image source={require('../assets/profile_image.png')} style={styles.profileImage}  />
                <View>
                  <Text style={styles.nameText}>Войти</Text>
                  {/*<Text style={styles.positionText}>Мастер</Text>*/}
                </View>
              </View>
            </TouchableOpacity>
            <DrawerItemList {...this.props} />
          </DrawerContentScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: mainColor,
  },
  profileContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  profileContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  profileImage: {
    height: 50,
    width: 50,
    marginRight: 20,
  },
  nameText: {
    fontSize: 15,
    fontWeight: '500',
  },
  positionText: {
    fontSize: 12,
    color: descriptionColor,
  },
});
