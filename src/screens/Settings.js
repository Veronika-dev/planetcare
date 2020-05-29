import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Navbar from '../components/Navbar';
import { Container, List, ListItem, Text } from 'native-base';
import { logout } from '../redux/actions/authActions';
import { connect } from 'react-redux';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    const { navigation } = this.props;
    return (
      <Container>
        <Navbar title="Настройки" navigation={navigation} backButton/>
        <View style={{ flex: 1 }}>
          <List>
            <ListItem button onPress={() => {}}>
              <Text>О приложении</Text>
            </ListItem>
            <ListItem button onPress={() => this.props.logout(navigation)}>
              <Text>Выйти</Text>
            </ListItem>
          </List>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = (state) => {
  return {
    loadingLogout: state.authReducer.loadingLogout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (nav) => dispatch(logout(nav)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
