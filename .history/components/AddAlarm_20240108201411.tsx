import {
  Button,
  Keyboard,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Position } from '../types/position';

interface AddAlarmProps {
  isOpen: boolean;
  onSearch: (prop: { position: Position; description: string }) => void;
  onClose: () => void;
}

export default function AddAlarm({ isOpen, onSearch, onClose }: AddAlarmProps) {
  return (
    <Modal visible={isOpen} animationType='slide'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <View style={styles.close}>
              <Button title='닫기' onPress={onClose} />
            </View>
            <GooglePlacesAutocomplete
              styles={{
                textInput: {
                  borderWidth: 0.5,
                  borderRadius: 4,
                  borderColor: '#757575',
                },
              }}
              placeholder='장소를 검색하세요.'
              fetchDetails
              query={{
                key: process.env.EXPO_PUBLIC_GOOGLE_PLACES_API_KEY,
                language: 'ko',
                components: 'country:kr',
              }}
              onPress={(data, details) => {
                if (details) {
                  onSearch({
                    latitude: details.geometry.location.lat,
                    longitude: details.geometry.location.lng,
                  });
                }
              }}
              enablePoweredByContainer={false}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </TouchableWithoutFeedback>
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
