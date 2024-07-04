import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { getBatteryLevelAsync } from 'expo-battery';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import '@/assets/sounds/notification.wav';

export default function BatteryStatus() {
const [batteryLevel, setBatteryLevel] = useState(0);
let level = 0;
let threshold = 75;
useEffect(() => {
	const getBatteryLevel = async () => {
	level = await getBatteryLevelAsync()
	setBatteryLevel(Math.round(level * 100)); // Convert to percentage
	};

	getBatteryLevel();

	registerForPushNotificationsAsync();
	const interval = setInterval(getBatteryLevel, 5000); // Update every 5 seconds
	
	return () => clearInterval(interval); // Cleanup interval on component unmount
}, []);

Notifications.setNotificationHandler({
	handleNotification: async () => ({
	shouldShowAlert: true,
	shouldPlaySound: true,
	shouldSetBadge: false,
	}),
});

const notification = {
	content: {
	title: 'Low Charge!',
	body: `Hey there! You only have ${batteryLevel}% battery remaining! Please charge your phone!`,
	sound: 'notification.wav'
	},
	trigger: {
		seconds: 2,
		channelId: 'lowBattery'
	}
};
if(batteryLevel < threshold) {
	Notifications.scheduleNotificationAsync(notification);
}
async function registerForPushNotificationsAsync() {
	let token;
	
	await Notifications.setNotificationChannelAsync('lowBattery', {
		name: 'Low Battery notification',
		importance: Notifications.AndroidImportance.MAX,
		vibrationPattern: [250, 0, 250, 0],
		sound: 'notification.wav'
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

return (
	<View style={styles.container}>
		<Text style={styles.text}>Battery Level: {batteryLevel}%</Text>
	</View>
);
};

const styles = StyleSheet.create({
container: {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
},
text: {
	fontSize: 16,
	color: 'white'
},
});