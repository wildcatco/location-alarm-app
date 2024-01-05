import { Button, StyleSheet, View } from 'react-native';

interface HeaderProps {
  onListClick: () => void;
  onAddClick: () => void;
}

export default function Header({ onListClick, onAddClick }: HeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <Button title='알람 목록' onPress={onListClick} />
        <Button title='알람 추가' onPress={onAddClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
