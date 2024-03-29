import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Navbar from '../components/Navbar';
import { Body, Container, Fab, Icon, Left, List, ListItem, Right, Thumbnail, Text } from 'native-base';
import { appColor } from '../constants';

export default class Dialogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [
        {
          title: 'Уборка мусора',
          type: 'conversation',
          status: 'active',
          last_msg: {
            date: '28.05.2020 18:03',
            text: 'Предалагаю жильцам и всем желающим собраться для уборки мусора во дворе',
          },
        },
      ],
    };
  }

  render() {
    const { navigation } = this.props;
    const { conversations } = this.state;
    return (
      <Container>
        <Navbar title="Сообщения" navigation={navigation} />
        <View style={{ flex: 1 }}>
          <List>
            {
              conversations.map((item, i) => {
                return (
                  <ListItem key={i} avatar button onPress={() => navigation.navigate('Dialog')}>
                    <Left>
                      <View style={styles.thumbnail}><Text style={styles.thumbnailText}>01.06</Text></View>
                    </Left>
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note numberOfLines={2}>{item.last_msg.text}</Text>
                    </Body>
                    <Right>
                      <Text note>{item.last_msg.date}</Text>
                    </Right>
                  </ListItem>
                );
              })
            }
          </List>
          <Fab
            direction="up"
            containerStyle={styles.fab}
            style={styles.btnFab}
            position="bottomRight"
            onPress={() => {}}>
            <Icon name="md-create" style={styles.fabIcon} />
          </Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    height: 60,
    width: 60,
    backgroundColor: appColor,
    borderRadius: 30,
    paddingTop: 23,
  },
  thumbnailText: {
    color: '#ffffff',
    fontSize: 12,
  },
  fab: {
    width: 140,
  },
  btnFab: {
    backgroundColor: appColor,
    right: 0,
  },
  fabIcon: {
    fontSize: 24,
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
    borderStyle: 'solid',
  },
  btnMeetingText: {
    color: appColor,
  },
  statusStyle: {
    color: appColor,
    fontWeight: '400',
  },
});
