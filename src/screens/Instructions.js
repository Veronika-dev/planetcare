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
          title: 'С чего начать?',
          description: 'Чтобы защищать природу, нужно...',
          type: 'useful',
          created_date: '20.04.2020 13:43',
          images: [require('../assets/2.jpg')],
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
