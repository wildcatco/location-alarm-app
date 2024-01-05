import React from 'react';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { ActivityIndicator, StyleSheet } from 'react-native';
import useCurrentPosition from '../hooks/useCurrentPosition';

export default function Map() {
  const currentPosition = useCurrentPosition();

  if (!currentPosition) {
    return <ActivityIndicator size='large' />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: currentPosition.latitude,
        longitude: currentPosition.longitude,
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
    width: '100%',
    height: '100%',
  },
});
