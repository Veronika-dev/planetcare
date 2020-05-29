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

export default class InstructionsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: {
        title: 'С чего начать, если хочешь заботиться об экологии. Восемь правил',
        description: `В России в самом разгаре Год экологии. Объявив его, государство тем самым показало свою озабоченность состоянием окружающей среды. При этом некоторые шаги власти, предпринятые за последнее время, вполне убеждают, что это не пустые слова. Хотя, конечно, по поводу последовательности и эффективности государственной политики в этом вопросе можно долго и аргументированно спорить. Как бы там ни было, Год экологии — это отличный повод вспомнить, что многое в деле защиты окружающей среды и повышения экологичности мест нашего постоянного обитания зависит и от нас самих. Пообщавшись с разными экспертами, мы сформулировали восемь золотых правил горожанина, старающегося вести экологичный образ жизни.
        \n\nЭкономь ресурсы
        \nНачнем с истин, банальных не только для экологистов, как называют экологически продвинутых граждан. Плакаты с напоминанием о необходимости беречь свет и воду висели и пылились еще в советских учреждениях. В наши дни, когда все коммунальные ресурсы подлежат строгому учету и за все приходится платить, эти некогда абстрактные призывы получили свою вполне конкретную цену. К тому же следование им повысит вас в экологическом статусе. `,
        type: 'useful',
        created_date: '27.05.2020 17:20',
        images: [require('../assets/images/save_nature.jpg')],
      },
    };
  }
  render(){
    const { navigation } = this.props;
    const { instructions } = this.state;
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
              instructions.images.map((img, i) => {
                return (
                  <View style={styles.slideStyle} key={i}>
                    <Image source={img} style={styles.slideImgStyle} resizeMode="cover" />
                  </View>
                );
              })
            }
          </Swiper>
          <View style={styles.containerStyle}>
            <H2 style={styles.titleStyle}>{instructions.title}</H2>
            <View style={styles.infoRowStyle}>
              <Text note>{instructions.created_date}</Text>
            </View>
            <View style={styles.infoRowStyle}>
              <Text>{instructions.description}</Text>
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
