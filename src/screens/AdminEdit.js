import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {Container, Content, Form, Item, Label, Input, Icon, Fab} from 'native-base';
import Navbar from '../components/Navbar';

import {labelColor, navIconColor, descriptionColor, appColor} from '../constants';

class AdminEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updated: false,
      form: {
        title: 'Вторсырье – это не мусор. Как из отходов рождаются новые вещи',
        description: 'Большинство населения Земли не выйдет из дома, пока не почистит зубы. Стоматологи советуют менять зубные щетки в среднем раз в два месяца. Конечно, не все так поступают. Greenpeace исходит из того, что в среднем россиянин использует три щетки в год. Одна штука весит около 40 граммов. Если пересчитать на все население страны, Россия ежегодно выбрасывает более 17 тысяч тонн пластиковых отходов только за счет зубных щеток.\n' +
          'А можно сделать по-другому. В идеале – найти альтернативу пластикой зубной щетке. Либо сдать ее на переработку. И из нее сделают ручку.\n' +
          'Пластиковые бутылки тоже могут зажить новой жизнью и стать спортивным костюмом или наполнителем для курток, подушек, мягких игрушек. Алюминиевая банка может перерождаться в саму себя бесконечное число раз, либо стать элементами самолета или автомобиля. По некоторым данным, около 75% процентов всего алюминия, произведенного с 1988 года, до сих пор используется в переработанном виде. Из стекла делают стекловату, зеркала, стекла для окон. Из макулатуры – туалетную бумагу. Большинство отработавших вещей – не мусор, а вторсырье. Если вернуть его в экономику, можно значительно сэкономить на природных ресурсах и снизить негативное влияние на окружающую среду.\n' +
          '\nИсточник: РИА Новости',
        images: [require('../assets/images/vtorsyrie.jpg')],
      },
    };
  }
  updateForm = (updObj) => {
    const form = Object.assign({}, this.state.form, updObj);
    this.setState({
      form,
      updated: true,
    });
  };
  render(){
    const { navigation } = this.props;
    const {
      form: {
        title, description, images,
      },
    } = this.state;
    return (
      <Container>
        <Navbar title="Админ - новость" navigation={navigation} backButton />
        <Content style={styles.content}>
          <Form>
            <Item style={styles.itemStyle} floatingLabel>
              <Label style={styles.labelStyle}>Заголовок</Label>
              <Input
                value={title}
                onChangeText={val => this.updateForm({ title: val })}
              />
            </Item>
            <Item style={styles.itemResizeStyle} floatingLabel>
              <Label style={styles.labelStyle}>Описание</Label>
              <Input
                value={description}
                onChangeText={val => this.updateForm({ description: val })}
                multiline
                placeholderTextColor={labelColor}
              />
            </Item>
          </Form>
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

export default AdminEdit;

