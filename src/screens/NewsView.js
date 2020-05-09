import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { Container, Fab, H2, Icon, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import Navbar from '../components/Navbar';

import { appColor } from '../constants';

export default class MeetingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mark: {
        title: 'Тушим пожар',
        type: 'Тушение пожара',
        location: 'Новосибирск',
        event_date: '20.04.2020 13:43',
        images: [require('../assets/dino.png'), require('../assets/2.jpg')],
      },
    };
  }
  render(){
    const { navigation } = this.props;
    const { mark } = this.state;
    return (
      <Container>
        <LinearGradient
          style={styles.linearGradient}
          colors={['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .4)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .0)']}
        >
          <Navbar navigation={navigation} backButton transparent />
        </LinearGradient>
        <ScrollView style={styles.containerStyle}>
          <Swiper style={styles.swiperStyle}>
            {
              mark.images.map((img, i) => {
                return (
                  <View style={styles.slideStyle}>
                    <Image source={img} style={styles.slideImgStyle} resizeMode="cover" />
                  </View>
                );
              })
            }
          </Swiper>
          <View style={styles.containerStyle}>
            <H2 style={styles.titleStyle}>{mark.title}</H2>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Дата</Text>
              <Text>{mark.event_date}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Тип</Text>
              <Text>{mark.type}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Место проведения</Text>
              <Text>{mark.location}</Text>
            </View>
          </View>
        </ScrollView>
        <Fab
          direction="up"
          containerStyle={styles.fab}
          style={styles.btnFab}
          position="bottomRight"
          onPress={() => navigation.navigate('MeetingCreate', { type: 'meet' })}>
          <Icon name="md-create" style={styles.fabIcon} />
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
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
  infoRowStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: 5,
    paddingHorizontal: 15,
  },
  infoLabelStyle: {
    width: 170,
  },
  swiperStyle: {
    height: 300,
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImgStyle: {
    width: '100%',
    height: '100%',
  },
  titleStyle: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
});
