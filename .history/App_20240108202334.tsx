import 'react-native-get-random-values';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Button,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Map from './components/Map';
import Header from './components/Header';
import useCurrentPosition from './hooks/useCurrentPosition';
import AddAlarm from './components/AddAlarm';
import { useState } from 'react';
import AlarmList from './components/AlarmList';
import { Position } from './types/position';
import DropDownPicker from 'react-native-dropdown-picker';
import { nanoid } from 'nanoid';

export type Alarm = {
  id: string;
  position: Position;
  radius: number;
  title: string;
};

export default function App() {
  const [showAlarmList, setShowAlarmList] = useState(false);
  const [showAddAlarm, setShowAddAlarm] = useState(false);
  const [searchedLocation, setSearchedLocation] = useState<{
    position: Position;
    name: string;
  } | null>(null);
  const [selectedRadius, setSelectedRadius] = useState<number>(50);
  const [radiusOptions, setRadiusOptions] = useState([
    { label: '50미터', value: 50 },
    { label: '100미터', value: 100 },
    { label: '200미터', value: 200 },
    { label: '500미터', value: 500 },
  ]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [alarmList, setAlarmList] = useState<Alarm[]>([]);

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

  const handleSearch = ({
    position,
    name,
  }: {
    position: Position;
    name: string;
  }) => {
    setSearchedLocation({
      position,
      name,
    });
    setShowAddAlarm(false);
  };

  const handleCancel = () => {
    setSearchedLocation(null);
  };

  const handleRadiusChange = (value: any) => {
    setSelectedRadius(value);
  };

  const handleAddAlarm = () => {
    if (!searchedLocation) {
      return;
    }

    const newAlarm: Alarm = {
      id: nanoid(),
      title: searchedLocation.name,
      position: searchedLocation.position,
      radius: selectedRadius,
    };
    setAlarmList((currentAlarmList) => [...currentAlarmList, newAlarm]);
    setSearchedLocation(null);
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
              position={searchedLocation?.position || null}
            />
            <AlarmList
              alarmList={alarmList}
              isOpen={showAlarmList}
              onClose={handleCloseAlarmList}
            />
            <AddAlarm
              isOpen={showAddAlarm}
              onSearch={handleSearch}
              onClose={handleCloseAddAlarm}
            />
            {searchedLocation && (
              <View style={styles.tmp}>
                <View style={styles.radius}>
                  <Text>반경</Text>
                  <DropDownPicker
                    containerStyle={{
                      width: 120,
                    }}
                    open={openDropdown}
                    value={selectedRadius}
                    items={radiusOptions}
                    setOpen={setOpenDropdown}
                    setValue={handleRadiusChange}
                    multiple={false}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <View style={styles.button}>
                    <Button title='취소' onPress={handleCancel} />
                  </View>
                  <View style={styles.button}>
                    <Button title='추가' onPress={handleAddAlarm} />
                  </View>
                </View>
              </View>
            )}
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
  tmp: {
    position: 'absolute',
    backgroundColor: 'white',
    top: '30%',
    padding: 8,
  },
  radius: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  picker: {
    width: 150,
    height: 50,
  },
  pickerItem: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    marginHorizontal: 4,
  },
});
