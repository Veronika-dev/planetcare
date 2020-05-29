import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Body, Container, Left, List, ListItem, Right, Thumbnail, Text } from 'native-base';
import Navbar from '../components/Navbar';

export default class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: [
        {
          title: 'С чего начать, если хочешь заботиться об экологии. Восемь правил',
          description: 'Чтобы защищать природу, нужно...',
          type: 'useful',
          created_date: '27.05.2020 17:20',
          images: [require('../assets/images/save_nature.jpg')],
        },
      ],
    };
  }
  render(){
    const { navigation } = this.props;
    const { instructions } = this.state;
    return (
      <Container>
        <Navbar title="Полезная информация" navigation={navigation}/>
        <View style={{ flex: 1 }}>
          <List>
            {
              instructions.map((item, ind) => {
                return (
                  <ListItem avatar button onPress={() => navigation.navigate('InstructionsView')} key={ind}>
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({});
