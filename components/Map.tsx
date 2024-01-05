import React from 'react';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Position } from '../types/position';

interface MapProps {
  initialPosition: Position;
}

export default function Map({ initialPosition }: MapProps) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: initialPosition.latitude,
        longitude: initialPosition.longitude,
        latitudeDelta: 0.07,
        longitudeDelta: 0.07,
      }}
      provider={PROVIDER_GOOGLE}
      followsUserLocation={true}
      showsCompass={false}
      showsUserLocation
      showsMyLocationButton
    />
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
  },
});
