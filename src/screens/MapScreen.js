import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView, TouchableOpacity,
} from 'react-native';
import { Container, Text, Header } from 'native-base';

import Navbar from '../components/Navbar';
import RNMap from '../components/RNMap';

export default class Map extends React.Component {
  async componentDidMount() {
    this.setState({
      isReady: true,
    });
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Navbar title="PlanetCare" navigation={navigation} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Container>
            <RNMap />
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({});
