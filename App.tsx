import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Map from './components/Map';
import Header from './components/Header';
import useCurrentPosition from './hooks/useCurrentPosition';
import AddAlarm from './components/AddAlarm';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState } from 'react';
import AlarmList from './components/AlarmList';

export default function App() {
  const [showAlarmList, setShowAlarmList] = useState(false);
  const [showAddAlarm, setShowAddAlarm] = useState(false);

  const currentPosition = useCurrentPosition();

  const handleOpenAlarmList = () => {
    setShowAlarmList(true);
    if (showAddAlarm) {
      setShowAddAlarm(false);
    }
  };

  const handleCloseAlarmList = () => {
    setShowAlarmList(false);
  };

  const handleOpenAddAlarm = () => {
    setShowAddAlarm(true);
    if (showAlarmList) {
      setShowAlarmList(false);
    }
  };

  const handleCloseAddAlarm = () => {
    setShowAddAlarm(false);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style='auto' />
        <SafeAreaView style={styles.container}>
          {!currentPosition && <ActivityIndicator size='large' />}
          {currentPosition && (
            <>
              <Header
                onListClick={handleOpenAlarmList}
                onAddClick={handleOpenAddAlarm}
              />
              <Map initialPosition={currentPosition} />
              {showAlarmList && <AlarmList onClose={handleCloseAlarmList} />}
              {showAddAlarm && <AddAlarm onClose={handleCloseAddAlarm} />}
            </>
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
