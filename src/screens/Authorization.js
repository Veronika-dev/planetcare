import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Container, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import Navbar from '../components/Navbar';
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import ResetPassword from '../components/ResetPassword';

import { appColor } from '../constants';

export default class Authorization extends React.Component {
  _swiper: ?any = null;
  constructor(props) {
    super(props);
    this.state = {};
  }
  changeIndex = (index) => {
    if (this._swiper) {
      this._swiper.scrollBy(index, true);
    }
  };
  render(){
    const { navigation } = this.props;
    return (
      <Container>
        <ImageBackground
          source={require('../assets/images/background.jpg')}
          style={styles.imageBG}
          resizeMode="cover">
          <LinearGradient
            style={styles.linearGradient}
            colors={['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .4)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .0)']}
          >
            <Navbar navigation={navigation} backButton transparent />
          </LinearGradient>
          <View style={styles.colorBG} />
          <ScrollView contentContainerStyle={styles.containerStyle} >
            <Text style={styles.tempTitleStyle}>PlanetCare</Text>
            <View style={styles.swiperContStyle}>
              <Swiper loop={false} showsPagination={false} index={1} ref={r => { this._swiper = r; }} scrollEnabled={false}>
                <ResetPassword goToSignin={() => this.changeIndex(1)} />
                <Signin goToSignup={() => this.changeIndex(1)} goToResetPwd={() => this.changeIndex(-1)} />
                <Signup goToSignin={() => this.changeIndex(-1)} />
              </Swiper>
            </View>
          </ScrollView>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  containerStyle: {
    flex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiperContStyle: {
    height: 500,
  },
  slideStyle: {
    paddingHorizontal: 30,
  },
  imageBG: {
    width: '100%',
    height: '100%',
  },
  colorBG: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(24,157,107, .5)',
  },
  itemStyle: {
    marginTop: 15,
  },
  labelStyle: {
    color: '#ffffff',
  },
  tempTitleStyle: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '500',
  },
  btnsContStyle: {
    marginTop: 20,
  },
  whiteBtnStyle: {
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  textBtnStyle: {
    color: appColor,
  },
  greenBtnStyle: {
    backgroundColor: appColor,
    marginBottom: 10,
  },
  textGreenBtnStyle: {
    color: '#ffffff',
  },
  textTranspBtnStyle: {
    color: '#ffffff',
    paddingBottom: 5,
  },
});
