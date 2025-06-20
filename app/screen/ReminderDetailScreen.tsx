import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'ReminderDetail'>;

export default function ReminderDetailScreen({ route }: Props) {
  const { reminder } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{reminder.title}</Text>
      <Text>Waktu: {reminder.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
