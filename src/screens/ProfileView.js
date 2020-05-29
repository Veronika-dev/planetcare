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
  Tabs, Tab, TabHeading, Icon, Right,
} from 'native-base';

import Navbar from '../components/Navbar';
import Blog from '../components/Blog';

import { appColor } from '../constants';
import { setToken } from '../redux/actions/authActions';
import { connect } from 'react-redux';
import { MeetTypes } from '../redux/constants';

class ProfileView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      posts: [
        {
          author: 'Вероника Копытова',
          description: 'Собираемся убрать с единомышленниками мусор в нашем дворе, чтобы приятно было здесь находиться...',
          images: [require('../assets/images/dump.jpg')],
          date: '29.05.2020 16:10',
        },
      ],
      marks: [
        {
          event_date: '28.05.2020 17:41',
          images: [require('../assets/2.jpg')],
          title: 'Много мусора на берегу в зоне отдыха',
          description: 'Отдыхающие систематически выбрасывают мусор после отдыха на берег, а не увозят с собой. Теперь здесь образовалась большая свалка',
          ness_equip: '',
          avail_equip: '',
          type: 'dump',
          location: 'Новосибирская обл., г. Бердск, Парк отдыха "Старый Бердск"',
        },
        {
          title: 'Уборка мусора',
          description: 'Предалагаю жильцам и всем желающим собраться для уборки мусора во дворе',
          ness_equip: 'Грабли, мешки для мусора, перчатки',
          avail_equip: 'Одни грабли и 20 мешков для мусора',
          type: 'meeting',
          location: 'Новосибирская обл., г. Бердск, ул. Вокзальная, д.6',
          counterStart: '3',
          counterEnd: '20',
          event_date: '1.06.2020 10:00',
        },
      ],
      history: [
        {
          title: 'Инициатор встречи',
          points: '5 баллов',
          date: '1.06.2020 10:00',
        },
      ],
    };
  }
  render(){
    const { navigation, userData } = this.props;
    const { activeTab, marks, history, posts } = this.state;
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
                    <Text note>1 место</Text>
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
                <Blog posts={posts} />
              </Tab>
              <Tab heading={
                <TabHeading style={styles.tabHeadStyle}>
                  <Text style={[styles.tabTextStyle, activeTab === 1 ? styles.activeTabTextStyle : {}]}>Отметки</Text>
                </TabHeading>}
              >
                <List>
                  {
                    marks.map((item, i) => {
                      return (
                        <ListItem avatar button onPress={() => navigation.navigate('MeetingView', { type: 'meet' })} key={i}>
                          <Left>
                            <Thumbnail source={item.type === 'dump' ? require('../assets/images/trash.jpg') : require('../assets/images/meeting.jpg')} />
                          </Left>
                          <Body>
                            <Text>{item.title}</Text>
                            <Text note>{MeetTypes[item.type] || ''}</Text>
                            <Text note>{item.location}</Text>
                          </Body>
                          <Right>
                            <Text note>{item.event_date}</Text>
                            <Text note style={styles.statusStyle}>{item.type === 'dump' ? 'Создано' : 'Поиск участников'}</Text>
                          </Right>
                        </ListItem>
                      );
                    })
                  }
                </List>
              </Tab>
              <Tab heading={
                <TabHeading style={styles.tabHeadStyle}>
                  <Text style={[styles.tabTextStyle, activeTab === 2 ? styles.activeTabTextStyle : {}]}>Прогресс</Text>
                </TabHeading>}
              >
                <List>
                  {
                    history.map((item, i) => {
                      return (
                        <ListItem avatar button onPress={() => navigation.navigate('MeetingView', { type: 'meet' })} key={i}>
                          <Left>
                            <Thumbnail source={item.type === 'dump' ? require('../assets/images/trash.jpg') : require('../assets/images/meeting.jpg')} />
                          </Left>
                          <Body style={styles.listItemStyle}>
                            <Text>{item.title}</Text>
                            <Text note>+{item.points}</Text>
                          </Body>
                          <Right style={styles.listItemStyle}>
                            <Text note>{item.date}</Text>
                          </Right>
                        </ListItem>
                      );
                    })
                  }
                </List>
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
  statusStyle: {
    color: appColor,
    fontWeight: '400',
  },
  listItemStyle: {
    borderBottomWidth: 0,
  }
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
