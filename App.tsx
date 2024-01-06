import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Map from './components/Map';
import Header from './components/Header';
import useCurrentPosition from './hooks/useCurrentPosition';
import AddAlarm from './components/AddAlarm';
import { useState } from 'react';
import AlarmList from './components/AlarmList';
import { Position } from './types/position';

export default function App() {
  const [showAlarmList, setShowAlarmList] = useState(false);
  const [showAddAlarm, setShowAddAlarm] = useState(false);
  const [searchedLocation, setSearchedLocation] = useState<Position | null>(
    null
  );

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

  const handleSearch = (position: Position) => {
    setSearchedLocation(position);
    setShowAddAlarm(false);
  };

  return (
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
            <Map
              initialPosition={currentPosition}
              position={searchedLocation}
            />
            <AlarmList isOpen={showAlarmList} onClose={handleCloseAlarmList} />
            <AddAlarm
              isOpen={showAddAlarm}
              onSearch={handleSearch}
              onClose={handleCloseAddAlarm}
            />
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
