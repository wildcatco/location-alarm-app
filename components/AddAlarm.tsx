import { Text } from 'react-native';
import BottomSheet from './BottomSheet';

interface AddAlarmProps {
  onClose: () => void;
}

export default function AddAlarm({ onClose }: AddAlarmProps) {
  return (
    <BottomSheet onClose={onClose}>
      <Text>Add Alarm</Text>
    </BottomSheet>
  );
}
