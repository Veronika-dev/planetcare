import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView, TouchableOpacity,
} from 'react-native';
import {Container, Text, View, Icon, Button, Fab} from 'native-base';

import Navbar from '../components/Navbar';
import RNMap from '../components/RNMap';
import {appColor} from '../constants';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  render() {
    const { navigation } = this.props;
    const { active } = this.state;
    return (
      <Container>
        <Navbar title="PlanetCare" navigation={navigation} />
        <View style={styles.container}>
          <View
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Container>
              <RNMap />
            </Container>
          </View>
          <Fab
            active={active}
            direction="up"
            containerStyle={styles.fab}
            style={styles.btnFab}
            position="bottomRight"
            onPress={() => this.setState({ active: !active })}>
            <Icon name="add" style={styles.fabIcon} />
            <Button style={styles.btnMeeting} onPress={() => navigation.navigate('MeetingCreate', { formType: 'meet' })}>
              <Text style={styles.btnMeetingText}>Встреча</Text>
            </Button>
            <Button style={styles.btnMeeting} onPress={() => navigation.navigate('MeetingCreate', { formType: 'incident' })}>
              <Text style={styles.btnMeetingText}>Инцидент</Text>
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  scrollView: {
    flex: 1,
  },
  fab: {
    width: 140,
    zIndex: 5,
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
});
