import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Navbar from '../components/Navbar';

export default class Dialogs extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView>
        <Navbar title="Dialogs" navigation={navigation} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionDescription}>
              Dialogs Screen
            </Text>
            <TouchableOpacity onPress={() => { navigation.navigate('Dialog') }}><Text>to dialog</Text></TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({});
