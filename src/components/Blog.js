import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { Text, Card, CardItem, Left, Thumbnail, Body, Button, Icon, Input, Item } from 'native-base';

import { labelColor, appColor } from '../constants';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }
  render(){
    const { posts } = this.props;
    const { description } = this.state;
    return (
      <ScrollView>
        <Item style={styles.itemResizeStyle}>
          <Icon name="add" style={styles.iconGreen} />
          <Input
            value={description}
            onChangeText={val => this.updateForm({ description: val })}
            multiline
            placeholder="Расскажите о своих добрых делах"
            placeholderTextColor={labelColor}
          />
          <Icon name="ios-checkmark-circle-outline" style={styles.iconGreen} />
        </Item>
        {
          posts && posts.map((item, ind) => (
            <Card key={ind}>
              <CardItem>
                <Left>
                  <Thumbnail source={require('../assets/profile_image.png')} />
                  <Body>
                    <Text>{item.author}</Text>
                    <Text note>{item.date}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={require('../assets/images/dump.jpg')} style={{ height: 200, width: null, flex: 1 }} />
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{item.description}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon name="heart" style={{ color: labelColor }} />
                  </Button>
                </Left>
              </CardItem>
            </Card>
          ))
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  itemResizeStyle: {
    paddingHorizontal: 15,
    marginVertical: 10,
    minHeight: 40,
  },
  iconGreen: {
    color: appColor,
    marginTop: 10,
  },
});
