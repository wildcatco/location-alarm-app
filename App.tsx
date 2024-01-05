import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Map from './components/Map';
import Header from './components/Header';
import useCurrentPosition from './hooks/useCurrentPosition';

export default function App() {
  const currentPosition = useCurrentPosition();

  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        {!currentPosition && <ActivityIndicator size='large' />}
        {currentPosition && (
          <>
            <Header />
            <Map initialPosition={currentPosition} />
          </>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
