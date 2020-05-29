// Создание события
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Container, Content, Form, Item, Label, Input, Icon, Picker, DatePicker, Text, Fab } from 'native-base';
import Navbar from '../components/Navbar';

import { labelColor, navIconColor, descriptionColor, appColor } from '../constants';

export default class MeetingCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: 'Уборка мусора',
        description: 'Предалагаю жильцам и всем желающим собраться для уборки мусора во дворе',
        ness_equip: 'Грабли, мешки для мусора, перчатки',
        avail_equip: 'Одни грабли и 20 мешков для мусора',
        type: 'dump',
        location: 'Новосибирская обл., г. Бердск, ул. Вокзальная, д.6',
        counterStart: '3',
        counterEnd: '20',
        event_date: '1/06/2020 10:00',
      },
    };
  }
  updateForm = (updObj) => {
    const form = Object.assign({}, this.state.form, updObj);
    this.setState({
      form,
    });
  };
  render(){
    const { formType } = this.props.route.params || {};
    const { navigation } = this.props;
    const {
      form: {
        type, title, description, ness_equip, avail_equip, event_date, location, counterEnd, counterStart,
      },
    } = this.state;
    return (
      <Container>
        <Navbar title={formType === 'incident' ? 'Создание инцидента' : 'Создание встречи'} navigation={navigation} backButton />
        <Content style={styles.content}>
          {
            formType === 'incident' ?
              <Form>
                <Item style={styles.picker}>
                  <Label style={styles.labelStyle}>Тип инцидента</Label>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" style={styles.pickerIcon} />}
                    placeholder="Выберите"
                    placeholderStyle={styles.pickerPlaceholder}
                    placeholderIconColor={navIconColor}
                    selectedValue={type}
                    onValueChange={val => this.updateForm({ type: val })}
                  >
                    <Picker.Item label="Несанкционированная свалка" value="dump" />
                    <Picker.Item label="Пожар" value="fire" />
                    <Picker.Item label="Загрязнение водоёма" value="water_pollution" />
                    <Picker.Item label="Выбросы" value="emissions" />
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
                {/*<Item style={styles.itemStyle}>*/}
                {/*  <DatePicker*/}
                {/*    defaultDate={new Date()}*/}
                {/*    minimumDate={new Date()}*/}
                {/*    value={event_date}*/}
                {/*    locale="ru"*/}
                {/*    timeZoneOffsetInMinutes={undefined}*/}
                {/*    modalTransparent={false}*/}
                {/*    animationType="fade"*/}
                {/*    androidMode="default"*/}
                {/*    placeHolderText="Дата проведения"*/}
                {/*    placeHolderTextStyle={styles.datepickerText}*/}
                {/*    onDateChange={val => this.updateForm({ event_date: val })}*/}
                {/*    disabled={false}*/}
                {/*  />*/}
                {/*</Item>*/}
                <Item style={styles.itemStyle}>
                  <Input
                    value={location}
                    onChangeText={val => this.updateForm({ location: val })}
                    placeholder="Местоположение"
                    placeholderTextColor={labelColor}
                  />
                </Item>
                {/*<Text style={styles.labelTextStyle}>Количество участников</Text>*/}
                {/*<View style={styles.inputsCounterStyle}>*/}
                {/*  <Item inlineLabel style={styles.itemCounter}>*/}
                {/*    <Label>От:</Label>*/}
                {/*    <Input value={title} style={styles.inputCounter} onChangeText={val => this.updateForm({ title: val })} />*/}
                {/*  </Item>*/}
                {/*  <Item inlineLabel style={styles.itemCounter}>*/}
                {/*    <Label>До:</Label>*/}
                {/*    <Input value={title} style={styles.inputCounter} onChangeText={val => this.updateForm({ title: val })} />*/}
                {/*  </Item>*/}
                {/*</View>*/}
                <Item style={styles.itemResizeStyle}>
                  <Input
                    value={description}
                    onChangeText={val => this.updateForm({ description: val })}
                    multiline
                    placeholder="Описание"
                    placeholderTextColor={labelColor}
                  />
                </Item>
                {/*<Item style={styles.itemResizeStyle}>*/}
                {/*  <Input*/}
                {/*    value={ness_equip}*/}
                {/*    onChangeText={val => this.updateForm({ ness_equip: val })}*/}
                {/*    multiline*/}
                {/*    placeholder="Необходимое снаряжение"*/}
                {/*    placeholderTextColor={labelColor}*/}
                {/*  />*/}
                {/*</Item>*/}
                {/*<Item style={styles.itemResizeStyle}>*/}
                {/*  <Input*/}
                {/*    value={avail_equip}*/}
                {/*    onChangeText={val => this.updateForm({ avail_equip: val })}*/}
                {/*    multiline*/}
                {/*    placeholder="Имеющееся снаряжение"*/}
                {/*    placeholderTextColor={labelColor}*/}
                {/*  />*/}
                {/*</Item>*/}
              </Form> :
              <Form>
                <Item style={styles.itemStyle}>
                  <Input
                    value={title}
                    onChangeText={val => this.updateForm({ title: val })}
                    placeholder="Наименование"
                    placeholderTextColor={labelColor}
                  />
                </Item>
                <Item style={styles.itemStyle}>
                  {/*<DatePicker*/}
                  {/*  minimumDate={new Date()}*/}
                  {/*  value={event_date}*/}
                  {/*  locale="ru"*/}
                  {/*  timeZoneOffsetInMinutes={undefined}*/}
                  {/*  modalTransparent={false}*/}
                  {/*  animationType="fade"*/}
                  {/*  androidMode="default"*/}
                  {/*  placeHolderText="Дата проведения"*/}
                  {/*  placeHolderTextStyle={styles.datepickerText}*/}
                  {/*  onDateChange={val => this.updateForm({ event_date: val })}*/}
                  {/*  disabled={false}*/}
                  {/*/>*/}
                  <Input
                    value={event_date}
                    onChangeText={val => this.updateForm({ event_date: val })}
                    placeholder="Дата проведения"
                    placeholderTextColor={labelColor}
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
                    <Input keyboardType="numeric" value={counterStart} style={styles.inputCounter} onChangeText={val => this.updateForm({ counterStart: val })} />
                  </Item>
                  <Item inlineLabel style={styles.itemCounter}>
                    <Label>До:</Label>
                    <Input keyboardType="numeric" value={counterEnd} style={styles.inputCounter} onChangeText={val => this.updateForm({ counterEnd: val })} />
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
          }
        </Content>
        <Fab
          direction="up"
          containerStyle={styles.fab}
          style={styles.btnFab}
          position="bottomRight"
          onPress={() => {}}>
          <Icon name="md-checkmark" style={styles.fabIcon} />
        </Fab>
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
  fab: {
    width: 140,
  },
  btnFab: {
    backgroundColor: appColor,
    right: 0,
  },
  fabIcon: {
    fontSize: 24,
  },
});
