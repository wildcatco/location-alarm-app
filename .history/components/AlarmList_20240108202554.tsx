import { Text, Button, Modal, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Alarm } from '../App';

interface AlarmListProps {
  alarmList: Alarm[];
  isOpen: boolean;
  onClose: () => void;
}

export default function AlarmList({
  alarmList,
  isOpen,
  onClose,
}: AlarmListProps) {
  return (
    <Modal visible={isOpen} animationType='slide'>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.close}>
            <Button title='닫기' onPress={onClose} />
          </View>
          <View>
            {alarmList.map((alarm) => (
              <View key={alarm.id} style={styles.alarm}>
                <Text>{alarm.title}</Text>
                <Text>({alarm.radius}미터)</Text>
              </View>
            ))}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  close: {
    alignItems: 'flex-end',
    marginBottom: 40,
  },
  alarm: {
    flexDirection: 'row',
  },
});
