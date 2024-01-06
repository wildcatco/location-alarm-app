import { Text, Button, Modal, View, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface AlarmListProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AlarmList({ isOpen, onClose }: AlarmListProps) {
  return (
    <Modal visible={isOpen} animationType='slide'>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.close}>
            <Button title='닫기' onPress={onClose} />
          </View>
          <View>
            <Text>알람 목록</Text>
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
});
