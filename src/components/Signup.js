import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, Input, Item, Label, Text } from 'native-base';

import { appColor } from '../constants';
import PropTypes from 'prop-types';
import ResetPassword from './ResetPassword';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
    };
  }
  render(){
    const { goToSignin } = this.props;
    const { firstname, lastname, phone, email, password } = this.state;
    return (
      <View style={styles.slideStyle}>
        <Item floatingLabel style={styles.itemStyle}>
          <Label style={styles.labelStyle}>Имя</Label>
          <Input
            value={firstname}
            onChangeText={val => this.setState({ firstname: val })}
          />
        </Item>
        <Item floatingLabel style={styles.itemStyle}>
          <Label style={styles.labelStyle}>Фамилия</Label>
          <Input
            value={lastname}
            onChangeText={val => this.setState({ lastname: val })}
          />
        </Item>
        <Item floatingLabel style={styles.itemStyle}>
          <Label style={styles.labelStyle}>Телефон</Label>
          <Input
            value={phone}
            onChangeText={val => this.setState({ phone: val })}
          />
        </Item>
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
          <Button light block style={styles.whiteBtnStyle}>
            <Text style={styles.textBtnStyle}>Зарегистрироваться</Text>
          </Button>
          <Button transparent block onPress={goToSignin}>
            <Text style={styles.textTranspBtnStyle}>Уже зарегистрированы?</Text>
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
    marginBottom: 10,
  },
  textBtnStyle: {
    color: appColor,
  },
  textTranspBtnStyle: {
    color: '#ffffff',
  },
});

Signup.defaultProps = {
  goToSignin: () => {},
};

Signup.propTypes = {
  goToSignin: PropTypes.func,
};
