// Редактирование профиля
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Container, Content, Form, Item, Label, Input } from 'native-base';
import Navbar from '../components/Navbar';

import { labelColor, navIconColor, descriptionColor } from '../constants';
import { connect } from 'react-redux';
import { updateUserData } from '../redux/actions/userActions';

class MeetingCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false,
      form: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        info_about: '',
        // image: require('../assets/2.jpg'),
      },
    };
  }
  componentDidMount = () => {
    const { userData } = this.props;
    if (userData && !this.state.updated) {
      this.updateForm(userData);
    }
  }
  updateForm = (updObj) => {
    const form = Object.assign({}, this.state.form, updObj);
    this.setState({
      form,
      updated: true,
    });
  };
  saveChanges = (data) => {
    this.props.updateUserData(data);
  };
  render(){
    const { navigation } = this.props;
    const {
      form: {
        firstname, lastname, phone, email, info_about,
      },
    } = this.state;
    return (
      <Container>
        <Navbar title="Редактирование профиля" navigation={navigation} backButton />
        <Content style={styles.content}>
          <Form>
            <Item style={styles.itemStyle} floatingLabel>
              <Label style={styles.labelStyle}>Имя</Label>
              <Input
                value={firstname}
                onChangeText={val => this.updateForm({ firstname: val })}
                onBlur={() => this.saveChanges({ firstname })}
              />
            </Item>
            <Item style={styles.itemStyle} floatingLabel>
              <Label style={styles.labelStyle}>Фамилия</Label>
              <Input
                value={lastname}
                onChangeText={val => this.updateForm({ lastname: val })}
                onBlur={() => this.saveChanges({ lastname })}
              />
            </Item>
            <Item style={styles.itemStyle} floatingLabel>
              <Label style={styles.labelStyle}>Телефон</Label>
              <Input
                value={phone}
                onChangeText={val => this.updateForm({ phone: val })}
                onBlur={() => this.saveChanges({ phone })}
              />
            </Item>
            <Item style={styles.itemStyle} floatingLabel>
              <Label style={styles.labelStyle}>E-mail</Label>
              <Input
                value={email}
                onChangeText={val => this.updateForm({ email: val })}
                onBlur={() => this.saveChanges({ email })}
              />
            </Item>
            <Item style={styles.itemResizeStyle} floatingLabel>
              <Label style={styles.labelStyle}>Расскажите о себе</Label>
              <Input
                value={info_about}
                onChangeText={val => this.updateForm({ info_about: val })}
                onBlur={() => this.saveChanges({ info_about })}
                multiline
                placeholderTextColor={labelColor}
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
    height: 55,
  },
  itemResizeStyle: {
    padding: 0,
    minHeight: 55,
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

const mapStateToProps = (state) => {
  return {
    userData: state.userReducer.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserData: data => dispatch(updateUserData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingCreate);

