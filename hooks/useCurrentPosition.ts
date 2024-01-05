import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

interface Position {
  latitude: number;
  longitude: number;
}

export default function useCurrentPosition() {
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setCurrentPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  return currentPosition;
}
