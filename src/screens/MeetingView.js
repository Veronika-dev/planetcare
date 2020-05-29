import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { Button, Container, Fab, H2, Icon, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import Navbar from '../components/Navbar';

import { appColor, labelColor } from '../constants';
import { MeetTypes } from '../redux/constants';

export default class MeetingView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mark: {
        title: 'Уборка мусора',
        description: 'Предалагаю жильцам и всем желающим собраться для уборки мусора во дворе',
        ness_equip: 'Грабли, мешки для мусора, перчатки',
        avail_equip: 'Одни грабли и 20 мешков для мусора',
        type: 'meeting',
        location: 'Новосибирская обл., г. Бердск, ул. Вокзальная, д.6',
        counterStart: '3',
        counterEnd: '20',
        counter: '1',
        event_date: '1.06.2020 10:00',
        images: [require('../assets/images/meeting.jpg')],
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
            <View style={styles.btnsRowStyle}>
              <Button light block style={styles.greenBtnStyle} onPress={() => {}}>
                <Text style={styles.textBtnStyle}>К обсуждению</Text>
              </Button>
              <Button light block style={styles.greenBtnOutStyle} onPress={() => {}}>
                <Text style={styles.textBtnGreenStyle}>Отменить участие</Text>
              </Button>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Дата:</Text>
              <Text>{mark.event_date}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Тип:</Text>
              <Text>{MeetTypes[mark.type]}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Место проведения:</Text>
              <Text>{mark.location}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Описание:</Text>
              <Text>{mark.description}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Необходимое снаряжение:</Text>
              <Text>{mark.ness_equip}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Имеющееся снаряжение:</Text>
              <Text>{mark.avail_equip}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Количество участников:</Text>
              <Text>{mark.counter}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text style={styles.infoLabelStyle}>Всего необходимо участников:</Text>
              <Text>от {mark.counterStart} до {mark.counterEnd}</Text>
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  infoLabelStyle: {
    color: labelColor,
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
    marginBottom: 10,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  btnsRowStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  greenBtnStyle: {
    backgroundColor: appColor,
    width: 180,
  },
  textBtnStyle: {
    color: '#ffffff',
  },
  greenBtnOutStyle: {
    backgroundColor: 'transparent',
    borderColor: appColor,
    borderRadius: 4,
    borderWidth: 1,
    width: 180,
  },
  textBtnGreenStyle: {
    color: appColor,
  },
});
