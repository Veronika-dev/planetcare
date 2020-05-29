import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Navbar from '../components/Navbar';
import {Body, Container, Left, List, ListItem, Right, Thumbnail, Text, Icon, Fab} from 'native-base';
import {appColor} from '../constants';

export default class AdminPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: 'Вторсырье – это не мусор. Как из отходов рождаются новые вещи',
          description: 'Большинство населения Земли не выйдет из дома, пока не почистит зубы. Стоматологи советуют менять зубные щетки в среднем раз в два месяца. Конечно, не все так поступают. Greenpeace исходит из того, что в среднем россиянин использует три щетки в год. Одна штука весит около 40 граммов. Если пересчитать на все население страны, Россия ежегодно выбрасывает более 17 тысяч тонн пластиковых отходов только за счет зубных щеток.\n' +
            'А можно сделать по-другому. В идеале – найти альтернативу пластикой зубной щетке. Либо сдать ее на переработку. И из нее сделают ручку.\n' +
            'Пластиковые бутылки тоже могут зажить новой жизнью и стать спортивным костюмом или наполнителем для курток, подушек, мягких игрушек. Алюминиевая банка может перерождаться в саму себя бесконечное число раз, либо стать элементами самолета или автомобиля. По некоторым данным, около 75% процентов всего алюминия, произведенного с 1988 года, до сих пор используется в переработанном виде. Из стекла делают стекловату, зеркала, стекла для окон. Из макулатуры – туалетную бумагу. Большинство отработавших вещей – не мусор, а вторсырье. Если вернуть его в экономику, можно значительно сэкономить на природных ресурсах и снизить негативное влияние на окружающую среду.\n' +
            '\nИсточник: РИА Новости',
          created_date: '27.05.2020 20:48',
          images: [require('../assets/images/vtorsyrie.jpg')],
        },
      ],
    };
  }
  render(){
    const { navigation } = this.props;
    const { news } = this.state;
    return (
      <Container>
        <Navbar title="Админ - новости" navigation={navigation}/>
        <View style={{ flex: 1 }}>
          <List>
            {
              news.map((item, ind) => {
                return (
                  <ListItem avatar button onPress={() => navigation.navigate('AdminEdit')} key={ind}>
                    <Left>
                      <Thumbnail source={item.images[0]} />
                    </Left>
                    <Body>
                      <Text>{item.title}</Text>
                    </Body>
                    <Right>
                      <Text note>{item.created_date}</Text>
                    </Right>
                  </ListItem>
                );
              })
            }
          </List>
        </View>
        <Fab
          direction="up"
          containerStyle={styles.fab}
          style={styles.btnFab}
          position="bottomRight"
          onPress={() => {}}>
          <Icon name="add" style={styles.fabIcon} />
        </Fab>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    width: 140,
  },
  btnFab: {
    backgroundColor: appColor,
    right: 0,
  },
  fabIcon: {
    fontSize: 38,
    top: 7,
  },
});
