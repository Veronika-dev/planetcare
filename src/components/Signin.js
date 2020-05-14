import React from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { Button, Input, Item, Label, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import PropTypes from 'prop-types';

import { appColor, errorColor } from '../constants';
import { validateEmail } from '../helpers';

export default class Signin extends React.Component {
  _swiper: ?any = null;
  activeStep: string = 'email';
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      code: '',
      errorEmail: null,
      errorCode: null,
    };
  }
  componentDidUpdate() {
    if (this.props.activeStep === 'code' && this.activeStep === 'email') {
      this.changeIndex(1);
    }
    this.activeStep = this.props.activeStep;
  }
  changeIndex = (index) => {
    if (this._swiper) {
      this._swiper.scrollBy(index, true);
    }
  };
  getAuthCode = () => {
    const { email } = this.state;
    if (validateEmail(email)) {
      this.props.getCode(email);
    } else {
      this.setState({
        errorEmail: 'Введён некорректный Email',
      });
    }
  };
  login = () => {
    const { email, code } = this.state;
    if (code && code.length === 4) {
      this.props.login(email, code);
    } else {
      this.setState({
        errorCode: 'Введён некорректный код авторизации',
      });
    }
  };
  render(){
    const { loadingEmail, loadingCode } = this.props;
    const { email, code, errorEmail, errorCode } = this.state;
    return (
      <Swiper loop={false} showsPagination={false} index={0} ref={r => { this._swiper = r; }} scrollEnabled={false}>
        <View style={styles.slideStyle}>
          <Item floatingLabel style={styles.itemStyle}>
            <Label style={styles.labelStyle}>Email</Label>
            <Input
              value={email}
              onChangeText={val => this.setState({ email: val })}
              style={styles.inputStyle}
              autoCapitalize="none"
            />
          </Item>
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorEmail}</Text>
          </View>
          <View style={styles.btnsContStyle}>
            <Button light block style={styles.whiteBtnStyle} onPress={this.getAuthCode}>
              { loadingEmail && <ActivityIndicator color={appColor} style={styles.spinnerBtnStyle} size="small" /> }
              <Text style={styles.textBtnStyle}>Получить код</Text>
            </Button>
          </View>
        </View>
        <View style={styles.slideStyle}>
          <Text style={styles.checkEmailTextStyle}>Вам на почту отправлен код. Введите его в поле, чтобы авторизоваться</Text>
          <Item floatingLabel style={styles.itemStyle}>
            <Label style={styles.labelStyle}>Код авторизации</Label>
            <Input
              value={code}
              onChangeText={val => this.setState({ code: val })}
              style={styles.inputStyle}
              keyboardType="numeric"
            />
          </Item>
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{errorCode}</Text>
          </View>
          <View style={styles.btnsContStyle}>
            <Button light block style={styles.whiteBtnStyle} onPress={this.login}>
              { loadingCode && <ActivityIndicator color={appColor} style={styles.spinnerBtnStyle} size="small" /> }
              <Text style={styles.textBtnStyle}>Далее</Text>
            </Button>
          </View>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slideStyle: {
    paddingHorizontal: 30,
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
  checkEmailTextStyle: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 15,
  },
  errorContainer: {
    height: 20,
  },
  errorText: {
    fontSize: 14,
    color: errorColor,
  },
  spinnerBtnStyle: {
    marginLeft: -18,
  },
  inputStyle: {
    color: '#ffffff',
  },
});

Signin.defaultProps = {

};

Signin.propTypes = {

};
