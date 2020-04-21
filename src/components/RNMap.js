import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class SideBar extends React.Component {
  state = {
    latitude: 37.78825,
    longitude: -122.4324,
    markers: [
      {
        latlng: {
          latitude: 54.762082,
          longitude: 83.113769,
        },
        title: 'Title',
        description: 'description'
      },
    ],
  };
  watchID: ?number = null;
  initialRegion = {
    latitude: 56.755814,
    longitude: 37.617635,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  componentDidMount(): void {
    Geolocation.setRNConfiguration({
      authorizationLevel: 'whenInUse',
    });
    this.watchID = Geolocation.watchPosition(position => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }

  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  render() {
    const { latitude, longitude } = this.state;
    return (
      <MapView
        style={styles.map}
        initialRegion={this.initialRegion}
        region={{
          latitude,
          longitude,
          latitudeDelta: this.initialRegion.latitudeDelta,
          longitudeDelta: this.initialRegion.longitudeDelta,
        }}
        showsUserLocation={true}
      >
        {this.state.markers.map((marker, i) => (
          <Marker
            key={i}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          >
            <View style={{ backgroundColor: "red", padding: 5 }}>
              <Text>{marker.title}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
