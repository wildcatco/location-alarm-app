import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { Position } from '../types/position';

interface MapProps {
  initialPosition: Position;
  position: Position | null;
}

export default function Map({ initialPosition, position }: MapProps) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: initialPosition.latitude,
        longitude: initialPosition.longitude,
        latitudeDelta: 0.07,
        longitudeDelta: 0.07,
      }}
      region={
        position
          ? {
              latitude: position.latitude,
              longitude: position.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }
          : undefined
      }
      provider={PROVIDER_GOOGLE}
      followsUserLocation={true}
      showsCompass={false}
      showsUserLocation
      showsMyLocationButton
    >
      {position && (
        <Marker coordinate={position} title='test' description='des' />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: '100%',
  },
});
