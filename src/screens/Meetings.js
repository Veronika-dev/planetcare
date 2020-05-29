import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Fab, Icon, Button, Text, List, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import Navbar from '../components/Navbar';

import { appColor } from '../constants';
import { MeetTypes } from '../redux/constants';

export default class Meetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
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
    };
  }
  render(){
    const { navigation } = this.props;
    const { active, marks } = this.state;
    return (
      <Container>
        <Navbar title="События" navigation={navigation}/>
        <View style={{ flex: 1 }}>
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
                  )
                })
              }
            </List>
          <Fab
            active={active}
            direction="up"
            containerStyle={styles.fab}
            style={styles.btnFab}
            position="bottomRight"
            onPress={() => this.setState({ active: !active })}>
            <Icon name="add" style={styles.fabIcon} />
            <Button style={styles.btnMeeting} onPress={() => navigation.navigate('MeetingCreate', { type: 'meet' })}>
              <Text style={styles.btnMeetingText}>Встреча</Text>
            </Button>
            <Button style={styles.btnMeeting} onPress={() => navigation.navigate('MeetingCreate', { type: 'incident' })}>
              <Text style={styles.btnMeetingText}>Инцидент</Text>
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    width: 140,
  },
  btnFab: {
    backgroundColor: appColor,
    right: 0,
  },
  fabIcon: {
    fontSize: 38,
    top: 7,
  },
  btnEvent: {
    backgroundColor: '#ffffff',
    color: appColor,
  },
  btnMeeting: {
    backgroundColor: '#ffffff',
    width: 140,
    right: 0,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowColor: appColor,
    shadowOffset: { height: 0, width: 0 },
    borderWidth: 1,
    borderColor: appColor,
    borderStyle: 'solid'
  },
  btnMeetingText: {
    color: appColor,
  },
  statusStyle: {
    color: appColor,
    fontWeight: '400',
  },
});
