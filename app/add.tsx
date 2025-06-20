import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { Reminder } from "../types/reminder";

export default function AddReminder() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const router = useRouter();

  const saveReminder = async () => {
    const newReminder: Reminder = { id: uuidv4(), title, time };
    const existing = await AsyncStorage.getItem("reminders");
    const list = existing ? JSON.parse(existing) : [];
    list.push(newReminder);
    await AsyncStorage.setItem("reminders", JSON.stringify(list));
    router.back();
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
