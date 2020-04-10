import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import PropTypes from 'prop-types';

export default class Navbar extends React.Component {
  async componentDidMount() {
    this.setState({

    });
  }

  render() {
    const { title, navigation, backButton } = this.props;
    return (
      <Header>
        <Left>
          {
            backButton ? <Button transparent onPress={() => navigation.pop()}>
              <Icon name="arrow-back" style={styles.leftIcon} />
            </Button> :
              <Button transparent onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu" style={styles.leftIcon} />
              </Button>
          }
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
};

const styles = StyleSheet.create({
  leftIcon: {
    fontSize: 26
  }
});

Navbar.propTypes = {
  navigation: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};
