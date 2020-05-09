import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { Container, H2, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import Navbar from '../components/Navbar';

export default class NewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {
        title: 'Активисты потушили пожар',
        description: 'Был потушен пожар',
        created_date: '20.04.2020 13:43',
        images: [require('../assets/2.jpg')],
      },
    };
  }
  render(){
    const { navigation } = this.props;
    const { news } = this.state;
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
              news.images.map((img, i) => {
                return (
                  <View style={styles.slideStyle} key={i}>
                    <Image source={img} style={styles.slideImgStyle} resizeMode="cover" />
                  </View>
                );
              })
            }
          </Swiper>
          <View style={styles.containerStyle}>
            <H2 style={styles.titleStyle}>{news.title}</H2>
            <View style={styles.infoRowStyle}>
              <Text note>{news.created_date}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text>{news.description}</Text>
            </View>
          </View>
        </ScrollView>
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
  infoRowStyle: {
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
    marginTop: 10,
    marginBottom: 7,
    paddingHorizontal: 15,
  },
});
