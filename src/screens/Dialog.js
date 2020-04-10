import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import Navbar from '../components/Navbar';

export default class Dialog extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Navbar title="Dialog" navigation={navigation} backButton />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionDescription}>
              Dialog Screen
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({});
