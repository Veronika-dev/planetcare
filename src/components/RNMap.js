import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default class SideBar extends React.Component {
  state = {
    latitude: 37.78825,
    longitude: -122.4324,
    markers: [
      {
        latlng: {
          latitude: 54.793493,
          longitude: 83.041296,
        },
        title: 'Много мусора на берегу в зоне отдыха',
      },
      {
        latlng: {
          latitude: 54.765595,
          longitude: 83.105032,
        },
        title: 'Уборка мусора',
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
          >
            <Image source={require('../assets/images/loc_green.png')} style={styles.iconMap} />
          </Marker>
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
  iconMap: {
    height: 30,
    width: 22,
  },
});
