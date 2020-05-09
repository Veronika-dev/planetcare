import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import {
  Body, Container,
  List, Left, ListItem,
  Text, Thumbnail,
  Tabs, Tab, TabHeading, Icon,
} from 'native-base';

import Navbar from '../components/Navbar';

import { appColor } from '../constants';

export default class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      user: {
        firstname: 'Иван',
        lastname: 'Иванов',
        email: 'ivanov@gmail.com',
        phone: '+79534449955',
        info_about: 'Обо мне',
        image: require('../assets/2.jpg'),
        place: 1,
      },
    };
  }
  render(){
    const { navigation } = this.props;
    const { user, activeTab } = this.state;
    return (
      <Container>
        <Navbar title="Профиль" navigation={navigation} backButton />
        <ScrollView style={styles.containerStyle}>
          <View>
            <List>
              <ListItem avatar button onPress={() => navigation.navigate('ProfileEdit')}>
                <Left>
                  <Thumbnail source={user.image} />
                </Left>
                <Body style={styles.listBodyStyle}>
                  <Text>{user.firstname} {user.lastname}</Text>
                  <Text note>{user.place} место</Text>
                </Body>
              </ListItem>
            </List>
          </View>
          <Tabs tabBarUnderlineStyle={styles.tabsUndlineStyle} onChangeTab={tab => this.setState({ activeTab: tab.i })}>
            <Tab heading={
              <TabHeading style={styles.tabHeadStyle}>
                <Text style={[styles.tabTextStyle, activeTab === 0 ? styles.activeTabTextStyle : {}]}>Блог</Text>
              </TabHeading>}
            >
              <Text>1</Text>
            </Tab>
            <Tab heading={
              <TabHeading style={styles.tabHeadStyle}>
                <Text style={[styles.tabTextStyle, activeTab === 1 ? styles.activeTabTextStyle : {}]}>Отметки</Text>
              </TabHeading>}
            >
              <Text>1</Text>
            </Tab>
            <Tab heading={
              <TabHeading style={styles.tabHeadStyle}>
                <Text style={[styles.tabTextStyle, activeTab === 2 ? styles.activeTabTextStyle : {}]}>Прогресс</Text>
              </TabHeading>}
            >
              <Text>1</Text>
            </Tab>
          </Tabs>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  tabHeadStyle: {
    backgroundColor: '#ffffff',
  },
  tabsUndlineStyle: {
    backgroundColor: appColor,
  },
  tabTextStyle: {
    color: '#000000',
  },
  activeTabTextStyle: {
    color: appColor,
  },
  listBodyStyle: {
    borderBottomWidth: 0,
    paddingTop: 18,
  },
});
