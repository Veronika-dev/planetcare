import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Navbar from '../components/Navbar';
import { Body, Container, Left, List, ListItem, Right, Thumbnail, Text } from 'native-base';

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [
        {
          title: 'Активисты потушили пожар',
          description: 'Был потушен пожар',
          created_date: '20.04.2020 13:43',
          images: [require('../assets/2.jpg')],
        },
      ],
    };
  }
  render(){
    const { navigation } = this.props;
    const { news } = this.state;
    return (
      <Container>
        <Navbar title="Новости" navigation={navigation}/>
        <View style={{ flex: 1 }}>
          <List>
            {
              news.map((item, ind) => {
                return (
                  <ListItem avatar button onPress={() => navigation.navigate('NewsView')} key={ind}>
                    <Left>
                      <Thumbnail source={item.images[0]} />
                    </Left>
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note>{item.description}</Text>
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
