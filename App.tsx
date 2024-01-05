import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Map from './components/Map';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.container}>
        <Map />
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
