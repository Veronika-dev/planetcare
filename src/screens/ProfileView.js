import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView, Image, ActivityIndicator,
} from 'react-native';
import {
  Body, Container,
  List, Left, ListItem,
  Text, Thumbnail,
  Tabs, Tab, TabHeading, Icon,
} from 'native-base';

import Navbar from '../components/Navbar';

import { appColor } from '../constants';
import { setToken } from '../redux/actions/authActions';
import { connect } from 'react-redux';

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }
  render(){
    const { navigation, userData } = this.props;
    const { activeTab } = this.state;
    return (
      <Container>
        <Navbar title="Профиль" navigation={navigation} backButton />
        {
          userData ? <ScrollView style={styles.containerStyle}>
            <View>
              <List>
                <ListItem avatar button onPress={() => navigation.navigate('ProfileEdit')}>
                  <Left>
                    {
                      userData.image ? <Thumbnail source={userData.image} /> :
                        <Thumbnail source={require('../assets/profile_image.png')} />
                    }
                  </Left>
                  <Body style={styles.listBodyStyle}>
                    <Text>{userData.firstname} {userData.lastname}</Text>
                    { userData.place && <Text note>{userData.place} место</Text> }
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
          </ScrollView> :
            <View style={styles.loaderContainer}><ActivityIndicator color={appColor} size="large" /></View>
        }
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
  loaderContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
