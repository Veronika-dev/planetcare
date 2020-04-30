import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Fab, Icon, Button, Text, List, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import Navbar from '../components/Navbar';

import { appColor } from '../constants';

export default class Meetings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      marks: [
        {
          title: 'Тушим пожар',
          type: 'Тушение пожара',
          location: 'Новосибирск',
          event_date: '20.04.2020 13:43',
          images: [require('../assets/2.jpg')],
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
                marks.map(item => {
                  return (
                    <ListItem avatar button onPress={() => navigation.navigate('MeetingView', { type: 'meet' })}>
                      <Left>
                        <Thumbnail source={item.images[0]} />
                      </Left>
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>{item.type}</Text>
                        <Text note>{item.location}</Text>
                      </Body>
                      <Right>
                        <Text note>{item.event_date}</Text>
                        <Text note style={styles.statusStyle}>В процессе</Text>
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
            <Button style={styles.btnMeeting} onPress={() => navigation.navigate('MeetingCreate', { type: 'pollution' })}>
              <Text style={styles.btnMeetingText}>Загрязнение</Text>
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
