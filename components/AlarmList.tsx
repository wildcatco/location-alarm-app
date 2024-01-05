import { Text } from 'react-native';
import BottomSheet from './BottomSheet';

interface AlarmListProps {
  onClose: () => void;
}

export default function AlarmList({ onClose }: AlarmListProps) {
  return (
    <BottomSheet onClose={onClose}>
      <Text>Alarm List</Text>
    </BottomSheet>
  );
}
