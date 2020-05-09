// Редактирование профиля
import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import { Container, Content, Form, Item, Label, Input, Icon, Picker, DatePicker, Text } from 'native-base';
import Navbar from '../components/Navbar';

import { labelColor, navIconColor, descriptionColor } from '../constants';

export default class MeetingCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstname: 'Иван',
        lastname: 'Иванов',
        email: 'ivanov@gmail.com',
        phone: '+79534449955',
        info_about: 'Обо мне',
        image: require('../assets/2.jpg'),
        password: '',
        gender: '',
        birthdate: '',
      },
    };
  }
  componentDidMount(): void {
    const { type } = this.props.route.params || {};
    if (type) {
      this.updateForm({ type });
    }
  }
  updateForm = (updObj) => {
    const form = Object.assign({}, this.state.form, updObj);
    this.setState({
      form,
    });
  };
  render(){
    const { navigation } = this.props;
    const {
      form: {
        firstname, lastname, phone, email, password, gender, birthdate, location, info_about,
      },
    } = this.state;
    return (
      <Container>
        <Navbar title="Редактирование профиля" navigation={navigation} backButton />
        <Content style={styles.content}>
          <Form>
            <Item style={styles.itemStyle}>
              <Label style={styles.labelStyle}>Имя</Label>
              <Input
                value={firstname}
                onChangeText={val => this.setState({ firstname: val })}
              />
            </Item>
            <Item style={styles.itemStyle}>
              <Label style={styles.labelStyle}>Фамилия</Label>
              <Input
                value={lastname}
                onChangeText={val => this.setState({ lastname: val })}
              />
            </Item>
            <Item style={styles.picker}>
              <Label style={styles.labelStyle}>Пол</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" style={styles.pickerIcon} />}
                placeholder="Выберите"
                placeholderStyle={styles.pickerPlaceholder}
                placeholderIconColor={navIconColor}
                selectedValue={gender}
                onValueChange={val => this.updateForm({ gender: val })}
              >
                <Picker.Item label="Мужской" value="M" />
                <Picker.Item label="Женский" value="F" />
              </Picker>
            </Item>
            <Item style={styles.itemStyle}>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date()}
                value={birthdate}
                locale="ru"
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType="fade"
                androidMode="default"
                placeHolderText="Дата рождения"
                placeHolderTextStyle={styles.datepickerText}
                onDateChange={val => this.updateForm({ birthdate: val })}
                disabled={false}
              />
            </Item>
            <Item style={styles.itemStyle}>
              <Input
                value={location}
                onChangeText={val => this.updateForm({ location: val })}
                placeholder="Место жительства"
                placeholderTextColor={labelColor}
              />
            </Item>
            <Item style={styles.itemStyle}>
              <Label style={styles.labelStyle}>Телефон</Label>
              <Input
                value={phone}
                onChangeText={val => this.setState({ phone: val })}
              />
            </Item>
            <Item style={styles.itemStyle}>
              <Label style={styles.labelStyle}>E-mail</Label>
              <Input
                value={email}
                onChangeText={val => this.setState({ email: val })}
              />
            </Item>
            <Item style={styles.itemResizeStyle}>
              <Input
                value={info_about}
                onChangeText={val => this.updateForm({ info_about: val })}
                multiline
                placeholder="Расскажите о себе"
                placeholderTextColor={labelColor}
              />
            </Item>
            <Item style={styles.itemStyle}>
              <Label style={styles.labelStyle}>Пароль</Label>
              <Input
                value={password}
                onChangeText={val => this.setState({ password: val })}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingRight: 15,
  },
  itemStyle: {
    padding: 0,
    height: 40,
  },
  itemResizeStyle: {
    padding: 0,
    minHeight: 40,
  },
  labelStyle: {
    color: labelColor,
    paddingLeft: 5,
  },
  picker: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  pickerIcon: {
    color: navIconColor,
  },
  pickerPlaceholder: {
    color: descriptionColor,
  },
  datepickerText: {
    color: labelColor,
    paddingHorizontal: 5,
  },
  labelTextStyle: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  inputsCounterStyle: {
    display: 'flex',
    flexDirection: 'row',
  },
  itemCounter: {
    width: '45%',
    height: 40,
    paddingLeft: 5,
    borderBottomWidth: 0,
  },
  inputCounter: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(219, 216, 222)',
    borderStyle: 'solid',
    height: 30,
  },
});
