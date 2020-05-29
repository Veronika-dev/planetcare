import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { Container, H2, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

import Navbar from '../components/Navbar';

export default class NewsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {
        title: 'Вторсырье – это не мусор. Как из отходов рождаются новые вещи',
        description:
          `Большинство населения Земли не выйдет из дома, пока не почистит зубы. Стоматологи советуют менять зубные щетки в среднем раз в два месяца. Конечно, не все так поступают. Greenpeace исходит из того, что в среднем россиянин использует три щетки в год. Одна штука весит около 40 граммов. Если пересчитать на все население страны, Россия ежегодно выбрасывает более 17 тысяч тонн пластиковых отходов только за счет зубных щеток.
          \nА можно сделать по-другому. В идеале – найти альтернативу пластикой зубной щетке. Либо сдать ее на переработку. И из нее сделают ручку.
          \nПластиковые бутылки тоже могут зажить новой жизнью и стать спортивным костюмом или наполнителем для курток, подушек, мягких игрушек. Алюминиевая банка может перерождаться в саму себя бесконечное число раз, либо стать элементами самолета или автомобиля. По некоторым данным, около 75% процентов всего алюминия, произведенного с 1988 года, до сих пор используется в переработанном виде. Из стекла делают стекловату, зеркала, стекла для окон. Из макулатуры – туалетную бумагу. Большинство отработавших вещей – не мусор, а вторсырье. Если вернуть его в экономику, можно значительно сэкономить на природных ресурсах и снизить негативное влияние на окружающую среду.
          \n\nИсточник: РИА Новости`,
        created_date: '27.05.2020 20:48',
        images: [require('../assets/images/vtorsyrie.jpg')],
      },
    };
  }
  render(){
    const { navigation } = this.props;
    const { news } = this.state;
    return (
      <Container>
        <LinearGradient
          style={styles.linearGradient}
          colors={['rgba(0, 0, 0, .5)', 'rgba(0, 0, 0, .4)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .0)']}
        >
          <Navbar navigation={navigation} backButton transparent />
        </LinearGradient>
        <ScrollView style={styles.containerStyle}>
          <Swiper style={styles.swiperStyle}>
            {
              news.images.map((img, i) => {
                return (
                  <View style={styles.slideStyle} key={i}>
                    <Image source={img} style={styles.slideImgStyle} resizeMode="cover" />
                  </View>
                );
              })
            }
          </Swiper>
          <View style={styles.containerStyle}>
            <H2 style={styles.titleStyle}>{news.title}</H2>
            <View style={styles.infoRowStyle}>
              <Text note>{news.created_date}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text>{news.description}</Text>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  linearGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  infoRowStyle: {
    paddingBottom: 5,
    paddingHorizontal: 15,
  },
  infoLabelStyle: {
    width: 170,
  },
  swiperStyle: {
    height: 300,
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImgStyle: {
    width: '100%',
    height: '100%',
  },
  titleStyle: {
    marginTop: 10,
    marginBottom: 7,
    paddingHorizontal: 15,
  },
});
