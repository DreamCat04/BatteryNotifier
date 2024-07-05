import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, TextInput, Button } from 'react-native';
import { getBatteryLevelAsync } from 'expo-battery';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import { Audio, InterruptionModeAndroid } from 'expo-av';
import { Accelerometer } from 'expo-sensors';
import notificationSound from '@/assets/sounds/notification.wav'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import sound0 from '@/assets/sounds/statuses/0.wav'
import sound1 from '@/assets/sounds/statuses/1.wav';
import sound2 from '@/assets/sounds/statuses/2.wav';
import sound3 from '@/assets/sounds/statuses/3.wav';
import sound4 from '@/assets/sounds/statuses/4.wav';
import sound5 from '@/assets/sounds/statuses/5.wav';
import sound6 from '@/assets/sounds/statuses/6.wav';
import sound7 from '@/assets/sounds/statuses/7.wav';
import sound8 from '@/assets/sounds/statuses/8.wav';
import sound9 from '@/assets/sounds/statuses/9.wav';
import sound10 from '@/assets/sounds/statuses/10.wav';
import sound11 from '@/assets/sounds/statuses/11.wav';
import sound12 from '@/assets/sounds/statuses/12.wav';
import sound13 from '@/assets/sounds/statuses/13.wav';
import sound14 from '@/assets/sounds/statuses/14.wav';
import sound15 from '@/assets/sounds/statuses/15.wav';
import sound16 from '@/assets/sounds/statuses/16.wav';
import sound17 from '@/assets/sounds/statuses/17.wav';
import sound18 from '@/assets/sounds/statuses/18.wav';
import sound19 from '@/assets/sounds/statuses/19.wav';
import sound20 from '@/assets/sounds/statuses/20.wav';
import sound21 from '@/assets/sounds/statuses/21.wav';
import sound22 from '@/assets/sounds/statuses/22.wav';
import sound23 from '@/assets/sounds/statuses/23.wav';
import sound24 from '@/assets/sounds/statuses/24.wav';
import sound25 from '@/assets/sounds/statuses/25.wav';
import sound26 from '@/assets/sounds/statuses/26.wav';
import sound27 from '@/assets/sounds/statuses/27.wav';
import sound28 from '@/assets/sounds/statuses/28.wav';
import sound29 from '@/assets/sounds/statuses/29.wav';
import sound30 from '@/assets/sounds/statuses/30.wav';
import sound31 from '@/assets/sounds/statuses/31.wav';
import sound32 from '@/assets/sounds/statuses/32.wav';
import sound33 from '@/assets/sounds/statuses/33.wav';
import sound34 from '@/assets/sounds/statuses/34.wav';
import sound35 from '@/assets/sounds/statuses/35.wav';
import sound36 from '@/assets/sounds/statuses/36.wav';
import sound37 from '@/assets/sounds/statuses/37.wav';
import sound38 from '@/assets/sounds/statuses/38.wav';
import sound39 from '@/assets/sounds/statuses/39.wav';
import sound40 from '@/assets/sounds/statuses/40.wav';
import sound41 from '@/assets/sounds/statuses/41.wav';
import sound42 from '@/assets/sounds/statuses/42.wav';
import sound43 from '@/assets/sounds/statuses/43.wav';
import sound44 from '@/assets/sounds/statuses/44.wav';
import sound45 from '@/assets/sounds/statuses/45.wav';
import sound46 from '@/assets/sounds/statuses/46.wav';
import sound47 from '@/assets/sounds/statuses/47.wav';
import sound48 from '@/assets/sounds/statuses/48.wav';
import sound49 from '@/assets/sounds/statuses/49.wav';
import sound50 from '@/assets/sounds/statuses/50.wav';
import sound51 from '@/assets/sounds/statuses/51.wav';
import sound52 from '@/assets/sounds/statuses/52.wav';
import sound53 from '@/assets/sounds/statuses/53.wav';
import sound54 from '@/assets/sounds/statuses/54.wav';
import sound55 from '@/assets/sounds/statuses/55.wav';
import sound56 from '@/assets/sounds/statuses/56.wav';
import sound57 from '@/assets/sounds/statuses/57.wav';
import sound58 from '@/assets/sounds/statuses/58.wav';
import sound59 from '@/assets/sounds/statuses/59.wav';
import sound60 from '@/assets/sounds/statuses/60.wav';
import sound61 from '@/assets/sounds/statuses/61.wav';
import sound62 from '@/assets/sounds/statuses/62.wav';
import sound63 from '@/assets/sounds/statuses/63.wav';
import sound64 from '@/assets/sounds/statuses/64.wav';
import sound65 from '@/assets/sounds/statuses/65.wav';
import sound66 from '@/assets/sounds/statuses/66.wav';
import sound67 from '@/assets/sounds/statuses/67.wav';
import sound68 from '@/assets/sounds/statuses/68.wav';
import sound69 from '@/assets/sounds/statuses/69.wav';
import sound70 from '@/assets/sounds/statuses/70.wav';
import sound71 from '@/assets/sounds/statuses/71.wav';
import sound72 from '@/assets/sounds/statuses/72.wav';
import sound73 from '@/assets/sounds/statuses/73.wav';
import sound74 from '@/assets/sounds/statuses/74.wav';
import sound75 from '@/assets/sounds/statuses/75.wav';
import sound76 from '@/assets/sounds/statuses/76.wav';
import sound77 from '@/assets/sounds/statuses/77.wav';
import sound78 from '@/assets/sounds/statuses/78.wav';
import sound79 from '@/assets/sounds/statuses/79.wav';
import sound80 from '@/assets/sounds/statuses/80.wav';
import sound81 from '@/assets/sounds/statuses/81.wav';
import sound82 from '@/assets/sounds/statuses/82.wav';
import sound83 from '@/assets/sounds/statuses/83.wav';
import sound84 from '@/assets/sounds/statuses/84.wav';
import sound85 from '@/assets/sounds/statuses/85.wav';
import sound86 from '@/assets/sounds/statuses/86.wav';
import sound87 from '@/assets/sounds/statuses/87.wav';
import sound88 from '@/assets/sounds/statuses/88.wav';
import sound89 from '@/assets/sounds/statuses/89.wav';
import sound90 from '@/assets/sounds/statuses/90.wav';
import sound91 from '@/assets/sounds/statuses/91.wav';
import sound92 from '@/assets/sounds/statuses/92.wav';
import sound93 from '@/assets/sounds/statuses/93.wav';
import sound94 from '@/assets/sounds/statuses/94.wav';
import sound95 from '@/assets/sounds/statuses/95.wav';
import sound96 from '@/assets/sounds/statuses/96.wav';
import sound97 from '@/assets/sounds/statuses/97.wav';
import sound98 from '@/assets/sounds/statuses/98.wav';
import sound99 from '@/assets/sounds/statuses/99.wav';
import sound100 from '@/assets/sounds/statuses/100.wav';

export default function BatteryStatus() {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [previousBatteryLevel, setPreviousBatteryLevel] = useState(0);
  const [threshold, setThreshold] = useState(100);
  const [thresholdInput, setThresholdInput] = useState('');
  let shakeDetected = false;

  const batterySounds: object = {
	0: sound0,
	1: sound1,
	2: sound2,
	3: sound3,
	4: sound4,
	5: sound5,
	6: sound6,
	7: sound7,
	8: sound8,
	9: sound9,
	10: sound10,
	11: sound11,
	12: sound12,
	13: sound13,
	14: sound14,
	15: sound15,
	16: sound16,
	17: sound17,
	18: sound18,
	19: sound19,
	20: sound20,
	21: sound21,
	22: sound22,
	23: sound23,
	24: sound24,
	25: sound25,
	26: sound26,
	27: sound27,
	28: sound28,
	29: sound29,
	30: sound30,
	31: sound31,
	32: sound32,
	33: sound33,
	34: sound34,
	35: sound35,
	36: sound36,
	37: sound37,
	38: sound38,
	39: sound39,
	40: sound40,
	41: sound41,
	42: sound42,
	43: sound43,
	44: sound44,
	45: sound45,
	46: sound46,
	47: sound47,
	48: sound48,
	49: sound49,
	50: sound50,
	51: sound51,
	52: sound52,
	53: sound53,
	54: sound54,
	55: sound55,
	56: sound56,
	57: sound57,
	58: sound58,
	59: sound59,
	60: sound60,
	61: sound61,
	62: sound62,
	63: sound63,
	64: sound64,
	65: sound65,
	66: sound66,
	67: sound67,
	68: sound68,
	69: sound69,
	70: sound70,
	71: sound71,
	72: sound72,
	73: sound73,
	74: sound74,
	75: sound75,
	76: sound76,
	77: sound77,
	78: sound78,
	79: sound79,
	80: sound80,
	81: sound81,
	82: sound82,
	83: sound83,
	84: sound84,
	85: sound85,
	86: sound86,
	87: sound87,
	88: sound88,
	89: sound89,
	90: sound90,
	91: sound91,
	92: sound92,
	93: sound93,
	94: sound94,
	95: sound95,
	96: sound96,
	97: sound97,
	98: sound98,
	99: sound99,
	100: sound100,
  }

  const BATTERY_CHECK_TASK = 'background-battery-check';
  const ACCELEROMETER_CHECK_TASK = 'background-accelerometer-check';

  // Define the task that will run in the background
  TaskManager.defineTask(BATTERY_CHECK_TASK, async () => {
	registerForPushNotificationsAsync();
    try {
      const level = await getBatteryLevelAsync();
      const batteryLevel = Math.round(level * 100);
      const threshold = await AsyncStorage.getItem('batteryThreshold');
      const parsedThreshold = threshold ? parseInt(threshold) : 100;
	  setThreshold(parsedThreshold);

      if (batteryLevel < parsedThreshold && batteryLevel < previousBatteryLevel) {
        sendNotification(batteryLevel);
		setPreviousBatteryLevel(batteryLevel);
      }

      return BackgroundFetch.BackgroundFetchResult.NewData;
    } catch (error) {
      console.error(error);
      return BackgroundFetch.BackgroundFetchResult.Failed;
    }
  });

  TaskManager.defineTask(ACCELEROMETER_CHECK_TASK, async () => {
    try {
      const level = await getBatteryLevelAsync();
      const batteryPercentage = Math.round(level * 100);

      Accelerometer.addListener(accelerometerData => {
        const { x } = accelerometerData;
        const totalAcceleration = Math.sqrt(x * x);
        if (totalAcceleration > 1.1 && !shakeDetected) {
          shakeDetected = true;
          playBatteryLevelAudio(batteryPercentage);
          setTimeout(() => { shakeDetected = false }, 1000); // Prevent multiple shakes in quick succession
        }
      });

      return BackgroundFetch.BackgroundFetchResult.NewData;
    } catch (error) {
      console.error(error);
      return BackgroundFetch.BackgroundFetchResult.Failed;
    }
  });

  useEffect(() => {
	registerForPushNotificationsAsync();
    const getBatteryLevel = async () => {
      const level = await getBatteryLevelAsync();
      const batteryPercentage = Math.round(level * 100); // Convert to percentage
      setBatteryLevel(batteryPercentage);

      if (batteryLevel < threshold && batteryLevel > previousBatteryLevel) {
        sendNotification(batteryLevel);
		setPreviousBatteryLevel(batteryLevel);
      }
    };

    getBatteryLevel();

    const interval = setInterval(getBatteryLevel, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [threshold]);

  useEffect(() => {
    Accelerometer.setUpdateInterval(250);
    const subscription = Accelerometer.addListener(accelerometerData => {
      const { x } = accelerometerData;
      const totalAcceleration = Math.sqrt(x * x);
      if (totalAcceleration > 1.2 && !shakeDetected) {
        shakeDetected = true;
        playBatteryLevelAudio(batteryLevel);
        setTimeout(() => { shakeDetected = false }, 1000); // Prevent multiple shakes in quick succession
      }
    });

    return () => {
      subscription && subscription.remove();
    };
  }, [batteryLevel]);

  useEffect(() => {
    const loadThreshold = async () => {
      const savedThreshold = await AsyncStorage.getItem('batteryThreshold');
      if (savedThreshold) {
        setThreshold(parseInt(savedThreshold));
      }
    };

    loadThreshold();
    startBackgroundTasks();
  }, []);

  const startBackgroundTasks = async () => {
    try {
      await BackgroundFetch.registerTaskAsync(BATTERY_CHECK_TASK, {
        minimumInterval: 15,
        stopOnTerminate: false,
        startOnBoot: true,
      });
      await BackgroundFetch.registerTaskAsync(ACCELEROMETER_CHECK_TASK, {
        minimumInterval: 1,
        stopOnTerminate: false,
        startOnBoot: true,
      });
    } catch (error) {
      console.error('Failed to register background task', error);
    }
  };

  const playBatteryLevelAudio = async (batteryPercentage: number) => {
    try {
      const soundFile = batterySounds[batteryPercentage];
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(soundFile);
      await soundObject.playAsync();
    } catch (error) {
      console.error('Error playing sound', error);
    }
  };

  const sendNotification = async (batteryPercentage: number) => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Low Charge!',
        body: `Hey there! You only have ${batteryPercentage}% battery remaining! Please charge your phone!`,
      },
      trigger: {
        seconds: 2,
        channelId: 'lowBattery',
      },
    });
  };

  const saveThreshold = async () => {
    try {
      const parsedThreshold = parseInt(thresholdInput);
      if (!isNaN(parsedThreshold) && parsedThreshold > 0 && parsedThreshold <= 100) {
        await AsyncStorage.setItem('batteryThreshold', thresholdInput);
        setThreshold(parsedThreshold);
        Alert.alert('Threshold saved', `Battery threshold set to ${thresholdInput}%`);
      } else {
        Alert.alert('Invalid Input', 'Please enter a valid threshold between 1 and 100.');
      }
    } catch (error) {
      console.error('Error saving threshold', error);
    }
  };

  async function registerForPushNotificationsAsync() {
    let token;

    await Notifications.setNotificationChannelAsync('lowBattery', {
      name: 'Low Battery notification',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [250, 0, 250, 0],
      sound: notificationSound,
    });

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      try {
        const projectId = Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
        if (!projectId) {
          throw new Error('Project ID not found');
        }
        token = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        console.log(token);
      } catch (e) {
        token = `${e}`;
      }
    } else {
      alert('Must use physical device for Push Notifications');
    }

    return token;
  }

  useEffect(() => {
    const configureAudioMode = async () => {
      await Audio.setAudioModeAsync({
        shouldDuckAndroid: true,
        interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
        playThroughEarpieceAndroid: false,
      });
    };

    configureAudioMode();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Battery Level: {batteryLevel}%</Text>
      <TextInput
        style={styles.input}
        placeholder="Set Battery Threshold"
        value={thresholdInput}
        onChangeText={setThresholdInput}
        keyboardType="numeric"
      />
      <Button title="Save Threshold" onPress={saveThreshold} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white',
    marginTop: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
});