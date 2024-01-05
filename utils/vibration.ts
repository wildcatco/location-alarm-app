import { Vibration } from 'react-native';

export class Alarm {
  static pattern = [1000, 1000];

  static start() {
    Vibration.vibrate(Alarm.pattern, true);
  }

  static stop() {
    Vibration.cancel();
  }
}
