import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Button, Input, Item, Label, Text } from 'native-base';

import { appColor } from '../constants';
import PropTypes from 'prop-types';
import Signin from './Signin';

export default class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      step: 1,
      code: '',
      password: '',
      passwordRepeat: '',
    };
  }
  changeStep = (num) => {
    this.setState({
      step: num,
    });
  };
  render(){
    const { goToSignin } = this.props;
    const { email, step, code, password, passwordRepeat } = this.state;
    return (
      <View style={styles.slideStyle}>
        {
          step === 1 && <Item floatingLabel style={styles.itemStyle}>
            <Label style={styles.labelStyle}>E-mail</Label>
            <Input
              value={email}
              onChangeText={val => this.setState({ email: val })}
            />
          </Item>
        }
        {
          step === 2 && <Item floatingLabel style={styles.itemStyle}>
            <Label style={styles.labelStyle}>Код</Label>
            <Input
              value={code}
              onChangeText={val => this.setState({ code: val })}
            />
          </Item>
        }
        {
          step === 3 && <View>
            <Item floatingLabel style={styles.itemStyle}>
              <Label style={styles.labelStyle}>Новый пароль</Label>
              <Input
                value={password}
                onChangeText={val => this.setState({ password: val })}
              />
            </Item>
            <Item floatingLabel style={styles.itemStyle}>
              <Label style={styles.labelStyle}>Подтвердите пароль</Label>
              <Input
                value={passwordRepeat}
                onChangeText={val => this.setState({ passwordRepeat: val })}
              />
            </Item>
          </View>
        }
        <View style={styles.btnsContStyle}>
          {
            step === 1 && <Button light block style={styles.whiteBtnStyle} onPress={() => this.changeStep(2)}>
              <Text style={styles.textBtnStyle}>Получить код</Text>
            </Button>
          }
          {
            step === 2 && <Button light block style={styles.whiteBtnStyle} onPress={() => this.changeStep(3)}>
              <Text style={styles.textBtnStyle}>Отправить</Text>
            </Button>
          }
          {
            step === 3 && <Button light block style={styles.whiteBtnStyle}>
              <Text style={styles.textBtnStyle}>Изменить</Text>
            </Button>
          }
          <Button transparent block onPress={goToSignin}>
            <Text style={styles.textTranspBtnStyle}>Войти</Text>
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

ResetPassword.defaultProps = {
  goToSignin: () => {},
};

ResetPassword.propTypes = {
  goToSignin: PropTypes.func,
};
