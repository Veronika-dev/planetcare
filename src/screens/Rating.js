import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Body, Container, Left, List, ListItem, Right, Thumbnail, Text } from 'native-base';
import Navbar from '../components/Navbar';

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Вероника Копытова',
          points: '5',
        },
      ],
    };
  }
  render(){
    const { navigation } = this.props;
    const { users } = this.state;
    return (
      <Container>
        <Navbar title="Рейтинг" navigation={navigation}/>
        <View style={{ flex: 1 }}>
          <List>
            {
              users.map((item, ind) => {
                return (
                  <ListItem avatar button key={ind}>
                    <Left>
                      <Thumbnail source={require('../assets/profile_image.png')} />
                    </Left>
                    <Body>
                      <Text>1. {item.name}</Text>
                      <Text note>{item.points} баллов</Text>
                    </Body>
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
