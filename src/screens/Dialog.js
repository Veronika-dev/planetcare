import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import Navbar from '../components/Navbar';
import {Container, Body, Left, List, ListItem, Right, Thumbnail, Text, Icon, Input, Item} from 'native-base';
import {appColor, labelColor} from '../constants';

export default class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      dialog: {
        title: 'Уборка мусора',
        type: 'conversation',
        status: 'active',
        messages: [{
          date: '28.05.2020 18:03',
          text: 'Предалагаю жильцам и всем желающим собраться для уборки мусора во дворе',
          author: 'Вероника Копытова',
        }],
      },
    };
  }
  render() {
    const { navigation } = this.props;
    const { dialog, message } = this.state;
    return (
      <Container style={styles.container}>
        <Navbar title={dialog.title} subtitle="1 участник" navigation={navigation} backButton />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.scrollView}>
          <List>
            {
              dialog.messages.map((item, i) => {
                return (
                  <ListItem key={i} avatar button onPress={() => navigation.navigate('Dialog')}>
                    <Left>
                      <Thumbnail source={require('../assets/profile_image.png')} />
                    </Left>
                    <Body style={styles.noBorderStyle}>
                      <Text style={{ fontWeight: 'bold' }}>{item.author}</Text>
                      <Text note style={{ fontSize: 12 }}>{item.date}</Text>
                      <Text>{item.text}</Text>
                    </Body>
                  </ListItem>
                );
              })
            }
          </List>
        </ScrollView>
        <View>
          <Item style={styles.itemResizeStyle}>
            <Icon name="add" style={styles.iconGreen} />
            <Input
              value={message}
              onChangeText={val => this.updateForm({ description: val })}
              multiline
              placeholder="Расскажите о своих добрых делах"
              placeholderTextColor={labelColor}
            />
            <Icon name="send" style={styles.iconGreen} />
          </Item>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  scrollView: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  itemResizeStyle: {
    paddingHorizontal: 15,
    minHeight: 40,
  },
  iconGreen: {
    color: appColor,
    marginTop: 10,
  },
  noBorderStyle: {
    borderBottomWidth: 0,
  },
});
