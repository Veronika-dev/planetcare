import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, Input, Item, Label, Text } from 'native-base';
import PropTypes from 'prop-types';

import { appColor } from '../constants';

export default class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render(){
    const { goToSignup, goToResetPwd } = this.props;
    const { email, password } = this.state;
    return (
      <View style={styles.slideStyle}>
        <Item floatingLabel style={styles.itemStyle}>
          <Label style={styles.labelStyle}>E-mail</Label>
          <Input
            value={email}
            onChangeText={val => this.setState({ email: val })}
          />
        </Item>
        <Item floatingLabel style={styles.itemStyle}>
          <Label style={styles.labelStyle}>Пароль</Label>
          <Input
            value={password}
            onChangeText={val => this.setState({ password: val })}
          />
        </Item>
        <View style={styles.btnsContStyle}>
          <Button light block style={styles.greenBtnStyle}>
            <Text style={styles.textGreenBtnStyle}>Войти</Text>
          </Button>
          <Button light block style={styles.whiteBtnStyle} onPress={goToSignup}>
            <Text style={styles.textBtnStyle}>Зарегистрироваться</Text>
          </Button>
          <Button transparent block onPress={goToResetPwd}>
            <Text style={styles.textTranspBtnStyle}>Забыли пароль?</Text>
          </Button>
        </View>
      </View>
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

Signin.defaultProps = {
  goToSignup: () => {},
  goToResetPwd: () => {},
};

Signin.propTypes = {
  goToSignup: PropTypes.func,
  goToResetPwd: PropTypes.func,
};
