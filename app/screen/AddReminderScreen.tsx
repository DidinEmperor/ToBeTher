import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { RootStackParamList } from "../app";
import { Reminder } from "../types/reminder";

type Props = NativeStackScreenProps<RootStackParamList, "AddReminder">;

export default function AddReminderScreen({ navigation }: Props) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const saveReminder = async () => {
    const newReminder: Reminder = { id: uuidv4(), title, time };
    const data = await AsyncStorage.getItem("reminders");
    const reminders: Reminder[] = data ? JSON.parse(data) : [];
    reminders.push(newReminder);
    await AsyncStorage.setItem("reminders", JSON.stringify(reminders));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Judul Pengingat" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Waktu (contoh: 17:00)" value={time} onChangeText={setTime} style={styles.input} />
      <Button title="Simpan" onPress={saveReminder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: "#999", padding: 10, marginBottom: 15, borderRadius: 5 },
});
