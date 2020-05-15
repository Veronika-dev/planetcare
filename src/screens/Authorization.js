import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Container, Text } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

import { getAuthCode, login } from '../redux/actions/authActions';

import Navbar from '../components/Navbar';
import Signin from '../components/Signin';

class Authorization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    const { navigation, activeStep, loadingEmail, loadingCode } = this.props;
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
              <Signin
                getCode={this.props.getAuthCode}
                loadingEmail={loadingEmail}
                loadingCode={loadingCode}
                activeStep={activeStep}
                login={(email, code) => this.props.login(email, code, navigation)}
              />
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
    height: 300,
    width: '100%',
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
  tempTitleStyle: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '500',
  },
});

const mapStateToProps = (state) => {
  return {
    email: state.authReducer.email,
    activeStep: state.authReducer.activeStep,
    loadingEmail: state.authReducer.loadingEmail,
    loadingCode: state.authReducer.loadingCode,
    loggedIn: state.authReducer.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthCode: email => dispatch(getAuthCode(email)),
    login: (email, code, nav) => dispatch(login(email, code, nav)),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
