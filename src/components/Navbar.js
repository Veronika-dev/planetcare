import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base';
import PropTypes from 'prop-types';

import { mainColor, navIconColor, navTextColor } from '../constants';

export default class Navbar extends React.Component {
  async componentDidMount() {
    this.setState({

    });
  }

  render() {
    const { title, navigation, backButton, transparent } = this.props;
    return (
      <Header style={[transparent ? styles.transpNavbar : styles.navbar]}>
        <Left>
          {
            backButton ? <Button transparent onPress={() => navigation.pop()}>
              <Icon name="arrow-back" style={[styles.leftIcon, transparent ? styles.iconWhite : {}]} />
            </Button> :
              <Button transparent onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu" style={styles.leftIcon} />
              </Button>
          }
        </Left>
        <Body>
          <Title style={styles.title}>{title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: mainColor,
    borderBottomWidth: 0,
  },
  transpNavbar: {
    borderBottomWidth: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  leftIcon: {
    fontSize: 26,
    color: navIconColor,
  },
  iconWhite: {
    color: '#ffffff',
  },
  title: {
    color: navTextColor,
  },
});

Navbar.defaultProps = {
  title: '',
  transparent: false,
  backButton: false,
};

Navbar.propTypes = {
  navigation: PropTypes.any.isRequired,
  title: PropTypes.string,
  backButton: PropTypes.bool,
  transparent: PropTypes.bool,
};
