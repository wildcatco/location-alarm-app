import { Button, StyleSheet, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.buttonContainer}>
        <Button title='알람 목록' />
        <Button title='알람 추가' />
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
