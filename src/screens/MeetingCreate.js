// Создание события
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
        title: '',
        description: '',
        ness_equip: '',
        avail_equip: '',
        type: 'meet',
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
        type, title, description, ness_equip, avail_equip, event_date, location,
      },
    } = this.state;
    return (
      <Container>
        <Navbar title="Создание события" navigation={navigation} backButton />
        <Content style={styles.content}>
          <Form>
            <Item style={styles.picker}>
              <Label style={styles.labelStyle}>Тип события</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" style={styles.pickerIcon} />}
                placeholder="Выберите"
                placeholderStyle={styles.pickerPlaceholder}
                placeholderIconColor={navIconColor}
                selectedValue={type}
                onValueChange={val => this.updateForm({ type: val })}
              >
                <Picker.Item label="Встреча" value="meet" />
                <Picker.Item label="Загрязнение" value="pollution" />
              </Picker>
            </Item>
            <Item style={styles.itemStyle}>
              <Input
                value={title}
                onChangeText={val => this.updateForm({ title: val })}
                placeholder="Наименование"
                placeholderTextColor={labelColor}
              />
            </Item>
            <Item style={styles.itemStyle}>
              <DatePicker
                defaultDate={new Date()}
                minimumDate={new Date()}
                value={event_date}
                locale="ru"
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType="fade"
                androidMode="default"
                placeHolderText="Дата проведения"
                placeHolderTextStyle={styles.datepickerText}
                onDateChange={val => this.updateForm({ event_date: val })}
                disabled={false}
              />
            </Item>
            <Item style={styles.itemStyle}>
              <Input
                value={location}
                onChangeText={val => this.updateForm({ location: val })}
                placeholder="Место проведения"
                placeholderTextColor={labelColor}
              />
            </Item>
            <Text style={styles.labelTextStyle}>Количество участников</Text>
            <View style={styles.inputsCounterStyle}>
              <Item inlineLabel style={styles.itemCounter}>
                <Label>От:</Label>
                <Input value={title} style={styles.inputCounter} onChangeText={val => this.updateForm({ title: val })} />
              </Item>
              <Item inlineLabel style={styles.itemCounter}>
                <Label>До:</Label>
                <Input value={title} style={styles.inputCounter} onChangeText={val => this.updateForm({ title: val })} />
              </Item>
            </View>
            <Item style={styles.itemResizeStyle}>
              <Input
                value={description}
                onChangeText={val => this.updateForm({ description: val })}
                multiline
                placeholder="Описание"
                placeholderTextColor={labelColor}
              />
            </Item>
            <Item style={styles.itemResizeStyle}>
              <Input
                value={ness_equip}
                onChangeText={val => this.updateForm({ ness_equip: val })}
                multiline
                placeholder="Необходимое снаряжение"
                placeholderTextColor={labelColor}
              />
            </Item>
            <Item style={styles.itemResizeStyle}>
              <Input
                value={avail_equip}
                onChangeText={val => this.updateForm({ avail_equip: val })}
                multiline
                placeholder="Имеющееся снаряжение"
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
